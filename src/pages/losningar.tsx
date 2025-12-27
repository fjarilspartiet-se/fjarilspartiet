import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import Tabs from '../components/Tabs';
import ContentSection from '../components/ContentSection';
import EvidenceCard from '../components/EvidenceCard';
import AUBIFlowDiagram from '../components/AUBIFlowDiagram';
import AUBIKMSIEffectsDiagram from '../components/AUBIKMSIEffectsDiagram'; 
import ProjectCard from '../components/ProjectCard';
import ReferenceSection from '../components/ReferenceSection';
import TransformationCases from '../components/TransformationCases';
import CuriosityCard from '../components/CuriosityCard';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';
import { ArrowRight, Shield, Network, Lightbulb, Code } from 'lucide-react';
import { 
  TABS, AUBI_CONTENT, HALLBARHET_CONTENT, 
  DEMOKRATI_CONTENT, UTBILDNING_CONTENT, PROJEKT_CONTENT, TRANSFORMATION_CONTENT, REFERENCES 
} from '../data/solutions';
import SEO from '../components/SEO';

// SEO configurations for each tab
const tabSEO = {
  aubi: {
    title: "AUBI - Adaptiv universell basinkomst",
    description: "Utforska vår vision om ekonomisk grundtrygghet genom AUBI - ett intelligent välfärdssystem som skapar möjligheter för personlig utveckling och samhällsengagemang."
  },
  hallbarhet: {
    title: "Hållbara samhällslösningar",
    description: "Från lokala matsystem till cirkulär ekonomi - upptäck våra konkreta lösningar för ett hållbart samhälle som fungerar i harmoni med naturen."
  },
  demokrati: {
    title: "Digital demokrati och medborgarinflytande",
    description: "Se hur vi använder modern teknik för att skapa ett mer transparent och inkluderande demokratiskt system där alla kan delta och påverka."
  },
  utbildning: {
    title: "Transformativ utbildning",
    description: "Ett nytänkande utbildningssystem som ger varje person möjlighet att utvecklas utifrån sina unika förutsättningar och intressen."
  },
  transformation: {
    title: "Global transformation",
    description: "Våra lösningar för att skapa positiv systemförändring på global nivå, från fredsbyggande till ekonomisk rättvisa mellan nationer."
  },
  projekt: {
    title: "Aktiva projekt och pilotinitiativ",
    description: "Utforska våra pågående projekt och pilotinitiativ där vi testar och utvecklar framtidens samhällslösningar i praktiken."
  }
};

// Curiosity questions for different tabs
const curiosityQuestions = {
  aubi: "Vad är det första du skulle ägna din tid åt om din grundtrygghet var garanterad?",
  hallbarhet: "Vilken är den viktigaste relationen mellan människan och naturen som du tycker vi behöver läka?"
};

