import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Shield, Sprout, Network, Target, ArrowRight, Calculator, HeartHandshake, Users, Leaf, Trees, LeafyGreen, ChartNoAxesCombined, Code } from 'lucide-react';
import Link from 'next/link';

interface Statistic {
  stat: string;
  source: string;
  link: string;
}

interface AubiStats {
  pilotProject: Statistic[];
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('aubi');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Smooth scroll to section
    document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Move stats inside component and add proper typing
  const aubiStats: AubiStats = {
    pilotProject: [
      {
        stat: 'Ökat välmående och framtidstro',
        source: 'Finland Basic Income Trial (2019)',
        link: 'https://julkaisut.valtioneuvosto.fi/handle/10024/161361'
      }
    ]
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'aubi', label: 'AUBI', icon: Shield },
            { id: 'hallbarhet', label: 'Hållbarhet', icon: Sprout },
            { id: 'demokrati', label: 'Demokrati', icon: Network },
            { id: 'projekt', label: 'Pilotprojekt', icon: Target }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTabClick(id)}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                activeTab === id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </nav>

        {/* AUBI Section */}
        <section id="aubi" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            AUBI - Adaptiv Universell Basinkomst
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Hur det fungerar</h3>
              <p className="mb-4">
                AUBI är ett intelligent ekonomiskt grundskydd som anpassar sig efter individuella 
                behov och livssituationer. Systemet ersätter dagens komplexa bidragssystem med 
                en transparent och förutsägbar grund för alla medborgare.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Grundbelopp: 12,000 kr/månad för alla vuxna</span>
                </li>
                <li className="flex items-start">
                  <Calculator className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Adaptiva tillägg baserade på individuella behov och samhällsinsatser</span>
                </li>
                <li className="flex items-start">
                  <HeartHandshake className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Erkännande av olika former av samhällsbidrag</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Finansiering och genomförande</h3>
              <p className="mb-4">
                AUBI finansieras genom en kombination av:
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Omfördelning av befintliga välfärdsresurser</li>
                <li>• Automatiseringsskatt på robotiserad produktion</li>
                <li>• Effektivisering av administrativa kostnader</li>
                <li>• Minskade kostnader för sociala problem</li>
              </ul>
              <p>
                Implementering sker gradvis genom pilotprojekt och utvärdering.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Evidens och förväntade effekter</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Från pilotprojekt</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ökat välmående och framtidstro</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ekonomiska effekter</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ökad lokal ekonomisk aktivitet</li>
                  <li>Minskade sjukvårdskostnader</li>
                  <li>Ökad innovation och företagsamhet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Samhällseffekter</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Starkare lokalsamhällen</li>
                  <li>Ökad social sammanhållning</li>
                  <li>Mer tid för familj och engagemang</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hållbarhet Section */}
        <section id="hallbarhet" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Hållbar samhällsomställning
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Lokala matsystem</h3>
              <p className="mb-4">
                Vårt program för lokal matsuveränitet kombinerar modern teknik med 
                beprövade odlingsmetoder för att skapa motståndskraftiga matsystem.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Stadsodling minskar transportbehov</span>
                </li>
                <li className="flex items-start">
                  <Trees className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Skogsträdgårdar ökar biologisk mångfald</span>
                </li>
                <li className="flex items-start">
                  <LeafyGreen className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Lokala matmarknader stärker ekonomin</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Energiomställning</h3>
              <p className="mb-4">
                En kombination av förnybar energi och smart energianvändning:
              </p>
              <ul className="space-y-2">
                <li>• Solceller på alla lämpliga tak</li>
                <li>• Lokala energigemenskaper</li>
                <li>• Smart lastbalansering</li>
                <li>• Energilagring i batterier och vätgas</li>
              </ul>
            </div>
          </div>

          {/* More sections for Demokrati and Projekt... */}
          
        </section>

        {/* Demokrati Section */}
        <section id="demokrati" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Digital demokrati och deltagande
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">DPOP Platform</h3>
              <p className="mb-4">
                Vår digitala plattform för direktdemokrati möjliggör:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Network className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Säker digital röstning med öppen källkod</span>
                </li>
                <li className="flex items-start">
                  <Code className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Transparent beslutsfattande och spårbarhet</span>
                </li>
              </ul>
              <a 
                href="https://github.com/BjornKennethHolmstrom/DPOP" 
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Utforska DPOP på GitHub <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Evidensbaserade resultat</h3>
              <p className="mb-4">
                Forskning om digital demokrati visar:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Ökat medborgardeltagande i beslutsprocesser genom digitala verktyg</span>
                </li>
                <li className="flex items-start">
                  <ChartNoAxesCombined className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Högre tillfredsställelse med demokratiska processer vid användning av digitala plattformar</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span>Signifikant förbättrad implementering av beslut när medborgare involveras digitalt</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projekt Section */}
        <section id="projekt" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Aktiva projekt och initiativ
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">DPOP - Digital parti-operations-plattform</h3>
              <p className="mb-4">
                Status: Tidig utvecklingsfas
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Öppen källkod demokratiplattform</li>
                <li>• Stödjer hybridstyrning och flexibel beslutsfattning</li>
              </ul>
              <div className="space-x-4">
                <a 
                  href="https://github.com/BjornKennethHolmstrom/DPOP"
                  className="btn-primary inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bidra till utvecklingen <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                {/*<button 
                  onClick={() => setShowDemoAlert(true)}
                  className="btn-secondary"
                >
                  Testa demo
                </button>*/}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">CommuniTree - Samhällsengagemang</h3>
              <p className="mb-4">
                Status: Under aktiv utveckling
              </p>
              <ul className="space-y-2 mb-4">
                <li>• Plattform för lokal samverkan</li>
                <li>• Sammankopplar volontärer med behov</li>
                <li>• Stödjer generationsöverskridande samarbete</li>
                <li>• Integrerar med kommunala tjänster</li>
              </ul>
              <a 
                href="https://github.com/BjornKennethHolmstrom/CommuniTree"
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Utforska projektet <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Förslag på projekt */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Förslag på projekt</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">EnergyShare</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Plattform för lokal energidelning och smart nätbalansering.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">FoodWeb</h4>
                <p className="text-sm text-gray-600 mb-2">
                  System för att koppla samman lokala matproducenter med konsumenter.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Har du idéer för nya projekt? 
                <Link href="/kontakt" className="text-blue-600 ml-1">
                  Kontakta oss
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="bg-gray-50 p-8 rounded-lg mb-20">
          <h3 className="text-xl font-semibold mb-4">Läs mer</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Effekter av UBI</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {aubiStats.pilotProject.map((stat, index) => (
                  <li key={index}>
                    {stat.stat} - 
                    <a 
                      href={stat.link}
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {stat.source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Digital demokrati och deltagande</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>
                    A New Wave of Deliberative Democracy
                    <a 
                      href="https://carnegieendowment.org/research/2019/11/a-new-wave-of-deliberative-democracy?lang=en&center=europe"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Läs mer]
                    </a>
                  </li>
                  <li>
                    Fischli R, Muldoon J. Empowering Digital Democracy. Perspectives on Politics. 2024;22(3):819-835.
                    <a 
                      href="https://www.cambridge.org/core/journals/perspectives-on-politics/article/empowering-digital-democracy/D39CBD8C8061EA6EE1B0FE0D64FA9E5D"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [DOI: 10.1017/S1537592724000409]
                    </a>
                  </li>
                  <li>
                    Democracy and the Digital Transformation of Our Lives
                    <a 
                      href="https://hai.stanford.edu/news/democracy-and-digital-transformation-our-lives"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Läs mer]
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mt-4">Praktiska exempel på digital demokrati</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>
                    Decidim Barcelona: Digital demokratiplattform
                    <a 
                      href="https://www.decidim.barcelona/"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Läs mer]
                    </a>
                  </li>
                  <li>
                    Estonia&apos;s e-Governance: Digital röstning och medborgardeltagande
                    <a 
                      href="https://e-estonia.com/solutions/e-governance/"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Läs mer]
                    </a>
                  </li>
                  <li>
                    Taiwan&apos;s vTaiwan: Digital konsensusbyggande
                    <a 
                      href="https://info.vtaiwan.tw/"
                      className="text-blue-600 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Läs mer]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
