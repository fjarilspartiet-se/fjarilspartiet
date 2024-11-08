import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { Network, Lightbulb, Code, Users, Blocks, GitBranch, ExternalLink, CircleUser, Sprout, Globe } from 'lucide-react';
import EngagementSection from '../components/EngagementSection';

const ProjectStatus = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktiv utveckling':
        return 'bg-green-100 text-green-800';
      case 'Pilot':
        return 'bg-blue-100 text-blue-800';
      case 'Planering':
        return 'bg-yellow-100 text-yellow-800';
      case 'Policy':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Om Fjärilspartiet
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ett parti som kombinerar systemtänkande, evidensbaserad politik och 
              praktiska lösningar för att skapa positiv samhällsförändring. Varje steg vi tar 
              leder mot vår vision om ett blomstrande samhälle. Som en fjäril genomgår vi en 
              medveten transformation - just nu befinner vi oss i äggstadiet där vi bygger grunden 
              för något extraordinärt, vackert och livskraftigt.
            </p>
          </div>
          {/* Vision Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CircleUser className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Individuell blomstring</h3>
              <p className="text-sm text-gray-600">
                Vi bygger system som möjliggör verklig frihet och självförverkligande för varje person.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Sprout className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Hållbar samhällsutveckling</h3>
              <p className="text-sm text-gray-600">
                Genom systemiskt tänkande skapar vi lösningar som gynnar både människor och miljö.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Global transformation</h3>
              <p className="text-sm text-gray-600">
                Vi arbetar för en värld där resursöverflöd och fred möjliggörs genom teknologi och samarbete.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="/vision" className="btn-secondary inline-flex items-center">
              Utforska vår vision
            </Link>
            <Link href="/losningar" className="btn-primary inline-flex items-center">
              Se våra lösningar
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Approach Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Vårt tillvägagångssätt</h2>
            <div className="space-y-6">
              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <Network className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Systemtänkande</h3>
                  <p className="text-gray-600 mb-2">
                    Vi förstår att samhällsutmaningar är sammankopplade och kräver 
                    helhetslösningar som adresserar grundorsaker, inte bara symptom.
                  </p>
                  <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                    Exempel: Vårt AUBI-system integrerar ekonomisk trygghet med samhällsengagemang 
                    och lokala utvecklingsmöjligheter.
                  </div>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Evidensbaserad politik</h3>
                  <p className="text-gray-600 mb-2">
                    Våra förslag bygger på forskning, praktisk erfarenhet och 
                    systematisk utvärdering av resultat.
                  </p>
                  <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                    Exempel: Vi genomför pilotprojekt och utvärderar resultaten innan 
                    vi föreslår storskalig implementation.
                  </div>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <Code className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Öppen utveckling</h3>
                  <p className="text-gray-600 mb-2">
                    Vi utvecklar våra lösningar öppet och transparent, med möjlighet 
                    för alla att bidra och granska.
                  </p>
                  <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                    Exempel: All vår kod är öppen källkod och våra policydokument 
                    utvecklas offentligt på GitHub.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Areas */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Aktiva utvecklingsområden</h2>
            <div className="space-y-6">
              <div className="group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">DPOP - Digital demokratiplattform</h3>
                  <ProjectStatus status="Aktiv utveckling" />
                </div>
                <p className="text-gray-600 mb-2">
                  En öppen plattform för demokratiskt deltagande och transparent 
                  partiverksamhet, byggd på modern teknik och säkerhetsprinciper.
                </p>
                <Link 
                  href="https://github.com/yourusername/DPOP" 
                  className="text-blue-600 text-sm inline-flex items-center hover:underline"
                >
                  Utforska på GitHub <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">AUBI - Adaptiv basinkomst</h3>
                  <ProjectStatus status="Policy" />
                </div>
                <p className="text-gray-600 mb-2">
                  Ett intelligent välfärdssystem som ger grundtrygghet och 
                  uppmuntrar samhällsengagemang.
                </p>
                <Link 
                  href="/losningar#aubi" 
                  className="text-blue-600 text-sm inline-flex items-center hover:underline"
                >
                  Läs mer om AUBI <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Lokala pilotprojekt</h3>
                  <ProjectStatus status="Planering" />
                </div>
                <p className="text-gray-600 mb-2">
                  Praktiska experiment med nya lösningar för lokal demokrati, 
                  hållbarhet och samhällsengagemang.
                </p>
                <Link 
                  href="/losningar#projekt" 
                  className="text-blue-600 text-sm inline-flex items-center hover:underline"
                >
                  Se aktiva projekt <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Section */}
        <EngagementSection />

      </div>
    </MainLayout>
  );
}
