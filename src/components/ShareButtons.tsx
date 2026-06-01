import { useState } from 'react';
import { Facebook, Linkedin, Link2, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  className?: string;
}

// lucide saknar en Bluesky-ikon, så vi använder Blueskys egen fjärilslogga.
function BlueskyIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 568 501"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M123.121 33.664C188.241 82.553 258.281 181.681 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.612 568-28.906 568 57.946c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748 114.875 19.551 144.097 84.311 80.986 149.071-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.632-7.733-.018-2.875-1.17.506-3.632 7.733-13.428 39.422-65.84 193.273-185.7 70.281-63.111-64.76-33.889-129.52 80.986-149.071-65.719 11.185-139.599-7.295-159.874-79.748C9.945 203.659 0 75.292 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z" />
    </svg>
  );
}

// lucide har ingen X-logga, så vi använder X:s egen logotyp.
function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894L144.011 79.69h162.604l304.797 435.795 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
    </svg>
  );
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
  // Bluesky tar all text i ett fält (ca 300 tecken), så vi delar titel + länk.
  const blueskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n\n${url}`)}`;
  
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
        
        {/* X (tidigare Twitter) */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Dela på X"
        >
          <XIcon className="w-5 h-5" />
        </a>

        {/* Bluesky */}
        <a
          href={blueskyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Dela på Bluesky"
        >
          <BlueskyIcon className="w-5 h-5" />
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
