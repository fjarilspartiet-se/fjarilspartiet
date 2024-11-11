import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Tabs from '../components/Tabs';
import ContentSection from '../components/ContentSection';
import EvidenceCard from '../components/EvidenceCard';
import ProjectCard from '../components/ProjectCard';
import ReferenceSection from '../components/ReferenceSection';
import Link from 'next/link';
import { 
  TABS, AUBI_CONTENT, HALLBARHET_CONTENT, 
  DEMOKRATI_CONTENT, UTBILDNING_CONTENT, PROJEKT_CONTENT, REFERENCES 
} from '../data/solutions';

export default function SolutionsPage() {
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

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Tabs 
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* AUBI Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'aubi' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <ContentSection
            id="aubi"
            title={AUBI_CONTENT.title}
            contents={AUBI_CONTENT.sections}
          />
          <EvidenceCard items={AUBI_CONTENT.evidence} />
        </div>

        {/* Hållbarhet Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'hallbarhet' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <ContentSection
            id="hallbarhet"
            title={HALLBARHET_CONTENT.title}
            contents={HALLBARHET_CONTENT.sections}
          />
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

            {/* Förslag på projekt */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Förslag på projekt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {PROJEKT_CONTENT.proposals.map((proposal, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{proposal.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {proposal.description}
                    </p>
                  </div>
                ))}
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
      </div>
    </MainLayout>
  );
}
