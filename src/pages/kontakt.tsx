import MainLayout from '../layouts/MainLayout';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Kontakta Fjärilspartiet"
        description="Vill du veta mer om Fjärilspartiet eller bidra till utvecklingen? Här hittar du information om hur du kan kontakta oss och engagera dig i partiets olika projekt och initiativ."
        canonical="/kontakt"
      />
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
              <h2>Kontaktvägar</h2>
              <div className="space-y-3">
                <div>
                  <h3>Officiell partimail</h3>
                  <p>
                    För allmänna frågor och medlemskap:
                  </p>
                  <p>
                    <strong>E-post:</strong>{' '}
                    <a href="mailto:fjarilspartiet@gmail.com">
                      fjarilspartiet@gmail.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3>Grundare och koordinator</h3>
                  <p>
                    Kontakta Björn Kenneth Holmström:
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
            </div>

            <div className="space-y-8">
              <h2>Engagera dig</h2>
              <div className="grid gap-6">
                <div className="card">
                  <h3>Community</h3>
                  <p>
                    Gå med i vår Discord-community för att delta i diskussioner, 
                    samarbeta kring utvecklingsprojekt och engagera dig i partiets utveckling.
                  </p>
                  <a 
                    href="https://discord.gg/GxSxaYANU4"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gå med i Discord →
                  </a>
                </div>
                <div className="card">
                  <h3>Utveckling</h3>
                  <p>
                    Intresserad av att bidra till utvecklingen av vår digitala plattform eller andra tekniska projekt? 
                    Besök våra GitHub-repositories och engagera dig i utvecklingen.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <a 
                      href="https://github.com/fjarilspartiet-se/fjarilspartiet"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Besök Fjärilspartiets Repository →
                    </a>

                    <a 
                      href="https://github.com/fjarilspartiet-se/DPOP"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Besök DPOPs Repository →
                    </a>

                    <a 
                      href="https://github.com/BjornKennethHolmstrom/DidiS"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Besök DidiS Repository →
                    </a>

                    <a 
                      href="https://github.com/fjarilspartiet-se/communitree"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Besök CommuniTrees Repository →
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Dokumentation</h3>
                  <p>
                    Ta del av vår fullständiga dokumentation och bidra till utvecklingen av våra policies och ramverk.
                  </p>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/fjarilspartiet-se/fjarilspartiet/tree/main/public/docs/svenska"
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repository
                      </a>
                      <a 
                        href="https://tinyurl.com/fjarilspartiets-dokument"
                        className="btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Drive
                      </a>
                    </div>
                </div>
              </div>
            </div>

            <div className="card mt-12">
              <h2>Vanliga frågor</h2>
              <p>
                Innan du kontaktar oss, kolla gärna om din fråga besvaras i vår dokumentation:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a 
                    href="https://github.com/fjarilspartiet-se/fjarilspartiet/blob/main/public/docs/svenska/guide-för-nya-medlemmar.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    Guide för nya medlemmar
                  </a>
                </li>
                <li>Partiets grunddokument</li>
                <li>Vision och målsättningar</li>
                <li>Information om DPOP och tekniska projekt</li>
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
