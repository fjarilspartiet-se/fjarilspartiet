import MainLayout from '../layouts/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container">
        <h1 className="section-header">
          Om Fjärilspartiet
        </h1>
        
        <div className="card">
          <p className="text-xl">
            Som en fjäril genomgår en transformation från ägg till fullvuxen fjäril, arbetar vi för en grundlig och genomtänkt samhällsförändring. I äggstadiet utvecklar vi noggrant våra ramverk och strukturer, medvetna om att små, välplanerade förändringar kan leda till omfattande positiva systemeffekter – den så kallade fjärilseffekten.
          </p>
        </div>

        <h2 className="section-header">
          Vår approach
        </h2>
        <div className="grid gap-6">
          <div className="card">
            <h3>Systemtänkande</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Förståelse för komplexa samband</li>
              <li>Medvetenhet om fjärilseffekter</li>
              <li>Långsiktigt perspektiv</li>
              <li>Evidensbaserade metoder</li>
            </ul>
          </div>

          <div className="card">
            <h3>Samarbete och brobyggande</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Partnerskap med andra aktörer</li>
              <li>Interkulturell dialog</li>
              <li>Generationsöverskridande samverkan</li>
              <li>Internationellt samarbete</li>
            </ul>
          </div>
        </div>

        <h2 className="section-header">
          Var vi är nu
        </h2>
        <div className="card">
          <p>I äggstadiet fokuserar vi på:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Utveckling av omfattande policyramverk</li>
            <li>Byggande av demokratiska strukturer</li>
            <li>Implementering av digital infrastruktur (DPOP)</li>
            <li>Design av pilotprojekt</li>
            <li>Medlemsrekrytering och engagemang</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
