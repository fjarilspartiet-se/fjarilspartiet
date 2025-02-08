// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://fjarilspartiet.se';
  
  // Get all your documents
  const documents = [/* fetch your documents */];
  
  // Create XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static pages -->
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <!-- Dynamic document pages -->
      ${documents.map(doc => `
        <url>
          <loc>${baseUrl}/dokument/${doc.id.toLowerCase()}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
