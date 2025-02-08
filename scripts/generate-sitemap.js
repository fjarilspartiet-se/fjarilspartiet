// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://fjarilspartiet.se';

// Define static pages with their properties
const staticPages = [
  { id: '', priority: 1.0, changeFreq: 'weekly' }, // Home page
  { id: 'om-oss', priority: 0.9, changeFreq: 'monthly' },
  { id: 'vision', priority: 0.9, changeFreq: 'monthly' },
  { id: 'losningar', priority: 0.9, changeFreq: 'monthly' },
  { id: 'helhet', priority: 0.8, changeFreq: 'monthly' },
  { id: 'bli-medlem', priority: 0.8, changeFreq: 'monthly' },
  { id: 'dokument', priority: 0.8, changeFreq: 'weekly' },
  { id: 'resurser', priority: 0.7, changeFreq: 'monthly' },
  { id: 'kontakt', priority: 0.7, changeFreq: 'monthly' },
];

const documents = [
  // This will be populated with your actual documents
];

const allPages = [...staticPages, ...documents];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages.map(page => `
      <url>
        <loc>${baseUrl}/${page.id}</loc>
        ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
        ${page.changeFreq ? `<changefreq>${page.changeFreq}</changefreq>` : ''}
        ${page.priority ? `<priority>${page.priority}</priority>` : ''}
      </url>
    `).join('')}
  </urlset>`;

// Write sitemap to the public directory
const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap);

console.log('Sitemap generated successfully!');
