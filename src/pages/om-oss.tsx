// om-oss.tsx
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container">
        <h1 className="section-header">
          Om Fjärilspartiet
        </h1>
        
        <div className="card">
          <p className="text-xl">
            Vi är ett parti i utveckling, just nu i äggstadiet. Precis som fjärilen utvecklas från ägg till fullvuxen 
            fjäril, genomgår vi en genomtänkt uppbyggnadsfas där vi lägger grunden för ett systemiskt förnyelsearbete.
          </p>
        </div>

        <div className="grid gap-8 mt-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Fjärilens stadier</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Äggstadiet - Där vi är nu</h3>
                <p>Utvecklar ramverk, policys och digitala verktyg som grund för vår verksamhet.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. Larvstadiet</h3>
                <p>Period av aktiv tillväxt och utveckling där vi bygger vår rörelse och organisation.</p>
              </div>
              <div>
                <h3 className="font-semibold">3. Puppstadiet</h3>
                <p>Intensiv transformation där strukturer och processer tar sin slutliga form.</p>
              </div>
              <div>
                <h3 className="font-semibold">4. Fjärilsstadiet</h3>
                <p>Full aktivitet som politisk kraft med implementering av våra visioner och policys.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Vårt nuvarande fokus</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Utveckling av omfattande policyramverk</li>
              <li>Design av innovativa demokratiska strukturer</li>
              <li>Utveckling av DPOP - vår digitala partioperationsplattform</li>
              <li>Planering av pilotprojekt</li>
              <li>Dokumentation och kunskapsuppbyggnad</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Digital transformation</h2>
          <p className="mb-4">
            Vi utvecklar DPOP (Digital Parti Operations-Plattform) - en öppen plattform för 
            demokratiskt deltagande och transparent partiverksamhet.
          </p>
          <Link href="https://github.com/BjornKennethHolmstrom/DPOP" passHref>
            <a className="btn-primary" target="_blank" rel="noopener noreferrer">
              Utforska DPOP på GitHub →
            </a>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
