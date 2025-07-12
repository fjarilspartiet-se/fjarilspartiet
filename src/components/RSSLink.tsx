// components/RSSLink.tsx
import React from 'react';
import { Rss } from 'lucide-react';

interface RSSLinkProps {
  variant?: 'button' | 'link' | 'icon';
  className?: string;
  showText?: boolean;
}

export default function RSSLink({ 
  variant = 'button', 
  className = '',
  showText = true 
}: RSSLinkProps) {
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_SITE_URL || 'https://fjarilspartiet.se';
  
  // For static export, RSS is at /rss.xml, not /api/rss.xml
  const rssUrl = `${baseUrl}/rss.xml`;

  if (variant === 'icon') {
    return (
      <a
        href={rssUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
        title="Prenumerera på RSS-feed"
      >
        <Rss className="w-5 h-5 text-orange-500" />
      </a>
    );
  }

  if (variant === 'link') {
    return (
      <a
        href={rssUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors ${className}`}
      >
        <Rss className="w-4 h-4 mr-2 text-orange-500" />
        {showText && 'RSS-feed'}
      </a>
    );
  }

  return (
    <a
      href={rssUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center ${className}`}
    >
      <Rss className="w-4 h-4 mr-2 text-orange-500" />
      {showText && 'Prenumerera via RSS'}
    </a>
  );
}
