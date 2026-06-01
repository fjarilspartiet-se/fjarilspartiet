import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Grid, Monitor, Square, Copy, Users, Sprout, Brain } from 'lucide-react';
import SEO from '../components/SEO';

// Define categories and materials
interface Material {
  title: string;
  description: string;
  thumbnailPath?: string;
  files: {
    png?: string;
    svg?: string;
    md?: string;
  };
  category: string;
}

const SocialMediaKitPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Define the materials with their categories
  const materials: Material[] = [
    {
      title: '📄 Textmallar (Markdown)',
      description: 'Textmallar för inlägg och delning på sociala medier.',
      files: {
        md: "/social-media-delningskit/text-mallar.md"
      },
      category: "templates"
    },
    {
      title: "AUBI infographic - landskap",
      description: "Visuell förklaring av Adaptiv Universell Basinkomst i landskapsformat.",
      thumbnailPath: "/social-media-delningskit/aubi-infographic-landscape.png",
      files: {
        png: "/social-media-delningskit/aubi-infographic-landscape.png",
        svg: "/social-media-delningskit/aubi-infographic-landscape.svg"
      },
      category: "infographics"
    },
    {
      title: "AUBI infographic - kvadratisk",
      description: "Visuell förklaring av Adaptiv Universell Basinkomst i kvadratiskt format.",
      thumbnailPath: "/social-media-delningskit/aubi-infographic-square.png",
      files: {
        png: "/social-media-delningskit/aubi-infographic-square.png",
        svg: "/social-media-delningskit/aubi-infographic-square.svg"
      },
      category: "infographics"
    },
    {
      title: "Driftslingan – varför vi inte ser krisen i tid",
      description: "Mönstret bakom Sveriges problem: byggs upp i tysthet, slår till som kris, möts av panik – och glöms tills nästa gång.",
      thumbnailPath: "/social-media-delningskit/driftslingan-square.png",
      files: {
        png: "/social-media-delningskit/driftslingan-square.png",
        svg: "/social-media-delningskit/driftslingan-square.svg"
      },
      category: "infographics"
    },
    {
      title: "Framtidskommuner",
      description: "Vårt främsta förslag: flytta beslut, pengar och frihet närmare människorna – testa smått och sprid det som fungerar.",
      thumbnailPath: "/social-media-delningskit/framtidskommuner-square.png",
      files: {
        png: "/social-media-delningskit/framtidskommuner-square.png",
        svg: "/social-media-delningskit/framtidskommuner-square.svg"
      },
      category: "infographics"
    },
    {
      title: "Bli medlem - landskapsformat",
      description: "Inbjudan att bli medlem i Fjärilspartiet i landskapsformat.",
      thumbnailPath: "/social-media-delningskit/bli-medlem-landskap-mall.png",
      files: {
        png: "/social-media-delningskit/bli-medlem-landskap-mall.png",
        svg: "/social-media-delningskit/bli-medlem-landskap-mall.svg"
      },
      category: "templates"
    },
    {
      title: "Bli medlem - kvadratiskt format",
      description: "Inbjudan att bli medlem i Fjärilspartiet i kvadratiskt format.",
      thumbnailPath: "/social-media-delningskit/bli-medlem-mall.png",
      files: {
        png: "/social-media-delningskit/bli-medlem-mall.png",
        svg: "/social-media-delningskit/bli-medlem-mall.svg"
      },
      category: "templates"
    },
    {
      title: "Fjärilstransformation",
      description: "Illustration av partiets transformationsprocess.",
      thumbnailPath: "/social-media-delningskit/butterfly-transformation.png",
      files: {
        png: "/social-media-delningskit/butterfly-transformation.png",
        svg: "/social-media-delningskit/butterfly-transformation.svg"
      },
      category: "graphics"
    },
    {
      title: "Citatmall - kvadratisk",
      description: "Mall för inspirerande citat i kvadratiskt format.",
      thumbnailPath: "/social-media-delningskit/citat-mall-kvadrat.png",
      files: {
        png: "/social-media-delningskit/citat-mall-kvadrat.png",
        svg: "/social-media-delningskit/citat-mall-kvadrat.svg"
      },
      category: "templates"
    },
    {
      title: "Citatmall - landskap",
      description: "Mall för inspirerande citat i landskapsformat.",
      thumbnailPath: "/social-media-delningskit/citat-mall-landskap.png",
      files: {
        png: "/social-media-delningskit/citat-mall-landskap.png",
        svg: "/social-media-delningskit/citat-mall-landskap.svg"
      },
      category: "templates"
    },
    {
      title: "Kontrastposter",
      description: "Poster som lyfter fram kontraster i partiets vision.",
      thumbnailPath: "/social-media-delningskit/fjp-contrast-poster.png",
      files: {
        png: "/social-media-delningskit/fjp-contrast-poster.png",
        svg: "/social-media-delningskit/fjp-contrast-poster.svg"
      },
      category: "posters"
    },
    {
      title: "Social poster",
      description: "Poster optimerad för sociala medier.",
      thumbnailPath: "/social-media-delningskit/fjp-social-poster.png",
      files: {
        png: "/social-media-delningskit/fjp-social-poster.png",
        svg: "/social-media-delningskit/fjp-social-poster.svg"
      },
      category: "posters"
    },
    {
      title: "Lokal resiliens ikoner",
      description: "Ikoner för att illustrera lokal motståndskraft.",
      thumbnailPath: "/social-media-delningskit/lokal-resiliens-ikoner.png",
      files: {
        png: "/social-media-delningskit/lokal-resiliens-ikoner.png",
        svg: "/social-media-delningskit/lokal-resiliens-ikoner.svg"
      },
      category: "graphics"
    },
    {
      title: "Minimalistisk skandinavisk design",
      description: "Ren, minimalistisk design i skandinavisk stil.",
      thumbnailPath: "/social-media-delningskit/minimalist-skandinavisk-svg.png",
      files: {
        png: "/social-media-delningskit/minimalist-skandinavisk-svg.png",
        svg: "/social-media-delningskit/minimalist-skandinavisk-svg.svg"
      },
      category: "graphics"
    },
    {
      title: "Systemtänkande",
      description: "Illustration av systemtänkande koncept.",
      thumbnailPath: "/social-media-delningskit/systemtänkande.png",
      files: {
        png: "/social-media-delningskit/systemtänkande.png",
        svg: "/social-media-delningskit/systemtänkande.svg"
      },
      category: "graphics"
    },
    {
      title: "Transformationstidslinje",
      description: "Komplett tidslinje över partiets transformationsprocess.",
      thumbnailPath: "/social-media-delningskit/transformation-tidslinje-komplett.png",
      files: {
        png: "/social-media-delningskit/transformation-tidslinje-komplett.png",
        svg: "/social-media-delningskit/transformation-tidslinje-komplett.svg"
      },
      category: "graphics"
    }
  ];

  // Categories with icons
  const categories = [
    { id: 'all', name: 'Alla material', icon: Grid },
    { id: 'templates', name: 'Mallar', icon: Copy },
    { id: 'infographics', name: 'Infografik', icon: Brain },
    { id: 'posters', name: 'Posters', icon: Monitor },
    { id: 'graphics', name: 'Grafik', icon: Sprout }
  ];

  // Filter materials by active category
  const filteredMaterials = activeCategory === 'all' 
    ? materials 
    : materials.filter(material => material.category === activeCategory);

  return (
    <>
      <SEO 
        title="Sociala medier delningskit - Fjärilspartiet"
        description="Ladda ner mallar, infografik och grafik för sociala medier för att hjälpa till att sprida Fjärilspartiets budskap."
        canonical="/resurser/social-media-kit"
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Sociala medier delningskit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ladda ner och använd dessa mallar och grafik för att hjälpa sprida Fjärilspartiets budskap på sociala medier och andra plattformar.
            </p>
            
            {/* Download complete kit button */}
            <div className="mt-8">
              <a 
                href="/social-media-delningskit.zip" 
                download
                className="btn-primary inline-flex items-center text-lg px-8 py-3"
              >
                Ladda ner hela kitet <Download className="w-5 h-5 ml-2" />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Alla filer packade i en ZIP-fil (SVG + PNG format)
              </p>
            </div>
          </div>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all hover:shadow-md
                    ${activeCategory === category.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
          
          {/* Materials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {material.thumbnailPath && (
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image 
                      src={material.thumbnailPath} 
                      alt={material.title}
                      className="object-contain w-full h-full p-2"
                      width={400}
                      height={400}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {material.files?.png && (
                      <a
                        href={material.files.png}
                        download
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 inline-flex items-center"
                      >
                        <Square className="w-4 h-4 mr-1" /> PNG
                      </a>
                    )}
                    {material.files?.svg && (
                      <a
                        href={material.files.svg}
                        download
                        className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-800 inline-flex items-center"
                      >
                        <Square className="w-4 h-4 mr-1" /> SVG
                      </a>
                    )}
                    {material.files?.md && (
                      <a
                        href={material.files.md}
                        download
                        className="px-4 py-2 bg-green-50 hover:bg-green-100 rounded-md text-green-800 inline-flex items-center"
                      >
                        <Square className="w-4 h-4 mr-1" /> MD
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          {/* Usage Guidelines */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Riktlinjer för användning</h2>
            <div className="space-y-4">
              <p>
                Dessa material är fritt tillgängliga för alla medlemmar och supportrar av Fjärilspartiet att använda för att sprida vårt budskap.
              </p>
              
              <h3 className="text-xl font-semibold">Tips för användning:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>SVG-filer är redigerbara i program som Inkscape (gratis) eller Adobe Illustrator</li>
                <li>PNG-filer är redo att användas direkt i sociala medier</li>
                <li>För citatmallar, lägg till dina egna citat i SVG-filerna innan du exporterar</li>
                <li>Bevara partiets visuella identitet genom att behålla färgerna och stilarna</li>
                <li>Använd gärna hashtaggen #Fjärilspartiet när du delar innehåll</li>
              </ul>
              
              <h3 className="text-xl font-semibold">Mallanvändning:</h3>
              <p>
                Se filen <code>text-mallar.md</code> i det nedladdade kitet för exempel på text som fungerar väl med dessa mallar. Du kan också anpassa texten för att bättre passa din målgrupp.
              </p>
            </div>
          </div>
          
          {/* Need help section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Behöver du hjälp?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Om du har frågor om hur du använder dessa material eller behöver hjälp med anpassningar, kontakta gärna oss.
            </p>
            <Link href="/kontakt" className="btn-secondary inline-flex items-center">
              Kontakta oss <Users className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SocialMediaKitPage;
