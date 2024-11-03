import MainLayout from '../layouts/MainLayout';

export default function VisionPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] sm:text-5xl mb-8">
            Vår vision
          </h1>

          <div className="prose prose-lg">
            <div className="bg-[var(--color-highlight-light)] p-6 rounded-lg mb-12">
              <p className="text-xl text-[var(--color-highlight-dark)] leading-8">
                Vi arbetar för en grundlig och genomtänkt samhällsförändring där demokrati, hållbarhet och meningsfullhet står i centrum.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-12 mb-6">
              Våra kärnområden
            </h2>

            <div className="grid gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Adaptiv styrning</h3>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Flexibla och situationsanpassade styrformer</li>
                  <li>Integration av olika styrningsmodeller</li>
                  <li>Anpassningsbar beslutsprocess</li>
                  <li>Evidensbaserad utveckling</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Holistisk välfärd</h3>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Integration av fysisk, mental och existentiell hälsa</li>
                  <li>Social sammanhållning och gemenskap</li>
                  <li>Förebyggande insatser och långsiktig hållbarhet</li>
                  <li>Personcentrerad vård och omsorg</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Ekologisk hållbarhet</h3>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>Systemiskt tänkande kring miljö och klimat</li>
                  <li>Regenerativa lösningar och cirkulär ekonomi</li>
                  <li>Lokala och hållbara matsystem</li>
                  <li>Biologisk mångfald och ekosystemtjänster</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Ekonomisk innovation</h3>
                <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                  <li>AUBI - Adaptiv Universell Basinkomst</li>
                  <li>Nya ekonomiska modeller och strukturer</li>
                  <li>Resursdelning och cirkulär ekonomi</li>
                  <li>Hållbar och rättvis resursfördelning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-12 mb-6">
              Långsiktiga mål
            </h2>
            <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
              <li>Utveckla och implementera hållbara samhällslösningar</li>
              <li>Skapa förutsättningar för meningsfull tillvaro för alla</li>
              <li>Bygga motståndskraftiga och adaptiva samhällsstrukturer</li>
              <li>Främja demokratisk innovation och deltagande</li>
              <li>Stärka lokala gemenskaper och global sammanhållning</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

