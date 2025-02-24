import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import SystemEffects from '../components/SystemEffects';
import SystemMap from '../components/SystemMap';
import Tabs from '../components/Tabs';
import { 
  Brain, Heart, Users, 
  Building, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import SEO from '../components/SEO';
import { useRouter } from 'next/router';

// Define the tabs
const TABS = [
  { id: 'systemmap', label: 'Systemöversikt', icon: Brain },
  { id: 'systemeffects', label: 'Systemeffekter', icon: Building },
  { id: 'wellbeing', label: 'Mänskligt välbefinnande', icon: Heart },
  { id: 'yourrole', label: 'Din roll', icon: Users }
];

export default function HelhetPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('systemmap');

  // Update active tab based on URL query
  useEffect(() => {
    const { tab } = router.query;
    if (tab && typeof tab === 'string' && TABS.some(t => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [router.query]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/helhet?tab=${tabId}`, undefined, { shallow: true });
  };

  return (
    <>
      <SEO 
        title="Systemisk helhetssyn"
        description="Se hur Fjärilspartiets olika initiativ samverkar för att skapa omfattande positiv förändring. Genom att förstå samhällets system kan små, välplanerade förändringar leda till stora förbättringar."
        canonical={`/helhet${activeTab === 'systemmap' ? '' : `?tab=${activeTab}`}`}
      />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Systemisk samhällsförändring
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Se hur våra olika initiativ samverkar för att skapa omfattande positiv förändring.
                Genom att förstå och arbeta med systemets naturliga dynamik kan små, välplanerade
                förändringar leda till stora förbättringar.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs 
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* System Map Tab */}
          <div className={`transition-opacity duration-300 ${activeTab === 'systemmap' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <section className="py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Ett sammanhängande system</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Utforska hur våra olika initiativ kopplar samman och förstärker varandra.
                  I ett välfungerande system skapar varje del positiva effekter som sprider
                  sig genom hela samhället.
                </p>
              </div>
              
              <SystemMap />
            </section>
          </div>

          {/* System Effects Tab */}
          <div className={`transition-opacity duration-300 ${activeTab === 'systemeffects' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <section className="py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Från del till helhet</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Se hur enskilda förändringar skapar ringar på vattnet och transformerar
                  hela samhället genom positiva återkopplingsloopar.
                </p>
              </div>
              
              <SystemEffects />
            </section>
          </div>

          {/* Wellbeing Tab */}
          <div className={`transition-opacity duration-300 ${activeTab === 'wellbeing' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <section className="py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Systemiska effekter på mänskligt välbefinnande</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ett systemiskt perspektiv innebär att vi förstår hur samhällets strukturer påverkar 
                  människors upplevelser av kärlek, mening och sammanhang. Genom att mäta dessa djupare 
                  dimensioner kan vi skapa ett samhälle som främjar verkligt mänskligt blomstrande.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">Kärlek</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span><strong>Självkärlek</strong>: Strukturer som främjar självmedkänsla och personlig omsorg</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span><strong>Mellanmänsklig kärlek</strong>: System som stödjer starka relationer och ömsesidig omsorg</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span><strong>Universell medkänsla</strong>: Samhällsstrukturer som uppmuntrar omsorg om alla människor</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Systemisk påverkan:</strong> När människor har tid och trygghet stärks deras förmåga till djup kärlek och omsorg, vilket skapar positiva spiraler av tillit och samarbete.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">Mening</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Arbete och bidrag</strong>: Strukturer som möjliggör meningsfulla bidrag till samhället</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Kreativitet och fritid</strong>: System som stödjer skapande och personligt utforskande</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Livslångt lärande</strong>: Tillgång till kontinuerlig utveckling och kunskapssökande</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Systemisk påverkan:</strong> När människor kan ägna sig åt meningsfulla aktiviteter ökar motivation, kreativitet och innovation i hela samhället.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-700">Sammanhang</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Inre sammanhang</strong>: Stöd för personlig integritet och självsäkerhet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Socialt sammanhang</strong>: Strukturer för gemenskap och tillhörighet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Naturligt sammanhang</strong>: Koppling till ekosystem och planetär hälsa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Existentiellt sammanhang</strong>: Utrymme för andliga eller filosofiska dimensioner</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Systemisk påverkan:</strong> Starka känsla av sammanhang ökar resiliens mot kriser och främjar långsiktigt tänkande.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-700">Lekfullhet som integrerande kraft</h3>
                  <p className="text-gray-600 mb-4">
                    När kärlek, mening och sammanhang finns i balans uppstår ofta en naturlig lekfullhet - en förmåga att utforska, 
                    experimentera och njuta av livet med nyfikenhet och glädje. Lekfullhet kan ses som både en indikator på 
                    och en katalysator för välbefinnande i systemet.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Lekfull innovation:</strong> Människor som känner sig trygga utforskar kreativa lösningar på komplexa problem.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Lekfull samverkan:</strong> Gemensam lek bygger tillit och stärker sociala band över gränser.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Lekfull anpassning:</strong> Lekfulla gemenskaper är mer resilienta och anpassningsbara vid förändringar.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                    Genom att mäta hur våra samhällssystem påverkar kärlek, mening, sammanhang och lekfullhet får vi en 
                    djupare förståelse för vad våra politiska och ekonomiska beslut faktiskt åstadkommer.
                  </p>
                </div>
              </div>
            </section>
          </div>

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

          {/* Your Role Tab */}
          <div className={`transition-opacity duration-300 ${activeTab === 'yourrole' ? 'opacity-100' : 'opacity-0 hidden'}`}>
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
          </div>
        </div>
      </MainLayout>
    </>
  );
}
