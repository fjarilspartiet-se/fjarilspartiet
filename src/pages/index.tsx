import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Sprout, Network, Shield, GraduationCap, PenTool, MapPin, RefreshCw, Eye, Repeat } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';
import SEO from '../components/SEO';

export default function Home() {
  const loopSteps = [
    { n: '1', title: 'Problemen byggs upp', desc: 'Signalerna finns – men fastnar i stuprör och tystnad.' },
    { n: '2', title: 'Krisen slår till', desc: 'Det som byggts upp blir plötsligt omöjligt att blunda för.' },
    { n: '3', title: 'Vi panikåtgärdar', desc: 'Snabba, dyra beslut fattade under press.' },
    { n: '4', title: 'Och så börjar det om', desc: 'Grundstrukturen är oförändrad. Mönstret upprepas.' },
  ];

  // Cardinal positions (top, right, bottom, left) for the circular desktop layout
  const nodePos = [
    { left: '50%', top: '17%' },
    { left: '83%', top: '50%' },
    { left: '50%', top: '83%' },
    { left: '17%', top: '50%' },
  ];

  return (
    <>
      <SEO 
        title="Fjärilspartiet - Ett parti för systemisk samhällsförnyelse"
        description="Sverige är välskött – ändå överraskas vi gång på gång av kriser. Fjärilspartiet vill bygga ett Sverige som fångar upp problemen i tid, genom att flytta besluten närmare människorna."
        canonical="/"
      />
      <MainLayout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-6">
                Fjärilspartiet
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="block mb-2">Sverige är välskött.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  Ändå ser vi inte vad som är på väg.
                </span>
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Gång på gång byggs problemen upp i tysthet — i vården, i bostäderna, i tryggheten —
                tills de blir kriser. Sedan kommer panikåtgärden. Och så börjar det om.
              </p>

              <p className="mt-6 text-xl font-medium leading-relaxed text-gray-900 max-w-3xl mx-auto">
                Vi vill bygga ett Sverige som fångar upp problemen i tid — genom att flytta
                besluten närmare människorna.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6">
                <a href="#framtidskommun" className="btn-primary text-lg px-8 py-3">
                  Så vill vi göra det
                </a>
                <Link href="/bli-medlem" className="btn-secondary text-lg px-8 py-3">
                  Bli medlem
                </Link>
              </div>
              <div className="mt-4">
                <Link href="/det-har-star-vi-for" className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80">
                  Var står vi i sakfrågorna?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The pattern -> the offer (Framtidskommun) -> the mechanisms */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* The pattern: the Drift Loop in plain words */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
                Varför samma kriser återkommer
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
                Det är sällan brist på kompetens eller resurser. Problemet är att systemet upptäcker
                det som är fel för sent – och hinner aldrig rätta sig självt innan nästa kris.
              </p>
            </div>

            {/* Drift loop: clockwise cycle on desktop, stacked flow on mobile */}
            <div className="mb-20">

              {/* Desktop: circular, clockwise */}
              <div className="hidden md:block relative mx-auto w-full max-w-xl" style={{ aspectRatio: '1 / 1' }}>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                  <defs>
                    <marker id="loopArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                      <path d="M0,1 L9,5 L0,9 z" fill="#c4b5fd" />
                    </marker>
                  </defs>
                  <g fill="none" stroke="#c4b5fd" strokeWidth="0.8" strokeLinecap="round" markerEnd="url(#loopArrow)">
                    <path d="M56.65 18.71 A32 32 0 0 1 81.30 43.35" />
                    <path d="M81.30 56.65 A32 32 0 0 1 56.65 81.30" />
                    <path d="M43.35 81.30 A32 32 0 0 1 18.71 56.65" />
                    <path d="M18.71 43.35 A32 32 0 0 1 43.35 18.71" />
                  </g>
                </svg>

                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white shadow-md border border-gray-100 flex flex-col items-center justify-center text-center px-3">
                  <Repeat className="w-6 h-6 text-[var(--color-primary)] mb-1" />
                  <span className="text-xs font-medium text-gray-500 leading-tight">Mönstret upprepas</span>
                </div>

                {/* Nodes at cardinal points */}
                {loopSteps.map((s, i) => (
                  <div
                    key={i}
                    className="absolute w-40 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center"
                    style={{ left: nodePos[i].left, top: nodePos[i].top }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{s.n}</div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-[var(--color-text-muted)] leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mobile: stacked with loop-back */}
              <div className="md:hidden max-w-sm mx-auto">
                {loopSteps.map((s, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                      <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm flex items-center justify-center">{s.n}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{s.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{s.desc}</p>
                      </div>
                    </div>
                    {i < loopSteps.length - 1 && (
                      <div className="flex justify-center py-1 text-[var(--color-primary)]">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Caption */}
              <div className="flex items-center justify-center gap-2 mt-8 text-[var(--color-text-muted)]">
                <Repeat className="w-4 h-4" />
                <span className="text-sm italic">Samma loop, om och om igen – tills vi ändrar själva strukturen.</span>
              </div>
            </div>

            {/* The shift: what kind of party we are */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
                Vi lovar inte färdiga svar – vi bygger förmågan att hitta dem
              </h2>
              <p className="text-lg text-[var(--color-text-muted)]">
                De flesta partier säljer färdiga lösningar. Men en lösning som passar idag blir ofta
                morgondagens problem. Vi vill något annat: skapa förutsättningarna för att rätt lösningar
                ska kunna växa fram, testas och rättas till – där problemen faktiskt finns.
              </p>
            </div>

            {/* Framtidskommun: subsidiarity made concrete and votable (the keystone) */}
            <div id="framtidskommun" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
              <div className="rounded-2xl border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Framtidskommuner</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Vårt främsta förslag: ge kommuner makten, pengarna och friheten att lösa problemen
                      där de uppstår. Vi gör inte anspråk på att veta svaret för just din kommun – vi vill
                      ge den kraften att hitta, testa och rätta till det.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">→</span>
                        <span className="text-gray-700">Beslut och resurser flyttas närmare människorna</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">→</span>
                        <span className="text-gray-700">Frihet att testa nya lösningar i liten skala – och skrota det som inte fungerar</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 mt-1">→</span>
                        <span className="text-gray-700">Det som visar sig fungera sprids vidare till fler kommuner</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* The mechanisms: each principle as a concrete, nameable tool */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
                Ett samhälle som ser och rättar sig självt
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
                Tre konkreta sätt att bryta mönstret – så att problem upptäcks i tid och reformer
                faktiskt löser det de ska.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card">
                <RefreshCw className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reformer med inbyggt omtag</h3>
                <p className="text-[var(--color-text-muted)]">
                  Större reformer testas i liten skala först och får en bortre tidsgräns. En oberoende
                  granskning mäter om problemet faktiskt löstes – och tvingar fram ett omtag om det inte gjorde det.
                </p>
              </div>
              <div className="card">
                <Network className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Myndigheter som ser helheten</h3>
                <p className="text-[var(--color-text-muted)]">
                  Idag ser varje myndighet bara sin egen bit. Vi vill att de delar information på ett
                  integritetssäkert sätt, så att problem upptäcks innan de växer – utan ett övervakningssamhälle.
                </p>
              </div>
              <div className="card">
                <Eye className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidiga varningar</h3>
                <p className="text-[var(--color-text-muted)]">
                  Medborgarråd och oberoende röster som får lyfta obekväma signaler tidigt – så att vi
                  märker problemen medan de fortfarande är små och billiga att åtgärda.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Core Solutions Section */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Vad det skulle göra möjligt
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
                Det här är ingen färdig facit. Det är förslag vi tror på – sådant som Framtidskommuner
                och reformer med inbyggt omtag skulle låta oss pröva på riktigt: behålla det som
                fungerar, och skrota resten.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="card hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-[var(--color-primary)] mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">Trygghet när jobben förändras</h3>
                </div>
                <span className="mb-3 inline-block self-start text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-1">
                  Förslag att pröva
                </span>
                <p className="text-[var(--color-text-muted)] mb-4 flex-grow">
                  När automatisering och osäkra anställningar gör framtiden oviss behövs ett golv att stå på. Vårt förslag AUBI – en adaptiv basinkomst – gör det möjligt att våga byta bana, vidareutbilda sig eller starta eget utan att riskera allt.
                </p>
                <Link href="/forslag?tab=aubi" className="mt-auto text-[var(--color-primary)] text-sm font-medium inline-flex items-center hover:underline">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="card hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Sprout className="w-6 h-6 text-green-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">Ett samhälle som klarar kriser</h3>
                </div>
                <span className="mb-3 inline-block self-start text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-1">
                  Förslag att pröva
                </span>
                <p className="text-[var(--color-text-muted)] mb-4 flex-grow">
                  När transporter, el eller IT slås ut måste lokalsamhället klara sig en tid. Vi vill stärka lokal matförsörjning, energi och beredskap så att kriser inte slår lika hårt.
                </p>
                <Link href="/forslag?tab=hallbarhet" className="mt-auto text-[var(--color-primary)] text-sm font-medium inline-flex items-center hover:underline">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="card hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Network className="w-6 h-6 text-purple-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">Mer inflytande mellan valen</h3>
                </div>
                <span className="mb-3 inline-block self-start text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-1">
                  Förslag att pröva
                </span>
                <p className="text-[var(--color-text-muted)] mb-4 flex-grow">
                  Demokrati borde vara mer än en röst vart fjärde år. Vi vill utveckla trygga och transparenta sätt för fler att påverka besluten som rör deras vardag.
                </p>
                <Link href="/forslag?tab=demokrati" className="mt-auto text-[var(--color-primary)] text-sm font-medium inline-flex items-center hover:underline">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="card hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-6 h-6 text-yellow-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">En skola som ser varje elev</h3>
                </div>
                <span className="mb-3 inline-block self-start text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-1">
                  Förslag att pröva
                </span>
                <p className="text-[var(--color-text-muted)] mb-4 flex-grow">
                  Ett lärande som ger trygghet och en stark grund för alla – samtidigt som det låter varje elevs nyfikenhet och talang få växa.
                </p>
                <Link href="/forslag?tab=utbildning" className="mt-auto text-[var(--color-primary)] text-sm font-medium inline-flex items-center hover:underline">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project Counter Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">4</div>
                <div className="text-sm text-[var(--color-text-muted)]">Aktiva utvecklingsprojekt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">100+</div>
                <div className="text-sm text-[var(--color-text-muted)]">Policydokument</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">3</div>
                <div className="text-sm text-[var(--color-text-muted)]">Pilotprojekt i planering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">∞</div>
                <div className="text-sm text-[var(--color-text-muted)]">Möjligheter att bidra</div>
              </div>
            </div>
          </div>
        </section>

        {/* Open ideas + manifest (independent, not party products) */}
        <section className="bg-[var(--color-background)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">Öppna idéer och verktyg</h2>
              <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                Det här är inte partiprodukter. Det är fristående, öppna projekt som vem som helst
                får använda och bygga vidare på – plus ett verktyg för att formulera din egen vision.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">

              {/* Öppna projekt */}
              <div className="card flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Network className="w-6 h-6 text-[var(--color-primary)] mr-2" />
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">Öppna projekt</h3>
                </div>
                <p className="text-[var(--color-text-muted)] mb-4 flex-grow">
                  Några av oss har skissat på öppna verktyg i partiets anda – för demokratiskt
                  deltagande och utbildning. De lever och utvecklas fristående, och partiet varken
                  äger eller driver dem.
                </p>
                <div className="mt-auto flex flex-col gap-2 text-sm">
                  <a href="https://github.com/BjornKennethHolmstrom/DPOP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline">
                    DPOP – öppen plattform för digitalt deltagande <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/BjornKennethHolmstrom/DiDiS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline">
                    DiDiS – digital direktdemokrati <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/BjornKennethHolmstrom/MU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline">
                    MU – öppet utbildningsupplägg <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Ditt manifest */}
              <div className="card hover:shadow-lg transition-all group border-2 border-purple-100 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <PenTool className="w-6 h-6 text-purple-600 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900">Ditt manifest</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  Politik börjar med din vision. Formulera hur du vill att framtiden ska se ut – och hitta likasinnade.
                </p>
                <div className="mt-auto">
                  <Link href="/manifest" className="btn-primary inline-flex items-center justify-center w-full">
                    Skapa manifest <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[var(--color-highlight-light)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Var med och forma framtiden
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8">
              Vi är i en spännande utvecklingsfas där dina idéer och ditt engagemang kan göra stor skillnad. 
              Tillsammans kan vi skapa ett samhälle som fungerar bättre för alla.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/bli-medlem" className="btn-primary">
                Gå med i Fjärilspartiet
              </Link>
              <Link href="/dokument" className="btn-secondary">
                Utforska våra dokument
              </Link>
            </div>

            <br></br>
            <ShareButtons 
              title="Fjärilspartiet - Ett parti för systemisk samhällsförnyelse"
              description="Utforska våra lösningar för ett samhälle där alla kan blomstra. Vi kombinerar systemtänkande med konkret handling för att skapa positiv förändring."
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
