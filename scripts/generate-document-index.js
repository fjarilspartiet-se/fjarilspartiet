// scripts/generate-document-index.js
const fs = require('fs');
const path = require('path');

// Path to your documents directory
const DOCS_DIR = './public/docs/svenska';
const OUTPUT_FILE = './src/data/documentIndex.ts';

// Document metadata parser
function parseDocumentMetadata(content) {
  const metadata = {};
  
  // Look for YAML frontmatter or metadata section
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const lines = frontmatter.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/^(\w+(?:-\w+)*)\s*:\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        metadata[key] = value.trim();
      }
    });
  }
  
  // Extract title from content if not in metadata
  if (!metadata.titel && !metadata.title) {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      metadata.titel = titleMatch[1];
    }
  }
  
  return metadata;
}

// Get category info based on directory structure
function getCategoryInfo(filePath) {
  const parts = filePath.split(path.sep);
  
  // Handle fallstudier-ggf folder
  if (parts.some(part => part.includes('fallstudier-ggf'))) {
    return { category: 'FALLSTUDIE', subcategory: 'GGF' };
  }
  
  // Handle specific member guide file (could be in root or MED folder)
  if (parts.some(part => part.includes('guide-för-nya-medlemmar')) || 
      filePath.includes('guide-för-nya-medlemmar')) {
    return { category: 'MED', subcategory: undefined };
  }
  
  // Handle MED category specifically - NO subcategories for MED
  if (parts.some(part => part === 'MED' || part.startsWith('MED-'))) {
    return { category: 'MED', subcategory: undefined };
  }
  
  // Handle standard categories with subcategories (STR, TAK, OPS only)
  for (const part of parts) {
    // Check for pattern like "STR-200-politik" or "TAK-100-organisation"
    const subcategoryMatch = part.match(/^(STR|TAK|OPS)-(\d+)/);
    if (subcategoryMatch) {
      const [, categoryCode, subNumber] = subcategoryMatch;
      const subcategory = `${categoryCode}-${subNumber}`;
      return { category: categoryCode, subcategory };
    }
  }
  
  // Check for main category folders
  for (const part of parts) {
    if (/^(STR|TAK|OPS)$/.test(part)) {
      return { category: part, subcategory: undefined };
    }
  }
  
  // If no specific category found, check if it's in MED directory or looks like member documentation
  if (parts.some(part => part.toLowerCase().includes('medlem'))) {
    return { category: 'MED', subcategory: undefined };
  }
  
  return { category: 'other', subcategory: undefined };
}

// Recursively scan directory for markdown files
function scanDirectory(dir, basePath = '') {
  const documents = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        documents.push(...scanDirectory(fullPath, relativePath));
      } else if (item.endsWith('.md')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const metadata = parseDocumentMetadata(content);
          const { category, subcategory } = getCategoryInfo(relativePath);
          
          // Extract document ID from filename
          let documentId;
          const standardMatch = item.match(/^([A-Z]+-[A-Z]+-\d+|[A-Z]+-\d+)/);
          
          if (standardMatch) {
            documentId = standardMatch[1];
          } else if (item.includes('guide-för-nya-medlemmar')) {
            documentId = 'GUIDE-101';
          } else if (metadata.dokumentid) {
            documentId = metadata.dokumentid;
          } else {
            // Generate a reasonable ID for non-standard documents
            documentId = item.replace('.md', '').toUpperCase().replace(/[^A-Z0-9]/g, '-');
          }
          
          // Create document entry
          const documentDescription = getDocumentDescription(content, metadata);
          const relatedDocsList = parseRelatedDocs(metadata['relaterade-dokument'] || metadata['related-documents']);
          
          const document = {
            id: documentId,
            title: metadata.titel || metadata.title || item.replace('.md', '').replace(/-/g, ' '),
            path: relativePath.replace(/\\/g, '/'),
            category,
            ...(subcategory && { subcategory }), // Only include subcategory if it exists
            ...(documentDescription && { description: documentDescription }), // Only include if exists
            ...(metadata.version && { version: metadata.version }), // Only include if exists
            ...(metadata['senast-uppdaterad'] || metadata['last-updated']) && { 
              lastUpdated: metadata['senast-uppdaterad'] || metadata['last-updated'] 
            },
            ...(metadata.ansvarig || metadata.author) && { 
              author: metadata.ansvarig || metadata.author 
            },
            ...(metadata.roll || metadata.role) && { 
              role: metadata.roll || metadata.role 
            },
            ...(metadata.sortering || metadata.sortOrder) && { 
              sortOrder: parseInt(metadata.sortering || metadata.sortOrder) || 999 
            },
            ...(metadata.prioritet || metadata.priority) && { 
              priority: metadata.prioritet || metadata.priority 
            },
            ...(relatedDocsList.length > 0 && { relatedDocs: relatedDocsList })
          };
          
          documents.push(document);
        } catch (error) {
          console.warn(`Error processing file ${fullPath}:`, error.message);
        }
      }
    });
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
  }
  
  return documents;
}

