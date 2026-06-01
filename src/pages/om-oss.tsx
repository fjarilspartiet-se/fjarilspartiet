import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { Network, Lightbulb, Code, CircleUser, Sprout, Layers, GitBranch } from 'lucide-react';
import EngagementSection from '../components/EngagementSection';
import ShareButtons from '../components/ShareButtons';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="Om Fjärilspartiet"
        description="Lär känna Fjärilspartiet – ett parti som vill flytta besluten närmare människorna och fånga upp samhällsproblem i tid. Vi bygger en process som du kan vara med och forma."
        canonical="/om-oss"
      />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Om Fjärilspartiet
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Vi vill flytta makt och beslut närmare människorna – och fånga upp
                samhällsproblem i tid, innan de hinner växa till kriser. Vi är i början av något,
                och det är medvetet: vi bygger inte ett färdigt partiprogram, utan en process där
                människor som du kan vara med och forma vad som växer fram.
              </p>
            </div>
            {/* Vision Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CircleUser className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Individuell blomstring</h3>
                <p className="text-sm text-gray-600">
                  Vi vill skapa förutsättningar för verklig frihet och självförverkligande för varje person.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Sprout className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Hållbar samhällsutveckling</h3>
                <p className="text-sm text-gray-600">
                  Lösningar som gynnar både människor och miljö – och som håller i längden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Network className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Närmare människorna</h3>
                <p className="text-sm text-gray-600">
                  Beslut och resurser hör hemma där problemen märks – så nära människorna som möjligt.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Link href="/vision" className="btn-secondary inline-flex items-center">
                Utforska vår vision
              </Link>
              <Link href="/forslag" className="btn-primary inline-flex items-center">
                Se våra förslag
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Approach Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Vårt tillvägagångssätt</h2>
              <div className="space-y-6">
                <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <Network className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Vi fångar upp problem i tid</h3>
                    <p className="text-gray-600 mb-2">
                      Samhällsproblem hänger ihop och byggs ofta upp långsamt och tyst. Istället för
                      att vänta på krisen vill vi fånga de tidiga signalerna och rätta kursen medan
                      problemen fortfarande är små – och åtgärda orsaker, inte bara symptom.
                    </p>
                    <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                      Exempel: AUBI – en grundtrygghet som gör det möjligt att byta bana eller
                      vidareutbilda sig innan jobben försvinner.
                    </div>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Evidensbaserad politik</h3>
                    <p className="text-gray-600 mb-2">
                      Våra förslag bygger på forskning och praktisk erfarenhet – och de hålls som
                      förslag att pröva, inte tvärsäkra svar. Det som fungerar behåller vi, det som
                      inte gör det görs om.
                    </p>
                    <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                      Exempel: vi vill att reformer testas i liten skala och utvärderas innan de skalas upp.
                    </div>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <Code className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Öppen utveckling</h3>
                    <p className="text-gray-600 mb-2">
                      Vi arbetar öppet och transparent, så att vem som helst kan följa, granska och bidra.
                    </p>
                    <div className="text-sm text-gray-500 pl-4 border-l-2 border-blue-200">
                      Exempel: våra policydokument utvecklas offentligt, och idéerna bakom dem är fria att bygga vidare på.
                    </div>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <Layers className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Adaptiv utveckling</h3>
                    <p className="text-gray-600 mb-2">
                      Vår plattform är medvetet ofullständig och hela tiden i rörelse. Ett parti som
                      påstår sig ha alla svar blundar för hur verkligheten fungerar. Vår styrka är inte
                      en perfekt slutgiltig plan, utan en motståndskraftig process för att upptäcka vad
                      som faktiskt behövs. Det är samma tanke som &quot;reformer med inbyggt omtag&quot; på
                      startsidan – fast på det stora hela: byggd för att kunna ändras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <GitBranch className="w-6 h-6 text-blue-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Fraktal styrning</h3>
                    <p className="text-gray-600">
                      Samma princip – att beslut fattas så nära människorna som möjligt – ska löpa som
                      en röd tråd genom hela samhället: från individen till grannskapet, kommunen och
                      nationen. Vi kallar det fraktal styrning, men det är egentligen bara ett annat ord
                      för att makt och ansvar hör hemma där effekterna märks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What we believe */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Vad vi tror</h2>
              <p className="text-gray-600 mb-4">
                Att vara med i Fjärilspartiet handlar mindre om att ha rätt svar och mer om en hållning:
                ett öppet hjärta och ett öppet sinne inför möjligheten till positiv förändring. Vi släpper
                en del av den rädsla som så ofta präglar nyhetsflödet – utan att för den skull bli naiva
                eller utopiska.
              </p>
              <p className="text-gray-600 mb-4">
                Lägg märke till skillnaden mellan att vara öppen <em>inför möjligheten</em> att samhället
                kan bli bättre, och att <em>lova</em> att det blir det. Ingen känner framtiden – men vi kan
                välja hur vi möter den.
              </p>
              <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 text-gray-700 italic">
                Hoppfulla nog att tro att förändring är möjlig, ödmjuka nog att fortsätta lära, och
                praktiska nog att pröva vad som faktiskt fungerar.
              </blockquote>
              <p className="text-gray-600">
                Det betyder att vi inte är de som påstår oss se hela bilden medan alla andra sitter fast.
                Ingen av oss ser hela systemet. Men vi kan bli bättre på att lyssna, lära och anpassa oss
                – tillsammans. Det är vad det innebär att vara fjärilspartist.
              </p>
            </div>
          </div>

          {/* Engagement Section */}
          <EngagementSection />

          {/* Sharing section */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Dela vårt budskap</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Hjälp oss nå fler. Varje delning gör att fler får syn på ett parti som vill fånga upp
              problemen i tid och flytta besluten närmare människorna.
            </p>
            <ShareButtons 
              title="Om Fjärilspartiet"
              description="Ett parti som vill flytta besluten närmare människorna och fånga upp samhällsproblem i tid – innan de växer till kriser."
            />
          </div>

        </div>
      </MainLayout>
    </>
  );
}
