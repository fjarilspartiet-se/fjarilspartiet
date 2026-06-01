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
        {/* --- 1. Hero: bridge the landing page promise to the vision --- */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Ett samhälle som ser vad som är på väg<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  är också ett samhälle där människor kan blomstra
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                När systemen inte längre fastnar i panikåtgärder och upprepade kriser,
                frigörs tid, energi och tillit. Då kan vi äntligen ställa de djupare frågorna:
                Vad lever vi för? Vad gör ett liv meningsfullt? Och hur bygger vi ett samhälle
                som mäter och främjar det som verkligen betyder något?
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Vår vision är det långa perspektivet. Den börjar med vardagen i en kommun
                och sträcker sig mot en mänsklighet som förstår sig själv tillräckligt väl
                för att sluta upprepa samma misstag.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. Existential foundation (softened, but kept) --- */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">En djupare mening – när grunden är trygg</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Vi tror att varje människa har rätt att utforska frågan
                &quot;vad lever jag för?&quot; – och att samhällets uppgift är att
                undanröja hindren för att förverkliga svaren. Det är inte en lyxfråga.
                Det är riktningen vi arbetar mot.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Compass className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-3">Frihet att utforska</h3>
                <p className="text-gray-600">
                  När grundläggande trygghet är på plats – genom reformer som
                  Framtidskommuner och en adaptiv basinkomst – skapas verkligt
                  utrymme för människor att utforska livets större frågor.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold mb-3">Kraft att förverkliga</h3>
                <p className="text-gray-600">
                  Vi bygger samhällsstrukturer som ger människor möjlighet att leva
                  i enlighet med sina djupaste insikter och värderingar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Sparkles className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-3">Tillsammans växer vi</h3>
                <p className="text-gray-600">
                  När fler får utforska och förverkliga vad de verkligen lever för,
                  skapas ett rikare, mer meningsfullt samhälle för alla.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. Measuring what matters (international inspiration first) --- */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Att mäta det som verkligen betyder något</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                I ett samhälle som främst mäter framgång genom BNP och ekonomisk tillväxt
                går vi miste om de dimensioner som gör livet meningsfullt. Vi förespråkar
                en bredare syn – och vi är inte ensamma. Flera länder och internationella
                organ har redan börjat mäta välbefinnande och mänsklig utveckling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              {/* Left column: international examples */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Nya mått på framgång</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Bhutans lyckoindex (GNH)</strong> – Mäter psykologiskt välbefinnande, hälsa, utbildning, kultur och miljö.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Nya Zeelands Wellbeing Budget</strong> – Prioriterar medborgarnas hälsa och välbefinnande framför strikt tillväxt.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>OECD:s Better Life Index</strong> – Jämför livskvalitet över elva dimensioner.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>FN:s Human Development Index</strong> – Kombinerar livslängd, utbildning och ekonomisk standard.</span>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    &quot;Vad vi mäter påverkar vad vi gör. Om vi mäter fel saker, kommer vi att sträva efter fel saker.&quot;
                    <br />— Joseph Stiglitz, Nobelpristagare i ekonomi
                  </p>
                </div>
              </div>

              {/* Right column: KMSI as provocation */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    En provokation: Kärlek, Mening, Sammanhang-Index (KMSI)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Vi har lekt med tanken på ett index som går ännu djupare – ett som fångar
                    de mjuka dimensionerna av ett gott liv. Det är inte ett färdigt förslag,
                    utan en inbjudan att tänka om kring vad framgång egentligen är.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-red-100 p-2 rounded-full mr-3 text-red-600">❤️</span>
                      <div>
                        <h4 className="font-semibold">Kärlek</h4>
                        <p className="text-gray-600">Från självmedkänsla till relationer och universell medkänsla.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 p-2 rounded-full mr-3 text-purple-600">🔍</span>
                      <div>
                        <h4 className="font-semibold">Mening</h4>
                        <p className="text-gray-600">Upplevelsen av syfte och betydelse i arbete, fritid och utveckling.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600">🌐</span>
                      <div>
                        <h4 className="font-semibold">Sammanhang</h4>
                        <p className="text-gray-600">Tillhörighet – med sig själv, andra, naturen och existentiella dimensioner.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 p-2 rounded-full mr-3 text-yellow-600">🎮</span>
                      <div>
                        <h4 className="font-semibold">Lekfullhet</h4>
                        <p className="text-gray-600">Kreativitet, lek och nyfikenhet genom hela livet.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 p-2 rounded-full mr-3 text-green-600">🔓</span>
                      <div>
                        <h4 className="font-semibold">Frihet</h4>
                        <p className="text-gray-600">Förmågan att uttrycka sin sanna natur bortom yttre begränsningar.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 p-2 rounded-full mr-3 text-teal-600">🌱</span>
                      <div>
                        <h4 className="font-semibold">Motståndskraft</h4>
                        <p className="text-gray-600">Personlig och samhällelig resiliens som stärker oss i svåra tider.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="text-center text-sm text-gray-500 italic">
                  KMSI är en tankelek – ett sätt att synliggöra vad BNP döljer.
                  Men vägen dit börjar med konkreta mått som redan prövas.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Genom att mäta och prioritera det som faktiskt gör livet värt att leva,
                kan vi bygga ett samhälle som främjar mänskligt blomstrande – inte bara
                ekonomisk tillväxt. Vad som börjar som en provocerande fråga kan bli
                morgondagens självklara styrmått.
              </p>
              <Link href="/forslag" className="text-blue-600 ml-1 hover:underline">
                Utforska våra förslag för ett mer meningsfullt samhälle →
              </Link>
            </div>
          </div>
        </section>

        {/* --- 4. LongTermVision (existing component) --- */}
        <LongTermVision />

        {/* --- 5. Butterfly effect – grounded AUBI example --- */}
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
                  Vi använder systemtänkande och evidensbaserad design för att identifiera
                  de förändringar som kan transformera samhället – inte genom tvång, utan
                  genom positiva återkopplingsloopar och nätverkseffekter.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Exempel: AUBI</h3>
                  <p className="text-gray-600 mb-2">
                    Vårt förslag om en adaptiv basinkomst svarar först och främst på en
                    växande otrygghet i arbetslivet – automatisering, osäkra anställningar,
                    snabba skiften. Men när grundtryggheten är på plats ser vi en välkommen
                    bieffekt: fler vågar ställa de stora frågorna. Vad vill jag egentligen
                    bidra med? Vad är meningsfullt för mig?
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/forslag#aubi" className="text-blue-600 hover:underline">
                      Läs mer om AUBI →
                    </Link>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Exempel: Lokala matsystem</h3>
                  <p className="text-gray-600 mb-2">
                    Stöd för lokal matproduktion stärker både miljön, ekonomin och
                    samhällsgemenskapen – en konkret illustration av hur små, lokala
                    beslut kan blomstra ut till något mycket större.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <Link href="/forslag#hallbarhet" className="text-blue-600 hover:underline">
                      Utforska lokala matsystem →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. TransformationJourney (existing component) --- */}
        <TransformationJourney />

        {/* --- 7. Core Values – tied back to vision --- */}
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
                  Varje persons rätt och förmåga att forma sitt liv är central. Genom
                  Framtidskommuner och ett adaptivt trygghetsgolv skapar vi verklig
                  frihet att välja sin väg.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">Systemisk rättvisa</h3>
                </div>
                <p className="text-gray-600">
                  För att nå visionen måste vi adressera grundorsakerna till ojämlikhet
                  och orättvisa, inte bara lindra symptomen. Det kräver att vi omformar
                  systemens struktur.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold">Evidensbaserad innovation</h3>
                </div>
                <p className="text-gray-600">
                  Vägen mot vår vision går genom att testa, utvärdera och sprida det
                  som fungerar. Inga storslagna löften – bara en disciplinerad process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. Call to action – collective & personal --- */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Var med och förverkliga visionen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ett samhälle som blomstrar är summan av många människors personliga svar
              på frågan “vad lever jag för?”. Men det är också ett kollektivt val:
              vad ska våra gemensamma institutioner sträva mot? Vi tror att de ska sträva
              mot att ge dig utrymme att leva ditt svar – och att mäta sig mot hur väl
              de lyckas.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/forslag" 
                className="btn-primary inline-flex items-center text-lg"
              >
                Utforska våra förslag <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/bli-medlem" 
                className="btn-secondary inline-flex items-center text-lg"
              >
                Gå med i rörelsen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <br />
            <ShareButtons 
              title="Fjärilspartiets vision för mänsklighetens blomstring"
              description="Ett samhälle där varje person har möjlighet att förverkliga sin fulla potential, där teknologiska framsteg används för att skapa överflöd och välmående för alla."
            />
          </div>
        </section>

        {/* --- 9. Manifest CTA – personal invitation, now anchored --- */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Vad lever du för?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Skapa ditt personliga manifest och bidra till vår gemensamma vision för ett
              meningsfullt samhälle. Ditt svar är en del av helheten.
            </p>
            <Link href="/manifest" className="btn-primary inline-flex items-center">
              Skapa ditt manifest <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

      </MainLayout>
    </>
  );
}
