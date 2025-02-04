import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface DocumentViewerProps {
  path: string;
  onClose?: () => void;
}

// Define a type for the raw metadata as it appears in the markdown files
interface RawDocumentMetadata {
  'dokumentid': string;
  'titel': string;
  'version': string;
  'senast-uppdaterad': string;
  'ansvarig': string;
  'roll': string;
  'relaterade-dokument': string;
}

// Type guard to check if a key is a valid metadata key
function isMetadataKey(key: string): key is keyof RawDocumentMetadata {
  return [
    'dokumentid',
    'titel',
    'version',
    'senast-uppdaterad',
    'ansvarig',
    'roll',
    'relaterade-dokument'
  ].includes(key);
}

export default function DocumentViewer({ path, onClose }: DocumentViewerProps) {
  const [content, setContent] = useState<string>('');
  const [metadata, setMetadata] = useState<Partial<RawDocumentMetadata> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDocument() {
      try {
        const basePath = process.env.NODE_ENV === 'production' ? '' : '';
        const response = await fetch(`${basePath}/docs/svenska/${path}`);
        
        if (!response.ok) {
          throw new Error('Could not fetch document');
        }

        // Get the raw text instead of trying to parse as JSON
        const content = await response.text();
        
        // Split the frontmatter and content
        const parts = content.split('---');
        if (parts.length >= 3) {
          // Parse frontmatter
          const frontmatter = parts[1].trim();
          const frontmatterLines = frontmatter.split('\n');
          const metadata: Partial<RawDocumentMetadata> = {};
          
          frontmatterLines.forEach((line: string) => {
            const [key, ...valueParts] = line.split(':');
            const trimmedKey = key.trim();
            if (trimmedKey && valueParts.length > 0 && isMetadataKey(trimmedKey)) {
              metadata[trimmedKey] = valueParts.join(':').trim();
            }
          });

          setMetadata(metadata);
          // Set content without frontmatter
          setContent(parts.slice(2).join('---').trim());
        } else {
          // No frontmatter, use entire content
          setContent(content);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching document:', err);
        setError('Kunde inte ladda dokumentet. Försök igen senare.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchDocument();
  }, [path]);

  if (isLoading) {
    return (
      <div className="card">
        <p>Laddar dokument...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card bg-red-50">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dokument</h2>
        {onClose && (
          <button 
            onClick={onClose}
            className="btn-secondary"
          >
            Stäng
          </button>
        )}
      </div>

      {metadata && (
        <div className="bg-gray-50 p-4 rounded-lg mb-8 space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Dokument-ID</p>
              <p className="font-medium">{metadata['dokumentid']}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Version</p>
              <p className="font-medium">{metadata['version']}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Senast uppdaterad</p>
              <p className="font-medium">{metadata['senast-uppdaterad']}</p>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Ansvarig</p>
                <p className="font-medium">{metadata['ansvarig']}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Roll</p>
                <p className="font-medium">{metadata['roll']}</p>
              </div>
            </div>
          </div>
          
          {metadata['relaterade-dokument'] && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Relaterade dokument</p>
              <ul className="list-disc list-inside space-y-1">
                {metadata['relaterade-dokument'].split('\n').map((doc: string, index: number) => (
                  <li key={index} className="text-sm">{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
