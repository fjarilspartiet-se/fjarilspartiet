import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Sprout, Network, Shield, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
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

        <div className="relative max-w-7xl mx-auto px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-medium text-blue-800">
                Äggstadiet: Vi utvecklar grunden för framtidens samhälle
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="block mb-2">Fjärilspartiet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Ett parti för hållbar samhällsförnyelse
              </span>
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Vi utvecklar konkreta lösningar för ett samhälle där alla kan blomstra. 
              Genom systemtänkande, evidensbaserad metodik och omsorgsfull utveckling skapar vi strukturer som 
              fungerar för både människor och miljö.
            </p>

            <div className="mt-10 flex justify-center gap-x-6">
              <Link href="/bli-medlem" className="btn-primary text-lg px-8 py-3">
                Bli medlem
              </Link>
              <Link href="/vision" className="btn-secondary text-lg px-8 py-3">
                Utforska våra lösningar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Konkreta lösningar för verkliga utmaningar
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Våra förslag bygger på forskning, praktisk erfarenhet och systemtänkande. 
              Varje lösning är designad för att skapa positiva kedjereaktioner i samhället.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* AUBI Card */}
            <div className="card hover:shadow-lg transition-all group">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-primary)] mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">AUBI</h3>
              </div>
              <div className="mb-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-1 inline-block">
                Under aktiv utveckling
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Ett intelligent välfärdssystem som skapar möjligheter för alla:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Garanterar ekonomisk grundtrygghet för alla</li>
                <li>Frigör tid för personlig utveckling och företagande</li>
                <li>Stärker lokala gemenskaper och rättvis fördelning</li>
                <li>Möjliggör meningsfullt bidragande till samhället</li>
              </ul>
              <div className="mt-auto">
                <Link href="/losningar?tab=aubi" className="btn-primary inline-flex items-center">
                  Upptäck hur det fungerar <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Hållbarhet Card */}
            <div className="card hover:shadow-lg transition-all group">
              <div className="flex items-center mb-4">
                <Sprout className="w-6 h-6 text-green-600 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Hållbar omställning</h3>
              </div>
              <div className="mb-2 text-xs font-medium text-green-600 bg-green-50 rounded-full px-2 py-1 inline-block">
                Pilotprojekt behöver startas
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Praktiska lösningar för ett robust och blomstrande samhälle:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Säkrar lokal matförsörjning och självständighet</li>
                <li>Skapar nya jobb och innovationsmöjligheter</li>
                <li>Bygger starka och rättvisa lokalsamhällen</li>
                <li>Återställer naturens balans genom systemlösningar</li>
              </ul>
              <div className="mt-auto">
                <Link href="/losningar?tab=hallbarhet" className="btn-primary inline-flex items-center">
                  Se våra miljölösningar <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Demokrati Card */}
            <div className="card hover:shadow-lg transition-all group">
              <div className="flex items-center mb-4">
                <Network className="w-6 h-6 text-purple-600 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Modern demokrati</h3>
              </div>
              <div className="mb-2 text-xs font-medium text-purple-600 bg-purple-50 rounded-full px-2 py-1 inline-block">
                Digital plattform i utveckling
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Ett demokratiskt system som ger verklig makt och inflytande:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Skyddar dina rättigheter och möjlighet att påverka</li>
                <li>Belönar goda idéer och effektiva lösningar</li>
                <li>Skapar inkluderande dialog och samförstånd</li>
                <li>Möjliggör samarbete för komplexa utmaningar</li>
              </ul>
              <div className="mt-auto">
                <Link href="/losningar?tab=demokrati" className="btn-primary inline-flex items-center">
                  Upptäck nya demokratiformer <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Education Card - NEW */}
            <div className="card hover:shadow-lg transition-all group">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-yellow-600 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Framtidens lärande</h3>
              </div>
              <div className="mb-2 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-full px-2 py-1 inline-block">
                Under utveckling
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Ett utbildningssystem som möter varje persons behov:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Skapar trygghet och stark grund för alla</li>
                <li>Uppmuntrar personlig drivkraft och talang</li>
                <li>Främjar samarbete och kulturell förståelse</li>
                <li>Utvecklar förmåga att lösa framtidens utmaningar</li>
              </ul>
              <div className="mt-auto">
                <Link href="/losningar?tab=utbildning" className="btn-primary inline-flex items-center">
                  Utforska utbildningsvisionen <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
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

      {/* Current Projects Section */}
      <section className="bg-[var(--color-background)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Aktuella utvecklingsprojekt</h2>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Vi utvecklar öppen källkod och praktiska lösningar som alla kan använda och förbättra
            </p>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">DPOP - Digital demokratiplattform</h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                En öppen plattform för demokratiskt deltagande med:
              </p>
              <ul className="list-disc list-inside text-[var--color-text-muted] mb-6">
                <li>Säker digital röstning</li>
                <li>Transparenta beslutsprocesser</li>
                <li>Verktyg för medborgardialoger</li>
                <li>Integration med kommunala system</li>
              </ul>
              <a href="https://github.com/BjornKennethHolmstrom/DPOP" 
                 className="btn-primary inline-flex items-center">
                Bidra till utvecklingen <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Lokala pilotprojekt</h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                Vi vill testa praktiska lösningar i verkliga miljöer:
              </p>
              <ul className="list-disc list-inside text-[var--color-text-muted] mb-6">
                <li>Gemensamma matskogar</li>
                <li>Lokala demokratiexperiment</li>
                <li>Delningsekonomiska initiativ</li>
                <li>Småskalig energiproduktion</li>
              </ul>
              <div className="mt-auto">
                <Link href="/losningar?tab=projekt" className="btn-primary inline-flex items-center">
                  Se våra projekt <ArrowRight className="w-4 h-4 ml-2" />
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
        </div>
      </section>
    </MainLayout>
  );
}
