import MainLayout from '../layouts/MainLayout';
import { Book, Network, Brain, Heart, Globe, School, Share2, Copy, Check, ArrowRight, Users, Sprout } from 'lucide-react';
import Link from 'next/link';
import SystemsThinkingCourse from '../components/SystemsThinkingCourse';
import SEO from '../components/SEO';

export default function ResourcesPage() {
  return (
    <>
      <SEO 
        title="Resurser för utveckling och fördjupning"
        description="Verktyg, litteratur och resurser för att förstå och bidra till Fjärilspartiets systemiska approach för samhällsförnyelse. Här hittar du både teoretiskt material och praktiska verktyg."
        canonical="/resurser"
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Social Media Kit Section - Add this after the "Studiegrupper" section */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Share2 className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Sociala medier delningskit</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Hjälp till att sprida Fjärilspartiets budskap med vårt kompletta delningskit för sociala medier.
              Hämta färdiga mallar, infografik och grafik som är lätta att anpassa och dela.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Innehåller:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Copy className="w-4 h-4 text-blue-600 mr-2" />
                    Citatmallar i olika format
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-4 h-4 text-purple-600 mr-2" />
                    AUBI och systemtänkande infografik
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-green-600 mr-2" />
                    &quot;Bli medlem&quot;-mallar
                  </li>
                  <li className="flex items-center">
                    <Sprout className="w-4 h-4 text-teal-600 mr-2" />
                    Grafik för transformationsprocessen
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Fördelar:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    SVG-filer som är lätta att anpassa
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Färdiga PNG-filer för direkt delning
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Professionell design med partiets visuella identitet
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    Texter och riktlinjer för effektiv kommunikation
                  </li>
                </ul>
              </div>
            </div>
            <Link 
              href="/social-media-kit" 
              className="btn-primary inline-flex items-center"
            >
              Utforska sociala medier delningskitet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
                    
          <h1 className="text-4xl my-16 font-bold text-center mb-12">
            Resurser för utveckling och fördjupning
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Här har vi samlat verktyg, litteratur och resurser som kan hjälpa dig förstå 
            och bidra till partiets systemiska approach för samhällsförnyelse.
          </p>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Lär dig grunderna i systemtänkande
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
              Utforska vår interaktiva introduktion till systemtänkande och holism - de grundläggande 
              perspektiv som vägleder Fjärilspartiets approach till samhällsförändring.
            </p>
            <SystemsThinkingCourse />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left column with Interaktiva verktyg and the Basinkomst subsection from Rekommenderad läsning */}
            <div className="card">
              <div className="flex items-center mb-4">
                <Network className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Interaktiva verktyg</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Spiralize.org</h3>
                  <p className="text-gray-600 mb-2">
                    Ett interaktivt verktyg för att utforska och förstå hur värderingar och 
                    världsbilder utvecklas. Hjälper dig förstå den utvecklingspsykologiska grunden 
                    för partiets systemiska approach.
                  </p>
                  <a 
                    href="https://spiralize.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Utforska Spiralize
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">DidiS & DPOP - Digital demokrati</h3>
                  <p className="text-gray-600 mb-2">
                    Våra open source-plattformar för demokratiskt deltagande och transparens:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">DidiS</span> - Plattform för direktdemokrati och deltagarprocesser
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">DPOP</span> - Partiets operativa plattform för transparent styrning och medlemsengagemang
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/fjarilspartiet-se/DidiS" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      DidiS på GitHub
                    </a>
                    <a 
                      href="https://github.com/fjarilspartiet-se/DPOP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      DPOP på GitHub
                    </a>
                  </div>
                </div>

                <div className="flex items-center mb-4 mt-16">
                  <Book className="w-6 h-6 text-green-600 mr-2 mt-16" />
                  <h2 className="text-2xl font-bold mt-16">Rekommenderad läsning</h2>
                </div>
                
                {/* Adding the Basinkomst section here for better balance */}
                <div className="mt-2 pt-6 border-t">
                  <div className="flex items-center mb-4">
                    <h3 className="font-semibold">Basinkomst och ekonomisk innovation</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Grundläggande texter om ekonomisk grundtrygghet och systemförändring:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Adaptiv Universell Basinkomst - Ett nytt socialt kontrakt för 2000-talet&quot;</span> av Björn Holmström 
                      - Denna bok är en djupgående utforskning av hur AUBI kan implementeras och omforma samhället.
                      <a 
                        href="https://bjornkennethholmstrom.wordpress.com/wp-content/uploads/2025/02/adaptiv-universell-basinkomst-ett-nytt-socialt-kontrakt-for-2000-talet.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Ladda ner boken (PDF)
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Complex Adaptation and Permissionless Innovation&quot;</span> av Otto Lehto 
                      - En doktorsavhandling som analyserar UBI från ett systemiskt perspektiv.
                      <a 
                        href="https://kclpure.kcl.ac.uk/portal/en/studentTheses/complex-adaptation-and-permissionless-innovation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Ladda ner avhandlingen (PDF)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column with the remaining Rekommenderad läsning subsections */}
            <div className="card">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Systemtänkande</h3>
                  <p className="text-gray-600 mb-2">Grundläggande verk om hur vi kan förstå och arbeta med komplexa system:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Thinking in Systems&quot;</span> av Donella Meadows 
                      - En klassisk introduktion till systemtänkande som visar hur vi kan identifiera 
                      systemets hävstångspunkter för effektiv förändring.
                      <a 
                        href="https://www.chelseagreen.com/product/thinking-in-systems/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;The Systems View of Life&quot;</span> av Fritjof Capra & Pier Luigi Luisi 
                      - En omfattande syntes som visar hur biologiska, kognitiva, sociala och ekologiska fenomen 
                      är sammanlänkade i livets grundläggande mönster.
                      <a 
                        href="https://www.cambridge.org/core/books/systems-view-of-life/35186BA5B12161E469C4224B6076ADFE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Optimizing Reality: A Systems Thinking Guide for a Multi-Intelligence Future&quot;</span> av Björn Kenneth Holmström 
                      - Ett innovativt ramverk för hur olika former av intelligens – mänsklig, artificiell, ekologisk och kollektiv 
                      – kan samverka för att skapa mer harmoniska och hållbara system.
                      <a 
                        href="https://bjornkennethholmstrom.wordpress.com/optimizing-reality-a-systems-thinking-guide-for-a-multi-intelligence-future/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Samhällstransformation</h3>
                  <p className="text-gray-600 mb-2">Böcker som visar vägen mot djupare systemförändring:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;The Nordic Secret&quot;</span> av Lene Rachel Andersen 
                      - Hur de nordiska länderna historiskt använt bildning och personlig utveckling 
                      för samhällstransformation.
                      <a 
                        href="https://www.nordicsecret.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Reinventing Organizations&quot;</span> av Frederic Laloux 
                      - En utvecklingsbaserad analys av hur organisationer kan utvecklas mot mer 
                      meningsfulla och effektiva former.
                      <a 
                        href="https://www.reinventingorganizations.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Doughnut Economics&quot;</span> av Kate Raworth 
                      - Nytänkande om hur vi kan skapa ekonomiska system som både möter människors 
                      behov och respekterar planetens gränser.
                      <a 
                        href="https://doughnuteconomics.org/about-doughnut-economics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om konceptet
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Global Governance: Natural Steps Toward a Thriving World&quot;</span> av Björn Kenneth Holmström 
                      - En praktisk färdplan för att skapa etiska, decentraliserade och deltagarbaserade globala styrsystem.
                      <a 
                        href="https://bjornkennethholmstrom.wordpress.com/global-governance-natural-steps-toward-a-thriving-world-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">&quot;Universal Basic Income&quot;</span> av Karl Widerquist 
                      - En koncis och välskriven introduktion till basinkomst från MIT Press Essential Knowledge-serien.
                      <a 
                        href="https://mitpress.mit.edu/9780262546898/universal-basic-income/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Läs mer om boken
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI-verktyg */}
          <div className="card mt-12">
            <div className="flex items-center mb-4">
              <Network className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold">AI-verktyg för systemtänkande</h2>
            </div>
            <p className="text-gray-600 mb-6">
              På Fjärilspartiet använder vi aktivt AI-assistenter som samarbetspartners för att hantera komplexa 
              utmaningar och utveckla systemiska lösningar. Dessa verktyg kan förstärka mänsklig kreativitet, 
              bidra med olika perspektiv och hjälpa till att syntetisera komplex information till 
              användbara insikter.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-2">Claude (Anthropic)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Särskilt stark för nyanserad policyanalys, förståelse av komplexa system och att generera genomtänkta 
                  förklaringar av utvecklingskoncept.
                </p>
                <a 
                  href="https://claude.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Använd Claude
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-2">ChatGPT (OpenAI)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Användbar för brainstorming, teknisk assistans, kreativ idégenerering och tillgång till bred 
                  kunskapsbas inom olika ämnen.
                </p>
                <a 
                  href="https://chat.openai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Använd ChatGPT
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-2">DeepSeek</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Värdefull för tekniska uppgifter, kodgenerering och att tillhandahålla alternativa perspektiv 
                  på komplexa problem.
                </p>
                <a 
                  href="https://chat.deepseek.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Använd DeepSeek
                </a>
              </div>
            </div>
            
            <h3 className="font-semibold mt-4 mb-2">Vår process för systemiskt AI-engagemang</h3>
            <p className="text-gray-600 mb-2">
              Vi har utvecklat en metodik för att använda AI-verktyg som överensstämmer med vårt systemiska tankesätt:
            </p>
            
            <ol className="list-decimal list-inside text-gray-600 space-y-6 mt-4">
              <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                <span className="font-medium">Identifiera en systemisk fråga</span>
                <p className="ml-6 mt-1">
                  Definiera problemet och dess gränser tydligt, kartlägg intressenter och deras relationer, 
                  identifiera relevanta system och delsystem, och beakta flera perspektiv på frågan.
                </p>
              </li>
              
              <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                <span className="font-medium">Sök systemmedveten vägledning</span>
                <p className="ml-6 mt-1">
                  Formulera frågor som beaktar hela det berörda systemets välbefinnande, be om lösningar som 
                  balanserar olika behov och perspektiv, efterfråga identifiering av potentiella oavsiktliga 
                  konsekvenser, och utforska både kort- och långsiktiga effekter.
                </p>
              </li>
              
              <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                <span className="font-medium">Triangulera och syntetisera</span>
                <p className="ml-6 mt-1">
                  Dela svar mellan olika AI-verktyg, be om kritik och förfining av initiala förslag, 
                  identifiera punkter där svar sammanfaller eller skiljer sig åt, och syntetisera flera 
                  perspektiv till integrerade metoder.
                </p>
              </li>
              
              <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                <span className="font-medium">Implementera och iterera</span>
                <p className="ml-6 mt-1">
                  Tillämpa insikter på praktiska lösningar, testa implementeringar i små experiment där 
                  misslyckanden är säkra, samla återkoppling från verkliga tillämpningar, och förfina 
                  metoderna baserat på observerade resultat.
                </p>
              </li>
            </ol>
            
            <h3 className="font-semibold mt-6 mb-2">Riktlinjer för effektiv användning</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                <span className="font-medium">Bibehåll mänskligt omdöme</span> - AI-verktyg är rådgivare, inte beslutsfattare
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                <span className="font-medium">Beakta olika perspektiv</span> - Använd AI för att utforska synvinklar du kanske inte har övervägt
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                <span className="font-medium">Leta efter systemiska mönster</span> - Be AI:er identifiera relationer och återkopplingsslingor
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                <span className="font-medium">Verifiera faktapåståenden</span> - AI-system kan göra misstag, särskilt med specifika fakta
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                <span className="font-medium">Dela dina erfarenheter</span> - Hjälp andra att lära sig genom att dokumentera vad som fungerar och vad som inte gör det
              </li>
            </ul>
          </div>

          {/* Kunskapsområden */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Utvecklingspsykologi</h3>
              <p className="text-gray-600">
                Fördjupa dig i hur människor och samhällen utvecklas genom olika stadier 
                av mognad och komplexitet. Förståelse för dessa mönster hjälper oss designa 
                system som främjar både individuell och kollektiv utveckling.
              </p>
            </div>

            <div className="card">
              <Heart className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Social innovation</h3>
              <p className="text-gray-600">
                Utforska nya modeller för samhällsorganisering som skapar mer hållbara och rättvisa system. 
                Lär dig om framgångsrika experiment med alternativa ekonomiska och sociala strukturer 
                från hela världen.
              </p>
            </div>


            <div className="card">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Global transformation</h3>
              <p className="text-gray-600">
                Förstå hur lokala förändringar kan skapa positiva kedjereaktioner som transformerar 
                hela samhället. Genom att arbeta med naturliga utvecklingsmönster kan små, välplanerade 
                insatser få omfattande effekter.
              </p>
            </div>
          </div>

          {/* Studiegrupper */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <School className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Studiegrupper</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Gå med i en av våra studiegrupper för att tillsammans med andra utforska 
              och diskutera dessa ämnen. Vi organiserar både online och fysiska träffar.
            </p>
            <a 
              href="https://discord.gg/GxSxaYANU4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Gå med i vår Discord-community
            </a>
          </div>



        </div>
      </MainLayout>
    </>
  );
}
