const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// CommonJS version of the RSS generation
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          author: data.author || 'Fjärilspartiet',
          tags: data.tags || [],
          featured: data.featured || false,
        };
      } catch (error) {
        console.warn(`Could not read blog post ${fileName}:`, error);
        return null;
      }
    })
    .filter(post => post !== null)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
}

function generateRSSFeed() {
  const posts = getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fjarilspartiet.se';
  
  const feed = {
    title: 'Fjärilspartiet - Blogg och nyheter',
    description: 'Senaste nyheterna och insikterna från Fjärilspartiet om systemisk samhällsförnyelse, politik och framtidslösningar.',
    link: `${siteUrl}/blogg`,
    language: 'sv-SE',
    lastBuildDate: new Date().toUTCString(),
    items: posts.slice(0, 20).map(post => ({
      title: post.title,
      description: post.description,
      link: `${siteUrl}/blogg/${post.slug}`,
      guid: `${siteUrl}/blogg/${post.slug}`,
      pubDate: new Date(post.date).toUTCString(),
      author: `${post.author} (${post.author})`
    }))
  };

  return generateRSSXML(feed);
}

function generateRSSXML(feed) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${feed.title}]]></title>
    <description><![CDATA[${feed.description}]]></description>
    <link>${feed.link}</link>
    <language>${feed.language}</language>
    <lastBuildDate>${feed.lastBuildDate}</lastBuildDate>
    <atom:link href="${feed.link.replace('/blogg', '')}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>fjarilspartiet@gmail.com (Fjärilspartiet)</managingEditor>
    <webMaster>fjarilspartiet@gmail.com (Fjärilspartiet)</webMaster>
    <category>Politik</category>
    <category>Samhälle</category>
    <category>Systemisk förändring</category>
    <image>
      <url>${feed.link.replace('/blogg', '')}/favicon-192x192.png</url>
      <title>${feed.title}</title>
      <link>${feed.link}</link>
    </image>
    ${feed.items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <author>${item.author}</author>
    </item>`).join('')}
  </channel>
</rss>`;
}

async function generateStaticRSS() {
  try {
    const rssXml = generateRSSFeed();
    const outputPath = path.join(process.cwd(), 'out', 'rss.xml');
    
    // Ensure the out directory exists
    const outDir = path.dirname(outputPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, rssXml);
    console.log('✅ RSS feed generated at /rss.xml');
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
  }
}

generateStaticRSS();
