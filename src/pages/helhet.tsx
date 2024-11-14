import { useRef } from 'react';
import MainLayout from '../layouts/MainLayout';
import { 
  Waves, Sprout, Brain, Heart, Users, 
  Building, ArrowRight, LucideIcon // TreeDeciduous, Network, 
} from 'lucide-react';
import Link from 'next/link';

// Component for the ripple effect sections
const RippleSection = ({ 
  title, 
  stages,
  icon: Icon,
  className = '' 
}: { 
  title: string;
  stages: { title: string; items: string[] }[];
  icon: LucideIcon;
  className?: string;
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {stages.map((stage, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border-2 ${
              index === 0 ? 'border-blue-500 bg-blue-50' :
              index === 1 ? 'border-green-500 bg-green-50' :
              index === 2 ? 'border-purple-500 bg-purple-50' :
              'border-red-500 bg-red-50'
            }`}
          >
            <h4 className="font-semibold mb-2">{stage.title}</h4>
            <ul className="space-y-2 text-sm">
              {stage.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for case studies
/* const CaseStudy = ({
  title,
  location,
  description,
  results,
  icon: Icon
}: {
  title: string;
  location: string;
  description: string;
  results: string[];
  icon: any;
}) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-green-600" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {results.map((result, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
}; */

export default function HelhetPage() {
  const aubiRef = useRef<HTMLDivElement>(null);
  const localRef = useRef<HTMLDivElement>(null);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hur våra lösningar samverkar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Som ringar på vattnet sprider sig positiva förändringar och förstärker varandra. 
            Se hur våra olika initiativ arbetar tillsammans för att skapa varaktig positiv förändring.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => aubiRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Se AUBI-effekter
            </button>
            <button 
              onClick={() => localRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Lokala exempel
            </button>
          </div>
        </div>
      </section>

      {/* AUBI Effects Section */}
      <section ref={aubiRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RippleSection
            title="Från ekonomisk trygghet till samhällsinnovation"
            icon={Waves}
            stages={[
              {
                title: "Initial förändring",
                items: [
                  "Grundtrygghet genom AUBI",
                  "Minskad överlevnadsstress",
                  "Tid för eftertanke",
                  "Möjlighet att ta risker"
                ]
              },
              {
                title: "Första vågen",
                items: [
                  "Fler startar företag",
                  "Ökat volontärarbete",
                  "Tid för lärande",
                  "Bättre mental hälsa"
                ]
              },
              {
                title: "Förstärkande effekter",
                items: [
                  "Nya lokala jobb",
                  "Starkare lokalsamhällen",
                  "Kunskapsdelning",
                  "Minskade vårdkostnader"
                ]
              },
              {
                title: "Långsiktig förändring",
                items: [
                  "Blomstrande lokalekonomi",
                  "Stödjande gemenskap",
                  "Kultur av lärande",
                  "Friskare befolkning"
                ]
              }
            ]}
          />
        </div>
      </section>

      {/* Local Food Systems Section */}
      <section ref={localRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RippleSection
            title="Lokala matsystem och samhällseffekter"
            icon={Sprout}
            stages={[
              {
                title: "Initial förändring",
                items: [
                  "Stadsodlingar startas",
                  "Lokala marknader",
                  "Skolträdgårdar",
                  "Matkooperativ"
                ]
              },
              {
                title: "Direkta fördelar",
                items: [
                  "Färsk lokalmat",
                  "Minskade transporter",
                  "Praktiskt lärande",
                  "Mötesplatser"
                ]
              },
              {
                title: "Växande effekter",
                items: [
                  "Ökad matkunskap",
                  "Ekologisk förståelse",
                  "Sociala nätverk",
                  "Nya företag"
                ]
              },
              {
                title: "Bredare påverkan",
                items: [
                  "Förbättrad folkhälsa",
                  "Rikare stadsmiljö",
                  "Starkare gemenskap",
                  "Lokala arbetstillfällen"
                ]
              }
            ]}
          />
        </div>
      </section>

      {/* Case Studies Section - Mock examples */}
      {/*<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Verkliga exempel</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudy
              title="Rosengårdens Gemenskapsodling"
              location="Malmö"
              icon={TreeDeciduous}
              description="Ett community garden-projekt som visar hur olika initiativ kan samverka för att skapa omfattande positiv förändring i ett område."
              results={[
                "Färska grönsaker till 50 familjer",
                "Nya vänskaper över kulturgränser",
                "Lärandemöjligheter för lokala skolor",
                "Inspiration till tre liknande projekt",
                "Två nya lokala matföretag startade"
              ]}
            />

            <CaseStudy
              title="Digital Demokrati i Praktiken"
              location="Umeå"
              icon={Network}
              description="Ett pilotprojekt där DidiS-plattformen användes för att koordinera lokala initiativ och möjliggöra medborgardeltagande i stadsplaneringen."
              results={[
                "300+ medborgare aktiva i beslutsprocesser",
                "Fem nya medborgarinitiativ startade",
                "Förbättrad dialog mellan kommun och invånare",
                "Ökad transparens i beslutsfattande",
                "Modell för andra kommuner"
              ]}
            />
          </div>
        </div>
      </section>*/}

      {/* Get Involved Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Din roll i förändringen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Alla kan bidra till och dra nytta av dessa sammankopplade förbättringar. 
            Börja där du är och se hur ditt engagemang kan skapa ringar på vattnet.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Engagera dig lokalt</h3>
              <p className="text-sm text-gray-600">
                Gå med i eller starta lokala initiativ. Varje liten insats gör skillnad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Dela kunskap</h3>
              <p className="text-sm text-gray-600">
                Bidra med dina erfarenheter och lär av andra. Tillsammans vet vi mer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Building className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Stöd lokalt</h3>
              <p className="text-sm text-gray-600">
                Handla lokalt och stöd initiativ i ditt område. Det stärker hela samhället.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Sprid ordet</h3>
              <p className="text-sm text-gray-600">
                Berätta för andra om positiva förändringar du ser. Inspiration sprider sig.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/bli-medlem" className="btn-primary inline-flex items-center">
              Bli medlem <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/kontakt" className="btn-secondary inline-flex items-center">
              Kontakta oss <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

