import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sv">
        <Head>
          {/* Preconnect to important domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Add structured data for organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Fjärilspartiet",
                "url": "https://fjarilspartiet.se",
                "logo": "https://fjarilspartiet.se/images/logo.png",
                "sameAs": [
                  "https://github.com/fjarilspartiet-se",
                  "https://discord.gg/GxSxaYANU4"
                ],
                "description": "Ett parti för systemisk samhällsförnyelse som utvecklar konkreta lösningar för ett blomstrande samhälle."
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
