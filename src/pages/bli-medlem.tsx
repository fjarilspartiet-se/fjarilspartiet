import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';

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
      const response = await fetch('https://formspree.io/f/mgvebyad', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Could not send form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Ett fel uppstod. Vänligen försök igen eller kontakta oss via email direkt.');
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
                <div className="mb-6 bg-error-light p-4 rounded-md">
                  <p className="text-error-dark">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark">
                    Namn
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark">
                    E-post
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark">
                    Berätta gärna kort om dig själv och varför du vill gå med (valfritt)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                    ${isSubmitting ? 'bg-primary-light cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'} 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka medlemsansökan'}
                </button>
              </form>
            </>
          ) : (
            <div className="bg-success-light p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-success-dark mb-4">
                Tack för din ansökan!
              </h2>
              <p className="text-success mb-4">
                Vi har mottagit din medlemsansökan och kommer att kontakta dig via e-post inom kort. 
                Vi ser fram emot att välkomna dig till Fjärilspartiet och diskutera hur vi tillsammans 
                kan arbeta för positiv samhällsförändring.
              </p>
              <div className="mt-4">
                <p className="text-gray-700 mb-2">
                  Under tiden är du välkommen att gå med i vår Discord-community:
                </p>
                <a 
                  href="https://discord.gg/GxSxaYANU4"
                  className="btn-primary inline-flex items-center"
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
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">
              Utvecklingsprojekt
            </h2>
            <p className="text-secondary mb-4">
              Som medlem är du välkommen att delta i våra utvecklingsprojekt, bland annat:
            </p>
            <ul className="list-disc list-inside text-secondary space-y-2">
              <li>Utveckling av vår digitala plattform (DPOP)</li>
              <li>Policyutveckling och dokumentation</li>
              <li>Lokala initiativ och pilotprojekt</li>
              <li>Kommunikation och utåtriktat arbete</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
