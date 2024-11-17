import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import Tabs from '../components/Tabs';
import ContentSection from '../components/ContentSection';
import EvidenceCard from '../components/EvidenceCard';
import ProjectCard from '../components/ProjectCard';
import ReferenceSection from '../components/ReferenceSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { 
  TABS, AUBI_CONTENT, HALLBARHET_CONTENT, 
  DEMOKRATI_CONTENT, UTBILDNING_CONTENT, PROJEKT_CONTENT, REFERENCES 
} from '../data/solutions';

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

  useEffect(() => {
    // Get tab from URL query parameter
    const { tab } = router.query;
    if (tab && typeof tab === 'string' && TABS.some(t => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [router.query]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/losningar?tab=${tabId}`, undefined, { shallow: true });
  };

  return (
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
      </div>
    </MainLayout>
  );
}
