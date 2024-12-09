import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import DocumentViewer from '../components/DocumentViewer';

type Document = {
  id: string;
  title: string;
  description: string;
  path: string;
};

type DocumentCategory = {
  title: string;
  description: string;
  documents: Document[];
};

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const documentCategories: DocumentCategory[] = [
    {
      title: "Grundläggande dokument",
      description: "Partiets grundläggande ramverk och vision",
      documents: [
        {
          id: "STR-101",
          title: "Partigrund",
          description: "Grundläggande vision och struktur för Fjärilspartiet",
          path: "/docs/svenska/STR/STR-100-grund/STR-101-parti-grund.md"  // Note the '../' prefix
        },
        {
          id: "STR-001",
          title: "Långsiktig vision och transformativa mål",
          description: "Vår vision för framtiden och vägen dit",
          path: "/docs/svenska/STR/STR-100-grund/STR-001-långsiktig-vision-och-transformativa-mål.md"
        },
        {
          id: "STR-104",
          title: "Fjärilsramverket",
          description: "Vår symbolik och transformation genom olika stadier",
          path: "/docs/svenska/STR/STR-100-grund/STR-104-fjärilsramverket.md"
        }
      ]
    },
    {
      title: "Huvudsakliga politikområden",
      description: "Detaljerade policydokument för olika områden",
      documents: [
        {
          id: "STR-203",
          title: "Adaptiv universell basinkomst (AUBI)",
          description: "Ett innovativt ekonomiskt system för grundtrygghet",
          path: "/docs/svenska/STR/STR-200-politik/STR-203-adaptivt-universellt-grundinkomstsystem.md"
        },
        {
          id: "STR-401",
          title: "En blomstrande framtid",
          description: "Lokal motståndskraft och hållbara matsystem",
          path: "/docs/svenska/STR/STR-400-hållbarhetsstrategi/STR-401-en-blomstrande-framtid-lokal-motståndskraft-och-hållbara-matsystem.md"
        },
        {
          id: "STR-206",
          title: "Individuell autonomi och personlig utveckling som social rättighet",
          description: "Vår syn på individuell utveckling och samhällsengagemang",
          path: "/docs/svenska/STR/STR-200-politik/STR-206-individuell-autonomi-och-personlig-utveckling-som-social-rättighet.md"
        }
      ]
    },
    {
      title: "Medlemsinformation",
      description: "Guider och information för medlemmar",
      documents: [
        {
          id: "GUIDE-101",
          title: "Guide för nya medlemmar",
          description: "Grundläggande information och riktlinjer för att komma igång som medlem",
          path: "/docs/svenska/guide-för-nya-medlemmar.md"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container">
        <h1 className="section-header">
          Dokumentation
        </h1>

        {!selectedDoc ? (
          <>
            <div className="card mb-8">
              <p>
                Här hittar du våra viktigaste policydokument och ramverk. Klicka på ett dokument för att läsa det.
              </p>
            </div>

            <div className="space-y-16">
              {documentCategories.map((category, index) => (
                <div key={index} className="space-y-8">
                  <div className="card">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>

                  <div className="grid gap-6">
                    {category.documents.map((doc) => (
                      <div key={doc.id} className="card hover:shadow cursor-pointer" onClick={() => setSelectedDoc(doc)}>
                        <h3>
                          {doc.title}
                          <span className="text-sm text-gray-500 ml-2">({doc.id})</span>
                        </h3>
                        <p className="mt-2">{doc.description}</p>
                        <button className="btn-primary mt-4">
                          Läs dokument →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="card mt-12">
              <h2>Fullständig dokumentation</h2>
              <p>
                All vår dokumentation är öppen och tillgänglig. Utforska alla dokument:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Strategiska dokument (STR)</li>
                <li>Taktiska ramverk (TAK)</li>
                <li>Operativa riktlinjer (OPS)</li>
                <li>Medlemsdokumentation (MED)</li>
              </ul>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/fjarilspartiet-se/fjarilspartiet/tree/main/docs/svenska"
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
          </>
        ) : (
          <div className="space-y-4">
            <button 
              onClick={() => setSelectedDoc(null)}
              className="btn-secondary mb-4"
            >
              ← Tillbaka till dokumentlistan
            </button>
            <DocumentViewer 
              path={selectedDoc.path}
              onClose={() => setSelectedDoc(null)}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