export default function SolutionsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('aubi');

  console.log('TABS:', TABS);

  const getReferencesForTab = (tabId: string) => {
    switch (tabId) {
      case 'aubi':
        return [REFERENCES.aubiStats];
      case 'demokrati':
        return [REFERENCES.digitalDemocracy];
      default:
        return [];
    }
  };

  // Update active tab based on URL query
  useEffect(() => {
    const { tab } = router.query;
    if (tab && typeof tab === 'string' && tab in tabSEO) {
      setActiveTab(tab);
    }
  }, [router.query]);

  // Get SEO data for current tab
  const currentSEO = tabSEO[activeTab as keyof typeof tabSEO] || tabSEO.aubi;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/losningar?tab=${tabId}`, undefined, { shallow: true });
  };

  return (
    <>
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={`/losningar${activeTab === 'aubi' ? '' : `?tab=${activeTab}`}`}
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Tabs 
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* AUBI Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'aubi' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="aubi"
              title={AUBI_CONTENT.title}
              contents={AUBI_CONTENT.sections}
            />

            {/* AUBI Curiosity Card */}
            <div className="mb-12">
              <CuriosityCard 
                question={curiosityQuestions.aubi}
                category="Fråga att fundera på"
                className="max-w-3xl mx-auto"
              />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6">
                Finansieringsflöde och systemeffekter
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                Se hur AUBI finansieras och skapar positiva effekter genom hela samhället.
                Klicka på de olika delarna för mer information.
              </p>
              <AUBIFlowDiagram className="max-w-4xl mx-auto" />
            </div>

            {/* New KMSI Effects Diagram */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6">
                AUBI:s effekter på mänskligt välbefinnande
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                Utforska hur ekonomisk grundtrygghet möjliggör djupare kärlek, mening och sammanhang.
                Klicka på de olika delarna för att lära dig mer.
              </p>
              <AUBIKMSIEffectsDiagram className="max-w-4xl mx-auto" />
            </div>

            {/* Implementation Timeline */}
            <div className="mb-16 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-6">
                Implementationsplan
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
                En genomtänkt, fasad införing säkerställer att systemet fungerar optimalt från start
              </p>
              
              <div className="max-w-4xl mx-auto pt-16"> {/* Added pt-16 for top padding */}
                <div className="relative">
                  {/* Timeline line - make it start below the text */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 top-0" />
                  
                  {/* Phase 1 - adjusted margins */}
                  <div className="mb-24 relative"> {/* Increased margin-bottom from 16 to 24 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="relative pl-8 md:w-1/2 md:ml-auto md:pl-16">
                      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold mb-2">Pilotfas (År 1)</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Test i 2-3 utvalda kommuner</li>
                          <li>• Utförlig datainsamling och utvärdering</li>
                          <li>• Justering av system baserat på feedback</li>
                          <li>• Förberedelse för regional expansion</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 - adjusted margins */}
                  <div className="mb-24 relative"> {/* Increased margin-bottom from 16 to 24 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="relative pr-8 md:w-1/2 md:pr-16">
                      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold mb-2">Regional expansion (År 2-3)</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Utrullning i flera regioner</li>
                          <li>• Integration med befintliga system</li>
                          <li>• Optimering av processer</li>
                          <li>• Förberedelse för nationell implementation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative pb-8"> {/* Added pb-8 for bottom padding */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="relative pl-8 md:w-1/2 md:ml-auto md:pl-16">
                      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold mb-2">Nationell utrullning (År 3+)</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Full nationell implementation</li>
                          <li>• Kontinuerlig utvärdering och förbättring</li>
                          <li>• Anpassning till nya behov</li>
                          <li>• Delning av erfarenheter internationellt</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <EvidenceCard items={AUBI_CONTENT.evidence} />
          </div>

          {/* Hållbarhet Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'hallbarhet' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="hallbarhet"
              title={HALLBARHET_CONTENT.title}
              contents={HALLBARHET_CONTENT.sections}
            />

            {/* Hållbarhet Curiosity Card */}
            <div className="mb-12">
              <CuriosityCard 
                question={curiosityQuestions.hallbarhet}
                category="Fråga att fundera på"
                className="max-w-3xl mx-auto"
              />
            </div>
          </div>

          {/* Demokrati Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'demokrati' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="demokrati"
              title={DEMOKRATI_CONTENT.title}
              contents={DEMOKRATI_CONTENT.sections}
            />
          </div>

          {/* Utbildning Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'utbildning' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="utbildning"
              title={UTBILDNING_CONTENT.title}
              contents={UTBILDNING_CONTENT.sections}
            />
            <EvidenceCard items={UTBILDNING_CONTENT.evidence} />
          </div>

          {/* Global transformation Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'transformation' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="transformation"
              title={TRANSFORMATION_CONTENT.title}
              contents={TRANSFORMATION_CONTENT.sections}
            />
            
            {/* Add the new case studies component */}
            <TransformationCases />
            
            <EvidenceCard items={TRANSFORMATION_CONTENT.evidence} />
          </div>

          {/* Projekt Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'projekt' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <section id="projekt" className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-8">
                {PROJEKT_CONTENT.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {PROJEKT_CONTENT.projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              {/* Policy Support Section - Digital Sovereignty */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-12 border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Policyområde: Digital suveränitet & krisberedskap
                    </h3>
                    <p className="text-gray-700">
                      Fjärilspartiet förespråkar utveckling av öppen källkod infrastruktur 
                      för svensk digital suveränitet och totalförsvar.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Network className="w-5 h-5 text-blue-600" />
                      Vad vi förespråkar
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Peer-to-peer system som fungerar vid IT-avbrott</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Lokal-först datalagring (ej amerikanska moln)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Distribuerad identitetshantering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Offline-kapabla kommunikationssystem</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Konkreta policyförslag
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">1.</span>
                        <span>Kommuner prioriterar krisberedskap i IT-upphandling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">2.</span>
                        <span>Staten finansierar öppen källkod alternativ till utländska moln</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">3.</span>
                        <span>MCF inkluderar digital resiliens i totalförsvarsdoktrin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">4.</span>
                        <span>Vinnova prioriterar krisberedskapsinfrastruktur i innovation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Exempel: CivicBase och Stuga</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>CivicBase</strong> och konceptet <strong>Stuga</strong> är exempel 
                        på den typ av öppen infrastruktur Sverige behöver för totalförsvar. Dessa planeras att 
                        utvecklas med stöd från Vinnova och Myndigheten för civilt försvar (MCF) 
                        som oberoende projekt för svenskt totalförsvar.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600">
                        <div className="bg-blue-50 p-3 rounded">
                          <strong className="block mb-1">CivicBase (Plattform)</strong>
                          Offline-först P2P-infrastruktur för krisberedskap
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <strong className="block mb-1">Stuga (Applikation)</strong>
                          Lokal grannsamverkan vid kriser
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3 italic">
                        Fjärilspartiet stödjer denna typ av infrastruktur genom policy, men äger 
                        eller driver inte projekten. Vi förespråkar att alla svenska kommuner bör 
                        implementera liknande system för digital resiliens.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href="https://www.msb.se/sv/amnesomraden/krisberedskap--civilt-forsvar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Läs mer om totalförsvar (MSB) <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://github.com/fjarilspartiet-se/fjarilspartiet/blob/main/public/docs/svenska/STR/STR-500-digitalt-samhälle/STR-506-krisberedskap-och-digital-resiliens.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Vår policy: Digital suveränitet <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Förslag på projekt */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Planerade pilotprojekt</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {PROJEKT_CONTENT.proposals.map((proposal, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-lg">{proposal.title}</h4>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-1">
                          {proposal.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {proposal.description}
                      </p>
                      {proposal.features && (
                        <ul className="text-sm text-gray-600 space-y-2">
                          {proposal.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Vill du engagera dig i något av dessa projekt eller föreslå ett nytt? 
                  </p>
                  <Link href="/kontakt" className="btn-primary inline-flex items-center">
                    Kontakta oss <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* References Section - Only show if there are references for the active tab */}
          {getReferencesForTab(activeTab).length > 0 && (
            <section className="bg-gray-50 p-8 rounded-lg mb-20">
              <h3 className="text-xl font-semibold mb-4">Läs mer</h3>
              <div className="space-y-4">
                {getReferencesForTab(activeTab).map((reference, index) => (
                  <ReferenceSection key={index} {...reference} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 text-center">
            <ShareButtons 
              title="AUBI - Ett intelligent välfärdssystem för alla"
              description="Utforska hur AUBI skapar möjligheter för personlig utveckling och samhällsengagemang genom ekonomisk grundtrygghet."
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
