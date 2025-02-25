import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, HeartHandshake, Scale, Compass, Heart, Sparkles } from 'lucide-react';
import TransformationJourney from '../components/TransformationJourney';
import LongTermVision from '../components/LongTermVision';
import ShareButtons from '../components/ShareButtons';
import SEO from '../components/SEO';

export default function VisionPage() {
  return (
    <>
      <SEO 
        title="Vision för mänsklighetens blomstring"
        description="Utforska Fjärilspartiets vision om ett samhälle där varje person har möjlighet att förverkliga sin fulla potential och där teknologiska framsteg används för att skapa överflöd och välmående för alla."
        canonical="/vision"
      />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                En vision för mänsklighetens blomstring
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Vi ser en framtid där varje person har möjlighet att förverkliga sin fulla potential, 
                där samhället utvecklas i harmoni med naturen, och där teknologiska framsteg används 
                för att skapa överflöd och välmående för alla. Denna vision är inte bara en dröm - 
                det är ett åtagande vi arbetar för varje dag.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">En djupare mening</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                I grunden handlar vår vision om att ge varje människa möjlighet att på djupet 
                utforska frågan &quot;vad lever jag för?&quot; och skapa förutsättningar att förverkliga 
                svaren de finner. Detta är inte bara en personlig fråga - det är nyckeln till 
                ett samhälle som blomstrar på riktigt.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Compass className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-3">Frihet att utforska</h3>
                <p className="text-gray-600">
                  När grundläggande behov är säkrade genom system som AUBI skapas ett verkligt 
                  utrymme för människor att utforska livets djupare dimensioner.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold mb-3">Kraft att förverkliga</h3>
                <p className="text-gray-600">
                  Vi bygger samhällsstrukturer som ger människor verklig möjlighet att leva 
                  i enlighet med sina djupaste insikter och värderingar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Sparkles className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-3">Tillsammans växer vi</h3>
                <p className="text-gray-600">
                  När människor får utforska och förverkliga vad de verkligen lever för skapas 
                  ett rikare, mer meningsfullt samhälle för alla.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Att mäta det som verkligen betyder något</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                I ett samhälle som främst mäter framgång genom BNP och ekonomisk tillväxt går vi miste om de djupare dimensioner som gör livet meningsfullt. Fjärilspartiet förespråkar en bredare syn på samhällsutveckling som inkluderar kärlek, mening, sammanhang, lekfullhet, frihet och motståndskraft.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Kärlek, Mening, Sammanhang-Index (KMSI)</h3>
                <p className="text-gray-600 mb-4">
                  Vi anser att samhällets framgång bör mätas genom hur väl det främjar:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-red-100 p-2 rounded-full mr-3 text-red-600">❤️</span>
                    <div>
                      <h4 className="font-semibold">Kärlek</h4>
                      <p className="text-gray-600">Från självmedkänsla till mellanmänskliga relationer och universell medkänsla - hur vi tar hand om oss själva och varandra.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-2 rounded-full mr-3 text-purple-600">🔍</span>
                    <div>
                      <h4 className="font-semibold">Mening</h4>
                      <p className="text-gray-600">I arbete, fritid och personlig utveckling - hur vi upplever att våra liv har syfte och betydelse.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600">🌐</span>
                    <div>
                      <h4 className="font-semibold">Sammanhang</h4>
                      <p className="text-gray-600">Med oss själva, med andra, med naturen och med existentiella dimensioner - hur vi känner tillhörighet med omvärlden.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-100 p-2 rounded-full mr-3 text-yellow-600">🎮</span>
                    <div>
                      <h4 className="font-semibold">Lekfullhet</h4>
                      <p className="text-gray-600">Genom kreativitet, lek och utforskande - hur vi behåller vår nyfikenhet och glädje genom livet.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-2 rounded-full mr-3 text-green-600">🔓</span>
                    <div>
                      <h4 className="font-semibold">Frihet</h4>
                      <p className="text-gray-600">Genom förverkligandet av vår potential och möjligheten att uttrycka vår sanna natur - hur vi utvecklar en djupare form av frihet som går bortom yttre begränsningar.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-2 rounded-full mr-3 text-teal-600">🌱</span>
                    <div>
                      <h4 className="font-semibold">Motståndskraft</h4>
                      <p className="text-gray-600">Genom förmågan att hantera förändringar och utmaningar - hur vi bygger personlig och samhällelig resiliens som stärker oss även i svåra tider.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Nya mått på framgång</h3>
                <p className="text-gray-600 mb-4">
                  Vi inspireras av flera alternativa mätsystem som redan används runt om i världen:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Bhutans lyckoindex (GNH)</strong> - Mäter psykologiskt välbefinnande, hälsa, utbildning, kultur, samhällsvitalitet, miljö och styrning.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Nya Zeelands Wellbeing Budget</strong> - Prioriterar medborgarnas hälsa och välbefinnande över ekonomisk tillväxt i statsbudgeten.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>OECD:s Better Life Index</strong> - Mäter välbefinnande genom boende, inkomst, arbete, gemenskap, utbildning, miljö, medborgarengagemang, hälsa, livstillfredsställelse, säkerhet och balans mellan arbete och privatliv.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>FN:s Human Development Index</strong> - Kombinerar livslängd, utbildning och ekonomisk standard för att bedöma mänsklig utveckling.</span>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    &quot;Vad vi mäter påverkar vad vi gör. Om vi mäter fel saker, kommer vi att sträva efter fel saker.&quot;
                    <br />— Joseph Stiglitz, Nobelpristagare i ekonomi
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Genom att skapa system som mäter och prioriterar kärlek, mening, sammanhang och lekfullhet kan vi bygga ett samhälle som verkligen främjar mänskligt blomstrande, inte bara ekonomisk tillväxt.
              </p>
              <Link href="/losningar" className="text-blue-600 ml-1 hover:underline">
                Utforska våra förslag för ett mer meningsfullt samhälle →
              </Link>
            </div>
          </div>
        </section>

        {/* Long-term Vision Section */}
        <LongTermVision />

        {/* Butterfly effect section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Vägen mot visionen</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Precis som en fjärils vingslag kan orsaka en storm på andra sidan jorden, 
                  kan genomtänkta förändringar i samhällssystem skapa omfattande positiva effekter.
                </p>
                <p className="text-lg text-gray-600">
                  Vi använder systemtänkande och evidensbaserad design för att identifiera och 
                  implementera de förändringar som kan transformera samhället till det bättre genom 
                  positiva återkopplingsloopar och nätverkseffekter.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Exempel: AUBI</h3>
                  <p className="text-gray-600">
                    Ett intelligent välfärdssystem med ett grundläggande ekonomiskt skyddsnät 
                    ger människor den grundtrygghet och frihet de behöver för att på djupet utforska vad de
                    vill leva för och förverkliga detta genom meningsfullt engagemang i samhället. 
                    Det skapar en positiv spiral av ökat entreprenörskap, bättre hälsa, starkare 
                    lokalsamhällen och minskad byråkrati - effekter som förstärker varandra mot vår vision.
                    <Link href="/losningar#aubi" className="text-blue-600 ml-1 hover:underline">
                      Läs mer om AUBI
                    </Link>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Exempel: Lokala matsystem</h3>
                  <p className="text-gray-600">
                    Stöd för lokal matproduktion stärker både miljön, ekonomin och 
                    samhällsgemenskapen, vilket skapar en växande rörelse för hållbara lösningar.
                    <Link href="/losningar#hallbarhet" className="text-blue-600 ml-1 hover:underline">
                      Utforska lokala matsystem
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Journey showing the practical path */}
        <TransformationJourney />

        {/* Core Values - Now explicitly connected to the vision */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Värderingar som vägleder oss</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <HeartHandshake className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold">Individuell autonomi</h3>
                </div>
                <p className="text-gray-600">
                  Varje persons rätt och förmåga att forma sitt liv är central för vår 
                  vision om mänsklig fulländning. Genom AUBI och andra stödsystem skapar vi 
                  verklig frihet att välja sin väg.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">Systemisk rättvisa</h3>
                </div>
                <p className="text-gray-600">
                  För att uppnå vår vision måste vi adressera grundorsakerna till ojämlikhet 
                  och orättvisa genom att omforma systemens struktur, inte bara lindra symptomen.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold">Evidensbaserad innovation</h3>
                </div>
                <p className="text-gray-600">
                  Vägen mot vår vision kräver att vi kombinerar forskning, praktisk erfarenhet 
                  och systematisk utvärdering för att utveckla lösningar som verkligen fungerar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Now with stronger connection to vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Var med och förverkliga visionen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Tillsammans kan vi bygga den framtid vi drömmer om. Se hur vi omsätter vår vision 
              i praktiken genom konkreta lösningar och pågående projekt.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/losningar" 
                className="btn-primary inline-flex items-center text-lg"
              >
                Utforska våra lösningar <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/bli-medlem" 
                className="btn-secondary inline-flex items-center text-lg"
              >
                Gå med i rörelsen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <br></br>
            <ShareButtons 
              title="Fjärilspartiets vision för mänsklighetens blomstring"
              description="Ett samhälle där varje person har möjlighet att förverkliga sin fulla potential, där teknologiska framsteg används för att skapa överflöd och välmående för alla."
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
