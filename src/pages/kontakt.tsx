import MainLayout from '../layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container">
        <h1 className="section-header">
          Kontakta oss
        </h1>

        <div className="prose prose-lg">
          <p>
            Vi välkomnar dialog och engagemang i denna viktiga utvecklingsfas av Fjärilspartiet. 
            Hör gärna av dig med frågor, idéer eller om du vill bidra till utvecklingen av partiet.
          </p>

          <div className="card">
            <h2>Primär kontakt</h2>
            <div className="space-y-3">
              <p>
                Kontakta "fjärilsägget" och grundaren Björn via:
              </p>
              <p>
                <strong>E-post:</strong>{' '}
                <a href="mailto:bjorn.kenneth.holmstrom@gmail.com">
                  bjorn.kenneth.holmstrom@gmail.com
                </a>
              </p>
              <p>
                <strong>Hemsida:</strong>{' '}
                <a 
                  href="https://bjornkennethholmstrom.wordpress.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bjornkennethholmstrom.wordpress.com/contact
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2>Engagera dig</h2>
            <div className="grid gap-6">
              <div className="card">
                <h3>Utveckling</h3>
                <p>
                  Intresserad av att bidra till utvecklingen av vår digitala plattform eller andra tekniska projekt? 
                  Besök vårt GitHub-repository och engagera dig i utvecklingen.
                </p>
                <a 
                  href="https://github.com/BjornKennethHolmstrom/fjarilspartiet"
                  className="btn-primary"
                >
                  Besök GitHub Repository →
                </a>
              </div>

              <div className="card">
                <h3>Dokumentation</h3>
                <p>
                  Ta del av vår fullständiga dokumentation och bidra till utvecklingen av våra policies och ramverk.
                </p>
                <a 
                  href="https://tinyurl.com/fjarilspartiets-dokument"
                  className="btn-secondary"
                >
                  Utforska dokumentationen →
                </a>
              </div>
            </div>
          </div>

          <div className="card mt-12">
            <h2>Vanliga frågor</h2>
            <p>
              Innan du kontaktar oss, kolla gärna om din fråga besvaras i vår dokumentation:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Guide för nya medlemmar</li>
              <li>Partiets grunddokument</li>
              <li>Vision och målsättningar</li>
              <li>Information om DPOP och tekniska projekt</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
