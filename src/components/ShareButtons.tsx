import { useState } from 'react';
import { Twitter, Facebook, Linkedin, Link2, Share2 } from 'lucide-react';

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
  
  const url = typeof window !== 'undefined' ? window.location.href : '';
  
  // Updated social share URLs to include description where supported
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title}\n\n${description}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(description)}`;
  
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  // Native share functionality
  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing content:', err);
      }
    } else {
      console.log('Web Share API not supported on this browser');
      // Fallback - perhaps show a tooltip explaining that this feature is not available
    }
  };

  // Check if Web Share API is available
  const isWebShareAvailable = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <p className="text-sm font-medium text-gray-400">
        Dela
      </p>
      
      <div className="flex space-x-4">
        {/* Native Share Button - only shown if supported */}
        {isWebShareAvailable && (
          <button
            onClick={nativeShare}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            title="Dela via din enhet"
          >
            <Share2 className="w-5 h-5" />
          </button>
        )}
        
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
