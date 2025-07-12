import React, { useState } from 'react';
import { MessageCircle, Heart, Lightbulb, Download, Eye, Loader } from 'lucide-react';

interface CuriosityCardProps {
  question: string;
  category?: string;
  className?: string;
}

const CuriosityCard: React.FC<CuriosityCardProps> = ({ 
  question, 
  category = "Fråga att fundera på",
  className = "" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [reflection, setReflection] = useState('');
  // Removed unused isPrivate and setIsPrivate state

  const handleReflectionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReflection(e.target.value);
  };

  // Download reflection as text file instead of storing locally
  const handleDownloadReflection = () => {
    if (reflection.trim()) {
      const blob = new Blob([reflection], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `reflektion-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // State for managing submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Option to share anonymized insights via Formspree
  const handleShareAnonymizedInsight = async () => {
    if (!reflection.trim()) return;
    
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xzzgnweg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'curiosity_reflection',
          question: question,
          reflection: reflection,
          category: category,
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          // Note: No personal identifying information is sent
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Optionally clear the reflection after successful submission
        setReflection('');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting reflection:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              {category}
            </span>
            <Heart className="w-4 h-4 text-pink-500" />
          </div>
          
          <blockquote className="text-lg font-medium text-gray-800 italic leading-relaxed mb-4">
            &quot;{question}&quot;
          </blockquote>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              {isExpanded ? 'Dölj reflektion' : 'Reflektera över detta'}
            </button>
          </div>
          
          {isExpanded && (
            <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
              <div className="border-t border-blue-200 pt-4">
                {/* Privacy Notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">
                      Integritetsinformation
                    </span>
                  </div>
                  <p className="text-xs text-yellow-700 mt-1">
                    Dina reflektioner sparas inte automatiskt. Du kan ladda ner dem som en fil för att spara privat.
                  </p>
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dina tankar:
                </label>
                <textarea
                  value={reflection}
                  onChange={handleReflectionChange}
                  placeholder="Skriv ner dina tankar och reflektioner här... (sparas inte automatiskt)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
                
                {reflection.trim() && (
                  <div className="mt-3 space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={handleDownloadReflection}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Ladda ner som fil
                      </button>
                      
                      <button
                        onClick={handleShareAnonymizedInsight}
                        disabled={isSubmitting}
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                          isSubmitting 
                            ? 'bg-gray-400 text-white cursor-not-allowed' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {isSubmitting ? (
                          <Loader className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Heart className="w-4 h-4 mr-2" />
                        )}
                        {isSubmitting ? 'Skickar...' : 'Dela anonymt (valfritt)'}
                      </button>
                    </div>

                    {/* Submission status messages */}
                    {submissionStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-md p-3">
                        <p className="text-sm text-green-800">
                          ✅ Tack för att du delar dina insikter! Din reflektion hjälper oss förbättra våra förslag.
                        </p>
                      </div>
                    )}

                    {submissionStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <p className="text-sm text-red-800">
                          ❌ Det uppstod ett fel när vi försökte skicka din reflektion. Försök igen senare.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional privacy info */}
                <div className="mt-4 text-xs text-gray-500">
                  <p>
                    💡 <strong>Tips:</strong> Spara dina reflektioner privat genom att ladda ner dem. 
                    Vi respekterar din integritet och sparar aldrig dina personliga tankar.
                  </p>
                  <p className="mt-2">
                    🤝 <strong>Anonymt delande:</strong> När du delar anonymt skickas endast din reflektion och frågan - 
                    ingen personlig information eller IP-adress lagras.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuriosityCard;
