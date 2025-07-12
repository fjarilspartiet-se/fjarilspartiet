import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

// Configuration: Set to true to enable Supabase, false to use only Formspree
const USE_SUPABASE = false;

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (USE_SUPABASE && supabase) {
        // Supabase approach (when enabled)
        console.log('Using Supabase for member registration');
        
        const { error: supabaseError } = await supabase
          .from('Members')
          .insert([{
            name: formData.name,
            email: formData.email,
            message: formData.message || ''
          }]);

        if (supabaseError) {
          if (supabaseError.code === '23505') {
            throw new Error('En medlem med denna e-postadress finns redan registrerad.');
          }
          throw new Error('Ett fel uppstod vid registrering. Vänligen försök igen.');
        }

        // Call Edge Function after successful insert
        try {
          const functionResponse = await fetch(
            'https://besgmmbnpqcoirbhemhl.supabase.co/functions/v1/welcome-new-member',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
              },
              body: JSON.stringify({
                type: 'INSERT',
                table: 'Members',
                record: {
                  name: formData.name,
                  email: formData.email,
                  message: formData.message || ''
                }
              })
            }
          );

          if (!functionResponse.ok) {
            console.error('Edge function error:', await functionResponse.text());
          }
        } catch (functionError) {
          console.error('Edge function failed, but member was registered:', functionError);
        }

      } else {
        // Formspree approach (default)
        console.log('Using Formspree for member registration');
        
        const response = await fetch('https://formspree.io/f/mzzrrvlp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message || '',
            formType: 'membership',
            timestamp: new Date().toISOString(),
            source: 'website-membership-form'
          })
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Formspree submission error:', errorText);
          throw new Error(`Ett fel uppstod vid registrering (${response.status}). Vänligen försök igen eller kontakta oss om problemet kvarstår.`);
        }
      }

      setIsSubmitted(true);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ett fel uppstod. Vänligen försök igen.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Bli medlem i Fjärilspartiet"
        description="Var med och forma framtidens samhälle. Som medlem i Fjärilspartiet kan du bidra till utvecklingen av systemiska lösningar för ett mer rättvist och blomstrande samhälle. Medlemskap är kostnadsfritt."
        canonical="/bli-medlem"
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-primary-dark sm:text-5xl mb-8">
              Bli medlem
            </h1>

            {!isSubmitted ? (
              <>
                <div className="text-lg text-secondary mb-8">
                  <p>
                    Medlemskapet är gratis och öppet för alla som delar våra visioner. Vi är i ett tidigt utvecklingsskede 
                    där varje ny medlem har möjlighet att påverka partiets utveckling och bidra med sina unika perspektiv.
                  </p>
                  <p>
                    Efter din ansökan väljer du själv hur du engagerar dig. 
                    Vi utvecklar för närvarande en digital plattform för medlemsengagemang som kommer att lanseras i framtiden. Innan dess har vi en Discord server du kan gå med i.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-md">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <form 
                  name="medlemskap" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ditt fullständiga namn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="din.epost@exempel.se"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Berätta gärna kort om dig själv och varför du vill gå med (valfritt)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Vad engagerar dig i Fjärilspartiets vision? Har du specifika områden du vill bidra inom?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      }`}
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka medlemsansökan'}
                  </button>
                </form>

                {/* Debug info in development */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      <strong>Utvecklingsläge:</strong> Använder {USE_SUPABASE ? 'Supabase' : 'Formspree'} för medlemsregistrering
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  Tack för din ansökan!
                </h2>
                <p className="text-green-700 mb-4">
                  Vi har mottagit din medlemsansökan och kommer att kontakta dig via e-post inom kort. 
                  Vi ser fram emot att välkomna dig till Fjärilspartiet och diskutera hur vi tillsammans 
                  kan arbeta för positiv samhällsförändring.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2">
                      Under tiden är du välkommen att gå med i vår Discord-community:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="https://discord.gg/GxSxaYANU4"
                        className="btn-primary inline-flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gå med i Discord-communityn →
                      </a>
                      <Link 
                        href="/dokument"
                        className="btn-secondary inline-flex items-center justify-center"
                      >
                        Utforska våra dokument →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-green-200">
                  <p className="text-gray-600 mb-4">
                    Hjälp oss växa genom att dela Fjärilspartiet med andra som också vill bidra till positiv samhällsförändring:
                  </p>
                  <ShareButtons 
                    title="Gå med i Fjärilspartiet för systemisk samhällsförnyelse"
                    description="Ett parti som utvecklar konkreta lösningar för ett samhälle där alla kan blomstra. Bli medlem och var med och forma framtiden!"
                  />
                </div>
              </div>
            )}

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Utvecklingsprojekt
              </h2>
              <p className="text-gray-600 mb-4">
                Som medlem är du välkommen att delta i våra utvecklingsprojekt, bland annat:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Utveckling av vår digitala plattform (DPOP)</li>
                <li>Policyutveckling och dokumentation</li>
                <li>Lokala initiativ och pilotprojekt</li>
                <li>Kommunikation och utåtriktat arbete</li>
              </ul>
            </div>
            
            <div className="card mt-8">
              <h2 className="text-xl font-semibold mb-4">Definiera din vision</h2>
              <p className="mb-4">
                Vill du artikulera din personliga vision för ett meningsfullt samhälle? Skapa ditt 
                personliga manifest för att utforska och dela vad du lever för.
              </p>
              <Link href="/manifest" className="btn-secondary">
                Skapa ditt manifest →
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
