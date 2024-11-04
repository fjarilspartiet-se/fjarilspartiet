import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Sprout, Network, Shield } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-[var(--color-background)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight mb-4">
              <span className="block mb-2">Fjärilspartiet</span>
              <span className="block text-[var(--color-highlight)]">
                Ett parti för hållbar samhällsförnyelse
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Vi utvecklar konkreta lösningar för ett samhälle där alla kan blomstra. Genom att kombinera 
              beprövad kunskap med nytänkande skapar vi system som fungerar för både människor och miljö.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
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
              Våra förslag bygger på forskning, praktisk erfarenhet och systemtänkande
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-primary)] mr-2" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">AUBI - Ekonomisk trygghet för alla</h3>
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Ett smart och flexibelt trygghetssystem som:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Ersätter krångliga bidragssystem</li>
                <li>Anpassar sig efter individuella behov</li>
                <li>Uppmuntrar samhällsengagemang</li>
                <li>Finansieras genom automatisering och resurseffektivitet</li>
              </ul>
              <Link href="/losningar#aubi" className="inline-flex items-center text-[var(--color-primary)]">
                Läs om hur det fungerar <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Sprout className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Hållbar samhällsomställning</h3>
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Praktiska steg mot ett klimatneutralt samhälle:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Lokala matsystem och stadsodling</li>
                <li>Förnybar energi och smarta elnät</li>
                <li>Cirkulär ekonomi och delningslösningar</li>
                <li>Naturbaserade klimatlösningar</li>
              </ul>
              <Link href="/losningar#hallbarhet" className="inline-flex items-center text-[var(--color-primary)]">
                Se våra miljölösningar <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Network className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">Modern demokrati</h3>
              </div>
              <p className="text-[var(--color-text-muted)] mb-4">
                Ett uppdaterat demokratiskt system där:
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2 mb-4">
                <li>Digitala verktyg ökar deltagandet</li>
                <li>Beslut fattas närmare medborgarna</li>
                <li>Experter och invånare samarbetar</li>
                <li>AI stödjer informerade beslut</li>
              </ul>
              <Link href="/losningar#demokrati" className="inline-flex items-center text-[var(--color-primary)]">
                Upptäck nya demokratiformer <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
                Vi testar praktiska lösningar i verkliga miljöer:
              </p>
              <ul className="list-disc list-inside text-[var--color-text-muted] mb-6">
                <li>Gemensamma matskogar</li>
                <li>Lokala demokratiexperiment</li>
                <li>Delningsekonomiska initiativ</li>
                <li>Småskalig energiproduktion</li>
              </ul>
              <Link href="/vision#projekt" className="btn-secondary inline-flex items-center">
                Hitta projekt nära dig <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
