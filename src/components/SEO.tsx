// components/SEO.tsx
import Head from 'next/head';

type StructuredDataValue = 
  | string 
  | number 
  | boolean 
  | null 
  | { [key: string]: StructuredDataValue }
  | StructuredDataValue[];

// Define the base structured data type
type StructuredData = {
  '@context': string;
  '@type': string;
  headline?: string;
  description?: string;
  author?: {
    '@type': string;
    name: string;
  };
  dateModified?: string;
  publisher?: {
    '@type': string;
    name: string;
    logo?: {
      '@type': string;
      url: string;
    };
  };
  [key: string]: StructuredDataValue | undefined;
};

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: StructuredData;
}

export default function SEO({
  title = 'Fjärilspartiet - Ett parti för systemisk samhällsförnyelse',
  description = 'Vi utvecklar konkreta lösningar för ett samhälle där alla kan blomstra. Genom systemtänkande och evidensbaserad utveckling skapar vi strukturer som fungerar för både människor och miljö.',
  canonical,
  ogImage = '/images/fjärilspartiet-og.jpg',
  noindex = false,
  structuredData
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fjarilspartiet.se';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title.includes('Fjärilspartiet') ? title : `${title} | Fjärilspartiet`;

  return (
    <Head>
      <link 
        rel="alternate" 
        type="application/rss+xml" 
        title="Fjärilspartiet - Blogg och nyheter" 
        href="/rss.xml" 
      />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4a3e3e" />
      <meta charSet="utf-8" />
      
      {/* Optional noindex */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Language */}
      <meta property="og:locale" content="sv_SE" />
      <meta httpEquiv="content-language" content="sv-se" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
