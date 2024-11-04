// vision.tsx
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';

export default function VisionPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] sm:text-5xl mb-8">
            Vår vision för framtiden
          </h1>

          <div className="prose prose-lg">
            <div className="bg-[var(--color-highlight-light)] p-6 rounded-lg mb-12">
              <p className="text-xl text-[var(--color-highlight-dark)] leading-8">
                Vi arbetar för att skapa ett samhälle där systemiskt tänkande, adaptiv styrning 
                och hållbar utveckling samverkar för att bygga en blomstrande framtid för alla.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Adaptiv Universell Basinkomst (AUBI)</h3>
                <p className="mb-4">Ett innovativt ekonomiskt system som:</p>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Anpassar sig efter individuella behov och omständigheter</li>
                  <li>Skapar grundtrygghet för alla medborgare</li>
                  <li>Erkänner olika former av samhällsbidrag</li>
                  <li>Möjliggör personlig utveckling och meningsfullt arbete</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Digital demokrati</h3>
                <p className="mb-4">Nya former för demokratiskt deltagande genom:</p>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Transparenta och decentraliserade beslutsprocesser</li>
                  <li>Verktyg för direkt medborgarinflytande</li>
                  <li>Adaptiva styrningsformer</li>
                  <li>Integration av AI för bättre beslutsunderlag</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Hållbar samhällsutveckling</h3>
                <p className="mb-4">Ett regenerativt samhälle genom:</p>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Lokala och resilient matsystem</li>
                  <li>Cirkulär ekonomi och resurshantering</li>
                  <li>Stärkta lokalsamhällen</li>
                  <li>Biologisk mångfald och ekosystemtjänster</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-[var(--color-highlight-light)] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-highlight-dark)] mb-4">
                Delta i samhällsförnyelsen
              </h3>
              <p className="text-[var(--color-highlight-dark)] mb-4">
                Vill du vara med och bygga framtidens samhälle? Ditt perspektiv och engagemang 
                är viktigt för att skapa positiv systemförändring.
              </p>
              <div className="flex gap-4">
                <Link href="/dokument" className="btn-primary">
                  Utforska våra ramverk →
                </Link>
                <Link href="/bli-medlem" className="btn-secondary">
                  Bli medlem →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