// Extract description from document content
function getDocumentDescription(content, metadata) {
  // Check if description is in metadata
  if (metadata.beskrivning || metadata.description) {
    return metadata.beskrivning || metadata.description;
  }
  
  // Look for first paragraph after title
  const lines = content.split('\n');
  let descriptionStartIndex = -1;
  
  // Find the end of frontmatter and title
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith('#') && !line.startsWith('---') && !line.includes(':')) {
      descriptionStartIndex = i;
      break;
    }
  }
  
  if (descriptionStartIndex !== -1) {
    // Get first meaningful paragraph
    for (let i = descriptionStartIndex; i < Math.min(descriptionStartIndex + 5, lines.length); i++) {
      const line = lines[i].trim();
      if (line && line.length > 50) {
        return line.substring(0, 200) + (line.length > 200 ? '...' : '');
      }
    }
  }
  
  return undefined; // Return undefined instead of null
}

// Parse related documents list
function parseRelatedDocs(relatedString) {
  if (!relatedString) return [];
  
  // Handle YAML array format
  if (relatedString.includes('-')) {
    return relatedString
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('-'))
      .map(line => {
        const match = line.match(/- (.+?)(?:\s*#|$)/);
        return match ? match[1].trim() : null;
      })
      .filter(Boolean);
  }
  
  // Handle comma-separated format
  return relatedString
    .split(',')
    .map(doc => doc.trim())
    .filter(Boolean);
}

// Category definitions
const categoryDefinitions = {
  STR: {
    name: 'Strategiska dokument',
    description: 'Partiets grundläggande vision, politik och strategier',
    icon: '🎯',
    subcategories: {
      'STR-100': { name: 'Grundläggande ramverk', description: 'Partiets fundament och kärnprinciper' },
      'STR-200': { name: 'Politiska strategier', description: 'Konkreta politiska förslag och ramverk' },
      'STR-300': { name: 'Internationellt', description: 'Global strategi och internationellt samarbete' },
      'STR-400': { name: 'Hållbarhet', description: 'Miljö- och hållbarhetsstrategier' },
      'STR-500': { name: 'Digitalt samhälle', description: 'Digital etik och teknologistrategi' }
    }
  },
  TAK: {
    name: 'Taktiska ramverk',
    description: 'Implementering och praktiska tillämpningar',
    icon: '⚙️',
    subcategories: {
      'TAK-100': { name: 'Organisation', description: 'Organisationsstruktur och styrning' },
      'TAK-200': { name: 'Utveckling', description: 'Utbildning och utvecklingsramverk' },
      'TAK-300': { name: 'Hälsa', description: 'Hälso- och välfärdsramverk' },
      'TAK-400': { name: 'Samhälle', description: 'Bostad, stad och samhällsutveckling' },
      'TAK-500': { name: 'Lokal utveckling', description: 'Landsbygd och decentralisering' }
    }
  },
  OPS: {
    name: 'Operativa riktlinjer',
    description: 'Praktiska handledningar och processer',
    icon: '📋',
    subcategories: {
      'OPS-100': { name: 'Digital', description: 'Digitala verktyg och plattformar' },
      'OPS-200': { name: 'Riktlinjer', description: 'Kommunikation och processer' },
      'OPS-300': { name: 'Teknik', description: 'Tekniska ramverk och implementering' },
      'OPS-400': { name: 'Internationellt', description: 'Internationella samarbetsmekanismer' }
    }
  },
  MED: {
    name: 'Medlemsdokumentation',
    description: 'Guider och resurser för medlemmar',
    icon: '👥'
  },
  FALLSTUDIE: {
    name: 'Fallstudier',
    description: 'Praktiska exempel och fallstudier',
    icon: '📚',
    subcategories: {
      'GGF': { name: 'Grundläggande garanterad försörjning', description: 'Fallstudier relaterade till GGF och ekonomiska system' }
    }
  }
};

// Main function
function generateDocumentIndex() {
  console.log('Scanning documents...');
  
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Documents directory not found: ${DOCS_DIR}`);
    process.exit(1);
  }
  
  const documents = scanDirectory(DOCS_DIR);
  
  console.log(`Found ${documents.length} documents`);
  
  // Sort documents by category and smart ordering
  documents.sort((a, b) => {
    // First sort by category
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    
    // Within category, sort by subcategory
    const aSubcat = a.subcategory || '';
    const bSubcat = b.subcategory || '';
    if (aSubcat !== bSubcat) {
      return aSubcat.localeCompare(bSubcat);
    }
    
    // Within subcategory, use explicit sort order if available
    if (a.sortOrder !== undefined && b.sortOrder !== undefined) {
      return a.sortOrder - b.sortOrder;
    }
    if (a.sortOrder !== undefined) return -1;
    if (b.sortOrder !== undefined) return 1;
    
    // Then by priority (high, medium, low)
    const priorityOrder = { 'high': 1, 'hög': 1, 'medium': 2, 'medel': 2, 'low': 3, 'låg': 3 };
    const aPriority = priorityOrder[a.priority?.toLowerCase() || ''] || 4;
    const bPriority = priorityOrder[b.priority?.toLowerCase() || ''] || 4;
    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }
    
    // Finally by document ID (natural order)
    return a.id.localeCompare(b.id);
  });
  
  // Generate TypeScript file
  const output = `// Auto-generated document index
// Last updated: ${new Date().toISOString()}

export interface Document {
  id: string;
  title: string;
  path: string;
  category: string;
  subcategory?: string;
  description?: string;
  version?: string;
  lastUpdated?: string;
  author?: string;
  role?: string;
  sortOrder?: number;
  priority?: string;
  relatedDocs?: string[];
}

export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories?: { [key: string]: { name: string; description: string; } };
}

export const documentCategories: DocumentCategory[] = ${JSON.stringify(Object.entries(categoryDefinitions).map(([id, def]) => ({
  id,
  ...def
})), null, 2)};

export const documents: Document[] = ${JSON.stringify(documents, null, 2)};

// Helper functions
export function getDocumentById(id: string): Document | undefined {
  return documents.find(doc => doc.id === id);
}

export function getDocumentsByCategory(category: string): Document[] {
  return documents.filter(doc => doc.category === category);
}

export function getDocumentsBySubcategory(subcategory: string): Document[] {
  return documents.filter(doc => doc.subcategory === subcategory);
}

export function searchDocuments(query: string): Document[] {
  const lowerQuery = query.toLowerCase();
  return documents.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.description?.toLowerCase().includes(lowerQuery) ||
    doc.id.toLowerCase().includes(lowerQuery)
  );
}
`;
  
  // Create output directory if it doesn't exist
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write the file
  fs.writeFileSync(OUTPUT_FILE, output);
  
  console.log(`Document index generated: ${OUTPUT_FILE}`);
  console.log('Categories found:');
  
  const categoryStats = {};
  documents.forEach(doc => {
    if (!categoryStats[doc.category]) {
      categoryStats[doc.category] = 0;
    }
    categoryStats[doc.category]++;
  });
  
  Object.entries(categoryStats).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} documents`);
  });
}

// Run the generator
if (require.main === module) {
  generateDocumentIndex();
}

module.exports = { generateDocumentIndex };
