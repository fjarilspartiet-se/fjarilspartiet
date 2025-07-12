import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import DocumentViewer from '../components/DocumentViewer';
import SEO from '../components/SEO';
import { 
  Search, 
  FileText, 
  Folder, 
  FolderOpen, 
  ExternalLink, 
  Download,
  ArrowLeft,
  Calendar,
  User,
  GitBranch
} from 'lucide-react';

// Import the generated document index
import { 
  documents, 
  documentCategories, 
  getDocumentById, 
  searchDocuments,
  type Document
} from '../data/documentIndex';

export default function DocumentsPage() {
  const router = useRouter();
  const { doc: selectedDocId } = router.query;
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  // Handle document selection from URL
  useEffect(() => {
    if (selectedDocId && typeof selectedDocId === 'string') {
      const doc = getDocumentById(selectedDocId.toUpperCase());
      if (doc) {
        setSelectedDoc(doc);
      }
    } else {
      setSelectedDoc(null);
    }
  }, [selectedDocId]);

  // Filter documents based on search and category selection
  useEffect(() => {
    let filtered = documents;

    if (searchTerm) {
      filtered = searchDocuments(searchTerm);
    }

    if (selectedCategory) {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(doc => doc.subcategory === selectedSubcategory);
    }

    setFilteredDocuments(filtered);
    
    // Debug logging - remove this after fixing
    console.log('Filter Debug:', {
      selectedCategory,
      selectedSubcategory,
      searchTerm,
      totalDocuments: documents.length,
      filteredDocuments: filtered.length,
      sampleDoc: documents[0],
      availableCategories: [...new Set(documents.map(d => d.category))]
    });
    
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategorySelect = (categoryId: string) => {
    console.log('Category selected:', categoryId);
    setSelectedCategory(categoryId === selectedCategory ? '' : categoryId);
    setSelectedSubcategory('');
    if (categoryId !== selectedCategory) {
      setExpandedCategories(prev => new Set([...prev, categoryId]));
    }
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId === selectedSubcategory ? '' : subcategoryId);
  };

  const handleDocumentSelect = (doc: Document) => {
    setSelectedDoc(doc);
    router.push(`/dokument?doc=${doc.id.toLowerCase()}`, undefined, { shallow: true });
  };

  const handleBackToList = () => {
    setSelectedDoc(null);
    router.push('/dokument', undefined, { shallow: true });
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSearchTerm('');
  };

  // Get current SEO info
  const currentSEO = selectedDoc ? {
    title: `${selectedDoc.title} (${selectedDoc.id})`,
    description: selectedDoc.description || `Läs ${selectedDoc.title} från Fjärilspartiets dokumentation.`,
    canonical: `/dokument?doc=${selectedDoc.id.toLowerCase()}`
  } : {
    title: 'Dokumentation och ramverk',
    description: 'Utforska Fjärilspartiets omfattande dokumentation - från grundläggande visioner och ramverk till detaljerade policydokument.',
    canonical: '/dokument'
  };

  return (
    <>
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={currentSEO.canonical}
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {selectedDoc ? (
            // Document viewer mode
            <div>
              <button 
                onClick={handleBackToList}
                className="btn-secondary mb-6 inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till dokumentlistan
              </button>
              
              {/* Document metadata */}
              <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded mr-3">
                        {selectedDoc.id}
                      </span>
                      {selectedDoc.version && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          v{selectedDoc.version}
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedDoc.title}
                    </h1>
                    {selectedDoc.description && (
                      <p className="text-gray-600 mb-4">{selectedDoc.description}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={`https://raw.githubusercontent.com/fjarilspartiet-se/fjarilspartiet/main/public/docs/svenska/${selectedDoc.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm inline-flex items-center"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Ladda ner
                    </a>
                    <a
                      href={`https://github.com/fjarilspartiet-se/fjarilspartiet/blob/main/public/docs/svenska/${selectedDoc.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-500">
                  {selectedDoc.author && (
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>Ansvarig: {selectedDoc.author}</span>
                    </div>
                  )}
                  {selectedDoc.lastUpdated && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Uppdaterad: {selectedDoc.lastUpdated}</span>
                    </div>
                  )}
                  {selectedDoc.relatedDocs && selectedDoc.relatedDocs.length > 0 && (
                    <div className="flex items-center">
                      <GitBranch className="w-4 h-4 mr-2" />
                      <span>{selectedDoc.relatedDocs.length} relaterade dokument</span>
                    </div>
                  )}
                </div>
              </div>
              
              <DocumentViewer 
                path={selectedDoc.path}
                onClose={handleBackToList}
              />
            </div>
          ) : (
            // Document browser mode
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Dokumentation</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Utforska Fjärilspartiets omfattande dokumentation - från grundläggande visioner 
                  och ramverk till detaljerade policydokument. All vår dokumentation är öppen och 
                  tillgänglig för alla.
                </p>
              </div>

              {/* Search and stats */}
              <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Sök i dokumenten..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{filteredDocuments.length} dokument</span>
                  <a
                    href="https://github.com/fjarilspartiet-se/fjarilspartiet/tree/main/public/docs/svenska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Alla dokument på GitHub
                  </a>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold mb-4">Kategorier</h3>
                    
                    <div className="space-y-2">
                      {documentCategories.map((category) => (
                        <div key={category.id}>
                          <button
                            onClick={() => {
                              handleCategorySelect(category.id);
                              toggleCategory(category.id);
                            }}
                            className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                              selectedCategory === category.id 
                                ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              <div>
                                <div className="font-medium">{category.name}</div>
                                <div className="text-sm text-gray-500">{category.description}</div>
                              </div>
                            </div>
                            {category.subcategories && (
                              expandedCategories.has(category.id) 
                                ? <FolderOpen className="w-4 h-4" />
                                : <Folder className="w-4 h-4" />
                            )}
                          </button>

                          {/* Subcategories */}
                          {category.subcategories && expandedCategories.has(category.id) && (
                            <div className="ml-4 mt-2 space-y-1">
                              {Object.entries(category.subcategories).map(([subcategoryId, subcategory]) => (
                                <button
                                  key={subcategoryId}
                                  onClick={() => handleSubcategorySelect(subcategoryId)}
                                  className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                    selectedSubcategory === subcategoryId
                                      ? 'bg-blue-50 text-blue-700'
                                      : 'hover:bg-gray-50'
                                  }`}
                                >
                                  <div className="font-medium">{subcategory.name}</div>
                                  <div className="text-xs text-gray-500">{subcategory.description}</div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Filter Summary */}
                  {(selectedCategory || selectedSubcategory || searchTerm) && (
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-blue-900">Aktiva filter:</h4>
                        <button
                          onClick={clearFilters}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Rensa alla
                        </button>
                      </div>
                      <div className="space-y-1 text-sm">
                        {selectedCategory && (
                          <div className="flex items-center justify-between">
                            <span>Kategori: {documentCategories.find(c => c.id === selectedCategory)?.name}</span>
                            <button
                              onClick={() => setSelectedCategory('')}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          </div>
                        )}
                        {selectedSubcategory && (
                          <div className="flex items-center justify-between">
                            <span>Underkategori: {
                              documentCategories
                                .find(c => c.id === selectedCategory)
                                ?.subcategories?.[selectedSubcategory]?.name
                            }</span>
                            <button
                              onClick={() => setSelectedSubcategory('')}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          </div>
                        )}
                        {searchTerm && (
                          <div className="flex items-center justify-between">
                            <span>Sök: {searchTerm}</span>
                            <button
                              onClick={() => setSearchTerm('')}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Document List */}
                <div className="lg:col-span-3">
                  {/* Debug information - remove after fixing */}
              <div className="mb-4 bg-yellow-50 p-4 rounded-lg text-sm">
                <strong>Debug Info:</strong>
                <div>Total documents: {documents.length}</div>
                <div>Filtered documents: {filteredDocuments.length}</div>
                <div>Selected category: {selectedCategory || 'none'}</div>
                <div>Selected subcategory: {selectedSubcategory || 'none'}</div>
                <div>Available categories in documents: {[...new Set(documents.map(d => d.category))].join(', ')}</div>
                <div>Available subcategories in documents: {[...new Set(documents.map(d => d.subcategory).filter(Boolean))].join(', ')}</div>
              </div>

              {filteredDocuments.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Inga dokument hittades för de valda filtren.</p>
                      {(selectedCategory || selectedSubcategory || searchTerm) && (
                        <button
                          onClick={clearFilters}
                          className="mt-2 text-blue-600 hover:text-blue-800"
                        >
                          Rensa filter och visa alla dokument
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredDocuments.map((doc) => (
                        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded mr-3">
                                  {doc.id}
                                </span>
                                {doc.version && (
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mr-2">
                                    v{doc.version}
                                  </span>
                                )}
                                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                  {documentCategories.find(c => c.id === doc.category)?.name}
                                </span>
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {doc.title}
                              </h4>
                              {doc.description && (
                                <p className="text-gray-600 mb-3">{doc.description}</p>
                              )}
                              <div className="flex items-center text-sm text-gray-500 space-x-4">
                                {doc.author && (
                                  <span className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    {doc.author}
                                  </span>
                                )}
                                {doc.lastUpdated && (
                                  <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {doc.lastUpdated}
                                  </span>
                                )}
                                {doc.relatedDocs && doc.relatedDocs.length > 0 && (
                                  <span className="flex items-center">
                                    <GitBranch className="w-4 h-4 mr-1" />
                                    {doc.relatedDocs.length} relaterade
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleDocumentSelect(doc)}
                              className="btn-primary text-sm"
                            >
                              Läs dokument
                            </button>
                            <a
                              href={`https://raw.githubusercontent.com/fjarilspartiet-se/fjarilspartiet/main/public/docs/svenska/${doc.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-sm inline-flex items-center"
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Ladda ner
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer section with repository links */}
              <div className="mt-16 bg-gray-50 p-8 rounded-lg">
                <h3 className="font-semibold mb-4">Fullständig dokumentation</h3>
                <p className="text-gray-600 mb-4">
                  All vår dokumentation är öppen och tillgänglig. Utforska alla dokument:
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/fjarilspartiet-se/fjarilspartiet/tree/main/public/docs/svenska"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                  <a 
                    href="https://tinyurl.com/fjarilspartiets-dokument"
                    className="btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Drive
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}
