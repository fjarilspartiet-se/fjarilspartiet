import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-[var(--color-background)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              <span className="block">Fjärilspartiet</span>
              <span className="block text-[var(--color-highlight)]">Ett parti för systemisk samhällsförnyelse</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Som en fjäril genomgår en transformation från ägg till fullvuxen fjäril, arbetar vi för en grundlig och genomtänkt samhällsförändring.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/bli-medlem" className="inline-flex items-center px-8 py-3 font-medium text-white bg-[var(--color-primary)] rounded-[var(--border-radius)] shadow hover:bg-[var(--color-accent)] transition-colors">
                Bli medlem
              </Link>
              <Link href="/vision" className="inline-flex items-center px-8 py-3 font-medium text-[var(--color-primary)] bg-white rounded-[var(--border-radius)] shadow border border-[var(--color-primary)] hover:bg-gray-50 transition-colors">
                Läs mer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Initiatives Section */}
      <section className="bg-[var(--color-background)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Våra kärninitiativ</h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">AUBI - Adaptiv Universell Basinkomst</h3>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Ett innovativt ekonomiskt system som ger grundtrygghet för alla och anpassar sig efter individuella behov.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">Holistisk välfärd</h3>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Ett omfattande välfärdssystem som integrerar fysisk, mental och social hälsa.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">Demokratisk förnyelse</h3>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Utveckling av nya demokratiformer genom digitalt medborgardeltagande och hybridstyrningsmodeller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects Section */}
      <section className="bg-[var(--color-background)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Utvecklingsprojekt</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-muted)]">
              Vi utvecklar DPOP (Digital Parti Operations-Plattform) - en öppen plattform för demokratiskt deltagande och transparent partiverksamhet.
            </p>
            <div className="mt-8">
              <a
                href="https://github.com/BjornKennethHolmstrom/DPOP"
                className="inline-flex items-center px-6 py-3 font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-[var(--border-radius)] bg-white hover:bg-gray-50 transition-colors"
              >
                Bidra på GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

