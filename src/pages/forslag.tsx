import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import Tabs from '../components/Tabs';
import ContentSection from '../components/ContentSection';
import EvidenceCard from '../components/EvidenceCard';
import AUBIKMSIEffectsDiagram from '../components/AUBIKMSIEffectsDiagram'; 
import ReferenceSection from '../components/ReferenceSection';
import CuriosityCard from '../components/CuriosityCard';
import ShareButtons from '../components/ShareButtons';
import { ArrowRight } from 'lucide-react';
import { 
  TABS, FRAMTIDSKOMMUNER_CONTENT, AUBI_CONTENT, HALLBARHET_CONTENT, 
  DEMOKRATI_CONTENT, UTBILDNING_CONTENT, REFERENCES 
} from '../data/solutions';
import SEO from '../components/SEO';

// SEO configurations for each tab
const tabSEO = {
  framtidskommuner: {
    title: "Närmare människorna – Framtidskommuner",
    description: "Vårt främsta förslag: flytta makt, pengar och frihet närmare människorna, så att problem kan lösas där de uppstår."
  },
  aubi: {
    title: "Trygghet när jobben förändras",
    description: "AUBI – en adaptiv basinkomst som gör det möjligt att våga byta bana, vidareutbilda sig eller starta eget utan att riskera allt."
  },
  hallbarhet: {
    title: "Hållbarhet – ett samhälle som klarar kriser",
    description: "Från lokala matsystem till digital resiliens – förslag för ett samhälle som står starkare när kriser slår till."
  },
  demokrati: {
    title: "Mer inflytande mellan valen",
    description: "Trygga och transparenta sätt för fler att påverka besluten som rör deras vardag – inte bara vart fjärde år."
  },
  utbildning: {
    title: "En skola som ser varje elev",
    description: "Ett lärande som ger trygghet och en stark grund för alla, samtidigt som varje elevs nyfikenhet och talang får växa."
  }
};

// Curiosity questions for different tabs
const curiosityQuestions = {
  aubi: "Vad är det första du skulle ägna din tid åt om din grundtrygghet var garanterad?",
  hallbarhet: "Vilken är den viktigaste relationen mellan människan och naturen som du tycker vi behöver läka?"
};

export default function SolutionsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('framtidskommuner');

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
  const currentSEO = tabSEO[activeTab as keyof typeof tabSEO] || tabSEO.framtidskommuner;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/forslag?tab=${tabId}`, undefined, { shallow: true });
  };

  return (
    <>
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={`/forslag${activeTab === 'framtidskommuner' ? '' : `?tab=${activeTab}`}`}
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Framing intro */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Vi lovar inte färdiga svar – vi bygger förmågan att hitta dem
            </h1>
            <p className="text-lg text-[var(--color-text-muted)]">
              De flesta partier säljer färdiga lösningar. Vi tror på något annat: att skapa
              förutsättningarna för att rätt lösningar ska kunna växa fram, testas och rättas till –
              där problemen finns. Förslagen nedan är just det – förslag att pröva, inte färdiga sanningar.
            </p>
            <p className="mt-4 text-base">
              <Link href="/det-har-star-vi-for" className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80">
                Vill du se var vi står i de stora frågorna? →
              </Link>
            </p>
          </div>
          <Tabs 
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* Framtidskommuner Section */}
          <div className={`transition-opacity duration-300 ${activeTab === 'framtidskommuner' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ContentSection
              id="framtidskommuner"
              title={FRAMTIDSKOMMUNER_CONTENT.title}
              contents={FRAMTIDSKOMMUNER_CONTENT.sections}
            />
          </div>

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

          {/* Öppna idéer */}
          <div className="max-w-3xl mx-auto mb-12 bg-gray-50 border border-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">Öppna idéer, inte partiprodukter</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Några av oss har skissat på öppna verktyg i den här riktningen. De är fristående, öppna
              projekt som vem som helst får bygga vidare på – Fjärilspartiet äger eller driver dem inte.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://github.com/BjornKennethHolmstrom/DPOP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                DPOP – öppen plattform för digitalt deltagande <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/BjornKennethHolmstrom/DiDiS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                DiDiS – digital direktdemokrati <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/BjornKennethHolmstrom/MU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                MU – öppet utbildningsupplägg <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <ShareButtons 
              title="Förslag att pröva – Fjärilspartiet"
              description="Vi lovar inte färdiga svar – vi vill bygga förmågan att hitta dem, genom att flytta besluten närmare människorna."
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
