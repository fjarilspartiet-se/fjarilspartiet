import { useState } from 'react';
import { 
  Heart, Brain, Building, Code, ArrowRight 
} from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  location: string;
  years: string;
  description: string;
  results: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  location, 
  years, 
  description, 
  results, 
  icon: Icon, 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">
            {location} • {years}
          </p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className={`space-y-2 transition-all ${isExpanded ? 'block' : 'hidden'}`}>
        <h4 className="font-semibold text-gray-700">Resultat:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {result}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-blue-600 flex items-center hover:underline"
      >
        {isExpanded ? 'Visa mindre' : 'Läs mer'}
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

const TransformationCases = () => {
  const caseStudies = [
    {
      category: "Fred och konfliktlösning",
      icon: Heart,
      description: "Framgångsrika exempel på integration av kontemplativ praktik i fredsbyggande",
      cases: [
        {
          title: "Mindfulness-baserat fredsinitiativ",
          location: "Sri Lanka",
          years: "2010-2020",
          description: "Ett banbrytande program som kombinerade buddhistisk meditation med konfliktlösning i ett post-konfliktssamhälle.",
          results: [
            "73% minskning av lokala konflikter",
            "Utbildning av över 200 lokala fredsmediatorer",
            "Etablering av 15 fredscentrum",
            "Modellen adopterad av tre grannländer"
          ]
        },
        {
          title: "Nordiska fredsmediationsnätverket",
          location: "Ukraina",
          years: "2022-nu",
          description: "Ett innovativt program som kombinerar distans- och platsbaserad meditativ traumaläkning.",
          results: [
            "Över 10,000 deltagare i online-sessioner",
            "Dokumenterad minskning av PTSD-symptom",
            "Utbildning av 50 lokala traumahealer",
            "Skapande av självbärande stödnätverk"
          ]
        }
      ]
    },
    {
      category: "Ekonomisk transformation",
      icon: Building,
      description: "Konkreta exempel på alternativa ekonomiska modeller som fungerar i stor skala",
      cases: [
        {
          title: "Mondragón-kooperativet",
          location: "Spanien",
          years: "1956-nu",
          description: "Världens största arbetarägda kooperativ visar vägen för demokratisk ekonomi.",
          results: [
            "81,000 arbetare-ägare",
            "12 miljarder euro i årlig omsättning",
            "Integrerat system för utbildning och innovation",
            "Bevisat hållbar modell för ekonomisk demokrati"
          ]
        },
        {
          title: "Omställning Totnes",
          location: "Storbritannien",
          years: "2006-nu",
          description: "Ett pionjärprojekt för lokal ekonomisk motståndskraft och hållbarhet.",
          results: [
            "80% ökning av lokal matproduktion",
            "Skapande av över 30 nya lokala företag",
            "Framgångsrik lokal valuta",
            "Betydande minskning av koldioxidavtryck"
          ]
        }
      ]
    },
    {
      category: "Medvetandeforskning",
      icon: Brain,
      description: "Integration av kontemplativ praktik i moderna institutioner",
      cases: [
        {
          title: "Search Inside Yourself",
          location: "Global",
          years: "2007-nu",
          description: "Ett banbrytande program som framgångsrikt integrerar mindfulness i företagsvärlden.",
          results: [
            "Över 50,000 deltagare i 100+ länder",
            "Mätbara förbättringar i arbetsplatsvälmående",
            "Utveckling av emotionell intelligens",
            "Framgångsrik sekulär anpassning av kontemplativa praktiker"
          ]
        },
        {
          title: "Center for Healthy Minds",
          location: "USA",
          years: "2008-nu",
          description: "Världsledande forskningscenter för meditation och medvetandestudier.",
          results: [
            "Över 100 publicerade studier",
            "Banbrytande upptäckter om neuroplasticitet",
            "Integration i utbildningssystem",
            "Utveckling av evidensbaserade protokoll"
          ]
        }
      ]
    },
    {
      category: "Teknologidemokratisering",
      icon: Code,
      description: "Framgångsrika projekt för att göra teknologi tillgänglig för alla",
      cases: [
        {
          title: "Keralas fri programvaru-rörelse",
          location: "Indien",
          years: "2001-nu",
          description: "Ett storskaligt projekt för digital demokratisering som nått 35 miljoner människor.",
          results: [
            "95% digital läskunnighet",
            "Omfattande kostnadsbesparingar",
            "Lokalt innovationsekosystem",
            "Modell för digital suveränitet"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Bevisad framgång i praktiken
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dessa exempel visar att systemisk transformation är möjlig när vi kombinerar 
          djup förståelse med praktisk handling. Varje fall ger viktiga lärdomar för vår väg framåt.
        </p>
      </div>

      <div className="space-y-16">
        {caseStudies.map((category, index) => (
          <div key={index} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.cases.map((caseStudy, caseIndex) => (
                <CaseStudyCard 
                  key={caseIndex}
                  {...caseStudy}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Lärdomar för Fjärilspartiet</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Framgångsfaktorer</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Långsiktigt engagemang (5-10 år minimum)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Integration på flera nivåer samtidigt
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Mätbara resultat och transparent uppföljning
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Skalbarhet</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Modulär design av program
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Dokumentation av framgångsrika metoder
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Fokus på kapacitetsbyggande
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationCases;
