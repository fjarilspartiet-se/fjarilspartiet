import { useState } from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ShareButtons({ 
  title = 'Fjärilspartiet - Ett parti för systemisk samhällsförnyelse',
  description = 'Vi utvecklar konkreta lösningar för ett samhälle där alla kan blomstra. Genom systemtänkande och omsorgsfull utveckling skapar vi strukturer som fungerar för både människor och miljö.',
  className = ''
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  // Get the current URL - we'll need to update this based on deployment
  const url = typeof window !== 'undefined' ? window.location.href : '';
  
  // Social share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <p className="text-sm font-medium text-gray-400">
        Dela
      </p>
      
      <div className="flex space-x-4">
        {/* Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Dela på Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        
        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Dela på Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        
        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Dela på LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        
        {/* Copy Link */}
        <button
          onClick={copyUrl}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative group"
          title="Kopiera länk"
        >
          <Link2 className="w-5 h-5" />
          
          {copied && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded">
              Kopierad!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
