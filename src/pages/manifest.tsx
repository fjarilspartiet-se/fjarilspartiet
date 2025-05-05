import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import ShareButtons from '../components/ShareButtons';
import SEO from '../components/SEO';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ManifestPage() {
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState({
    value1: '',
    value1Desc: '',
    value2: '',
    value2Desc: '',
    value3: '',
    value3Desc: '',
    meaning: '',
    change1: '',
    change2: '',
    change3: '',
    promise1: '',
    promise2: '',
    creative: '',
    sharePublic: false,
    shareName: '',
    contactMe: false,
    contactEmail: '',
    contactRegion: ''
  });
  const [copied, setCopied] = useState(false);
  // Removed the unused previewActive state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [permalink, setPermalink] = useState('');

  // Add loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Styles for larger input fields
  const inputStyles = "w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const textareaStyles = "w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]";

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Toggle visibility based on checkbox states. Removed unused variable: , targetName: string
  const toggleVisibility = (checkboxName: string) => {

    return formData[checkboxName as keyof typeof formData] 
      ? 'block' 
      : 'hidden';
  };

  // Save draft to localStorage
  const saveDraft = () => {
    localStorage.setItem('manifestDraft', JSON.stringify(formData));
    alert('Ditt utkast har sparats lokalt i din webbläsare. Det kommer att finnas kvar tills du raderar det eller skickar in manifestet.');
  };

  // Load draft from localStorage
  const loadDraft = () => {
    const savedDraft = localStorage.getItem('manifestDraft');
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
      alert('Ett sparat utkast har laddats. Du kan fortsätta redigera eller skicka in det.');
    }
  };

  // Switch between tabs
  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  // Generate preview content
  const generatePreview = () => {
    let markdown = '';
    
    // Section 1: Values
    if (formData.value1) {
      markdown += `### Mina kärnvärden\n\n`;
      
      if (formData.value1) {
        markdown += `**${formData.value1}**: ${formData.value1Desc}\n\n`;
      }
      
      if (formData.value2) {
        markdown += `**${formData.value2}**: ${formData.value2Desc}\n\n`;
      }
      
      if (formData.value3) {
        markdown += `**${formData.value3}**: ${formData.value3Desc}\n\n`;
      }
    }
    
    // Section 2: Meaning
    if (formData.meaning) {
      markdown += `### Min definition av en meningsfull tillvaro\n\n${formData.meaning}\n\n`;
    }
    
    // Section 3: Society's Role
    if (formData.change1 || formData.change2 || formData.change3) {
      markdown += `### Samhällets roll i min meningsskapelse\n\n`;
      
      if (formData.change1) {
        markdown += `- ${formData.change1}\n`;
      }
      
      if (formData.change2) {
        markdown += `- ${formData.change2}\n`;
      }
      
      if (formData.change3) {
        markdown += `- ${formData.change3}\n`;
      }
      
      markdown += `\n`;
    }
    
    // Section 4: Promises
    if (formData.promise1 || formData.promise2) {
      markdown += `### Mitt löfte till framtiden\n\n`;
      
      if (formData.promise1) {
        markdown += `- ${formData.promise1}\n`;
      }
      
      if (formData.promise2) {
        markdown += `- ${formData.promise2}\n`;
      }
      
      markdown += `\n`;
    }
    
    // Section 5: Creative
    if (formData.creative) {
      markdown += `### Mitt drömsamhälle\n\n${formData.creative}\n\n`;
    }
    
    return markdown;
  };

  // Simple markdown to HTML converter for preview
  const markdownToHtml = (markdown: string) => {
    // This is a very basic implementation
    const html = markdown
      .replace(/### (.*)/g, '<h3 class="text-xl font-semibold mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/- (.*)/g, '<li class="ml-5 mb-1">• $1</li>')
      .replace(/\n/g, '<br />');
      
    return `<p class="mb-4">${html}</p>`;
  };

  // Basic form validation
  const validateForm = () => {
    // At minimum, require a meaning statement
    if (!formData.meaning.trim()) {
      alert('Vänligen beskriv din definition av en meningsfull tillvaro innan du skickar in.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const submissionTime = new Date().toISOString();

      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/mzzrrvlp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          manifestPermalink: permalink,
          formType: 'personal-manifesto',
          timestamp: submissionTime,
          manifestContent: generatePreview() + `\n\n_Inlämnat: ${new Date(submissionTime).toLocaleDateString('sv-SE')}_`
        })
      });
      
      if (response.ok) {
        // Clear localStorage after successful submission
        localStorage.removeItem('manifestDraft');
        
        // Show success message
        setFormSubmitted(true);
      } else {
          const errorText = await response.text();
          console.error('Submission error:', errorText);
          alert(`Ett fel uppstod (${response.status}). Vänligen försök igen eller kontakta oss om problemet kvarstår.`);
          return;
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Ett fel uppstod vid anslutningen. Vänligen kontrollera din internetanslutning och försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Copy permalink to clipboard
  const copyPermalink = () => {
    const permalink = document.getElementById('permalink') as HTMLInputElement;
    if (permalink) {
      permalink.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Generate a random permalink for sharing
  const generatePermalink = () => {
    return permalink || `https://fjarilspartiet.se/manifest/${Math.random().toString(36).substring(2, 10)}`;
  };

  // Load draft on component mount
  useEffect(() => {
    // Load draft and generate permalink once
    loadDraft();
    setPermalink(generatePermalink());
  }, []); // Changed from useState to useEffect with empty dependency array

  return (
    <>
      <SEO 
        title="Skapa ditt personliga manifest"
        description="Artikulera din vision för ett meningsfullt samhälle. Skapa, dela och bidra med ditt personliga manifest för en systemisk samhällsförnyelse."
        canonical="/manifest"
      />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!formSubmitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Personligt Manifest</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Artikulera din vision för ett meningsfullt samhälle. Skapa, dela och bidra med ditt 
                  personliga manifest för samhällsförnyelse.
                </p>
              </div>

              <div className="flex justify-center space-x-8 mb-8">
                <button 
                  onClick={() => switchTab('create')}
                  className={`pb-2 ${activeTab === 'create' ? 'border-b-2 border-gray-900 text-white' : 'text-gray-500'}`}
                >
                  Skapa Manifest
                </button>
                <button 
                  onClick={() => switchTab('preview')}
                  className={`pb-2 ${activeTab === 'preview' ? 'border-b-2 border-gray-900 text-white' : 'text-white'}`}
                >
                  Förhandsgranska & Dela
                </button>
                <button 
                  onClick={() => switchTab('about')}
                  className={`pb-2 ${activeTab === 'about' ? 'border-b-2 border-gray-900 text-white' : 'text-white'}`}
                >
                  Om Manifest
                </button>
              </div>

              {/* Create Form */}
              <div className={activeTab === 'create' ? 'block' : 'hidden'}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">1. Mitt Värdegrund</h2>
                    <p className="text-gray-600 mb-4"><em>Kärnvärden som styr mitt liv (fyll i 3-5 värden som definierar din väg)</em></p>
                    
                    <div className="mb-6">
                      <label htmlFor="value1" className="block text-gray-700 mb-2 text-lg">Värde 1</label>
                      <input 
                        type="text" 
                        id="value1" 
                        name="value1" 
                        value={formData.value1}
                        onChange={handleChange}
                        placeholder="t.ex. Autonomi" 
                        className={`${inputStyles} mb-3`}
                      />
                      <textarea 
                        id="value1Desc" 
                        name="value1Desc" 
                        value={formData.value1Desc}
                        onChange={handleChange}
                        rows={3} 
                        placeholder="Beskriv varför detta är viktigt för dig"
                        className={textareaStyles}
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="value2" className="block text-gray-700 mb-2 text-lg">Värde 2</label>
                      <input 
                        type="text" 
                        id="value2" 
                        name="value2" 
                        value={formData.value2}
                        onChange={handleChange}
                        placeholder="t.ex. Regenerering" 
                        className={`${inputStyles} mb-3`}
                      />
                      <textarea 
                        id="value2Desc" 
                        name="value2Desc" 
                        value={formData.value2Desc}
                        onChange={handleChange}
                        rows={3} 
                        placeholder="Beskriv varför detta är viktigt för dig"
                        className={textareaStyles}
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="value3" className="block text-gray-700 mb-2 text-lg">Värde 3</label>
                      <input 
                        type="text" 
                        id="value3" 
                        name="value3" 
                        value={formData.value3}
                        onChange={handleChange}
                        placeholder="t.ex. Skapande" 
                        className={`${inputStyles} mb-3`}
                      />
                      <textarea 
                        id="value3Desc" 
                        name="value3Desc" 
                        value={formData.value3Desc}
                        onChange={handleChange}
                        rows={3} 
                        placeholder="Beskriv varför detta är viktigt för dig"
                        className={textareaStyles}
                      ></textarea>
                    </div>
                  </div>

                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">2. Min Definition av en Meningsfull Tillvaro</h2>
                    <p className="text-gray-600 mb-4"><em>För mig handlar ett meningsfullt liv om...</em></p>
                    
                    <textarea 
                      id="meaning" 
                      name="meaning" 
                      value={formData.meaning}
                      onChange={handleChange}
                      rows={6} 
                      placeholder="Skriv fritt. Det kan vara en vision, en metafor eller en konkret beskrivning."
                      className={textareaStyles}
                    ></textarea>
                  </div>

                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">3. Samhällets Roll i Min Meningsskapelse</h2>
                    <p className="text-gray-600 mb-4"><em>Vad behöver förändras för att du ska kunna leva fullt ut?</em></p>
                    
                    <div className="mb-6">
                      <label htmlFor="change1" className="block text-gray-700 mb-2 text-lg">Förändring 1</label>
                      <input 
                        type="text" 
                        id="change1" 
                        name="change1" 
                        value={formData.change1}
                        onChange={handleChange}
                        placeholder="t.ex. Ekonomi: En AUBI som möjliggör sabbatsår för omskolning" 
                        className={inputStyles}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="change2" className="block text-gray-700 mb-2 text-lg">Förändring 2</label>
                      <input 
                        type="text" 
                        id="change2" 
                        name="change2" 
                        value={formData.change2}
                        onChange={handleChange}
                        placeholder="t.ex. Miljö: Självförsörjande byggder för lokal matproduktion" 
                        className={inputStyles}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="change3" className="block text-gray-700 mb-2 text-lg">Förändring 3</label>
                      <input 
                        type="text" 
                        id="change3" 
                        name="change3" 
                        value={formData.change3}
                        onChange={handleChange}
                        placeholder="t.ex. Gemenskap: 'Tredje platser' där kultur växer organisk, inte kommersiellt" 
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">4. Mitt Löfte till Framtiden</h2>
                    <p className="text-gray-600 mb-4"><em>Vad är du redo att göra? (Inget behöver vara stort—bara äkta)</em></p>
                    
                    <div className="mb-6">
                      <label htmlFor="promise1" className="block text-gray-700 mb-2 text-lg">Löfte 1</label>
                      <input 
                        type="text" 
                        id="promise1" 
                        name="promise1" 
                        value={formData.promise1}
                        onChange={handleChange}
                        placeholder="t.ex. Jag engagerar mig i en lokal matkooperativ för att skapa motståndskraft" 
                        className={inputStyles}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="promise2" className="block text-gray-700 mb-2 text-lg">Löfte 2</label>
                      <input 
                        type="text" 
                        id="promise2" 
                        name="promise2" 
                        value={formData.promise2}
                        onChange={handleChange}
                        placeholder="t.ex. Jag lär ut poesi i förorterna som ett sätt att bryta isolering" 
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">5. Mitt Drömsamhälle (Valfritt)</h2>
                    <p className="text-gray-600 mb-4"><em>Beskriv, måla, dikta - uttryck din vision kreativt</em></p>
                    
                    <textarea 
                      id="creative" 
                      name="creative" 
                      value={formData.creative}
                      onChange={handleChange}
                      rows={8} 
                      placeholder="Skriv en dikt, beskrivning eller tankar om ditt drömsamhälle..."
                      className={textareaStyles}
                    ></textarea>
                  </div>

                  <div className="card">
                    <h2 className="text-2xl font-semibold mb-4">Dela ditt manifest</h2>
                    
                    <div className="mb-6">
                      <label className="flex items-center space-x-2 mb-4">
                        <input 
                          type="checkbox" 
                          id="sharePublic" 
                          name="sharePublic" 
                          checked={formData.sharePublic as boolean}
                          onChange={handleChange}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="text-lg">Jag vill att Fjärilspartiet publicerar detta manifest på sin hemsida (anonymt eller med mitt namn)</span>
                      </label>
                      
                      <div className={`ml-8 ${toggleVisibility('sharePublic')}`}>
                        <label htmlFor="shareName" className="block text-gray-700 mb-2 text-lg">Namn att visa med manifestet (valfritt):</label>
                        <input 
                          type="text" 
                          id="shareName" 
                          name="shareName" 
                          value={formData.shareName}
                          onChange={handleChange}
                          placeholder="Lämna tomt för att vara anonym"
                          className={inputStyles}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id="contactMe" 
                          name="contactMe" 
                          checked={formData.contactMe as boolean}
                          onChange={handleChange}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="text-lg">Ni får kontakta mig om relaterade initiativ</span>
                      </label>
                    </div>
                    
                    <div className={`ml-8 space-y-4 ${toggleVisibility('contactMe')}`}>
                      <div>
                        <label htmlFor="contactEmail" className="block text-gray-700 mb-2 text-lg">E-post:</label>
                        <input 
                          type="email" 
                          id="contactEmail" 
                          name="contactEmail" 
                          value={formData.contactEmail}
                          onChange={handleChange}
                          className={inputStyles}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="contactRegion" className="block text-gray-700 mb-2 text-lg">Region:</label>
                        <input 
                          type="text" 
                          id="contactRegion" 
                          name="contactRegion" 
                          value={formData.contactRegion}
                          onChange={handleChange}
                          placeholder="t.ex. Stockholm, Skåne, etc."
                          className={inputStyles}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      onClick={saveDraft} 
                      className="btn-secondary text-lg py-3 px-6"
                    >
                      Spara utkast
                    </button>
                    <div>
                      <button 
                        type="button" 
                        onClick={() => switchTab('preview')} 
                        className="btn-secondary text-lg py-3 px-6 mr-2"
                      >
                        Förhandsgranska
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary text-lg py-3 px-6"
                      >
                        {isSubmitting ? 'Skickar...' : 'Skicka in manifestet'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Preview Panel */}
              <div className={activeTab === 'preview' ? 'block' : 'hidden'}>
                <div className="card mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Förhandsgranskning av ditt manifest</h2>
                  
                  <div 
                    className="prose max-w-none text-lg"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(generatePreview()) }}
                  ></div>
                </div>
                
                <div className="card mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Delningsalternativ</h2>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    Dela ditt manifest med andra och inspirera till samtal om meningsfulla samhällen.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Social Media Preview</h3>
                    
                    <div className="max-w-md mx-auto mb-6 bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-green-400"></div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-gray-500">
                            <path d="M12 12 Q8 8 4 12 Q8 16 12 12 Q16 8 20 12 Q16 16 12 12" fill="#de87cd"></path>
                          </svg>
                          <span className="text-sm font-medium text-gray-600">Mitt Personliga Manifest | Fjärilspartiet</span>
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Min vision för ett meningsfullt samhälle</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {formData.meaning.substring(0, 100)}...
                        </p>
                        <div className="text-blue-600 text-sm">Läs hela manifestet →</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                      <button className="btn-secondary flex items-center text-lg py-3 px-6">
                        <Twitter className="w-5 h-5 mr-2" />
                        Twitter
                      </button>
                      <button className="btn-secondary flex items-center text-lg py-3 px-6">
                        <Facebook className="w-5 h-5 mr-2" />
                        Facebook
                      </button>
                      <button className="btn-secondary flex items-center text-lg py-3 px-6">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </button>
                      <button className="btn-secondary flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        Instagram
                      </button>
                      <button className="btn-secondary flex items-center text-lg py-3 px-6">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                          <path d="M8.51 19c-2.647 0-4.81-2.113-4.81-4.8 0-2.687 2.113-4.8 4.76-4.8 1.73 0 3.203.95 4.02 2.36.247.417.247.367.247 1.36h5.82c0-1.05-.05-1.73-.69-2.8-1.27-2.113-3.92-3.52-7.07-3.52-5.023 0-9.09 4.02-9.09 9C1.67 20.87 5.739 24 10.76 24c2.687 0 5.115-.95 6.94-2.63.557-.518.617-.59 1.038-1.23l-3.73-3.3c-.196.097-.196.097-.293.196-.92.77-2.212 1.96-4.217 1.96z" />
                        </svg>
                        Bluesky
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Permalänk till ditt manifest</h3>
                    <div className="flex">
                      <input 
                        type="text" 
                        id="permalink" 
                        value={generatePermalink()}
                        className="rounded-l-lg text-lg p-4 flex-grow" 
                        readOnly
                      />
                      <button 
                        onClick={copyPermalink}
                        className="bg-gray-200 px-6 py-4 rounded-r-lg hover:bg-gray-300 focus:outline-none text-lg"
                      >
                        {copied ? 'Kopierad!' : 'Kopiera'}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Denna länk fungerar endast om du väljer att publicera ditt manifest offentligt.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={() => switchTab('create')}
                    className="btn-secondary text-lg py-3 px-6"
                  >
                    ← Tillbaka till redigering
                  </button>
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    className="btn-primary text-lg py-3 px-6"
                  >
                    Slutför och skicka
                  </button>
                </div>
              </div>

              {/* About Panel */}
              <div className={activeTab === 'about' ? 'block' : 'hidden'}>
                <div className="card prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Om Personliga Manifest</h2>
                  
                  <p>
                    På Fjärilspartiet tror vi att politik börjar inom varje individ. Ett personligt 
                    manifest är ett sätt att utforska och formulera din egen vision för ett meningsfullt 
                    samhälle.
                  </p>
                  
                  <h3>Varför skapa ett manifest?</h3>
                  <ul>
                    <li>För att <strong>förtydliga dina egna värderingar</strong> och vision</li>
                    <li>För att <strong>hitta likasinnade</strong> med liknande värderingar</li>
                    <li>För att <strong>bidra till en kollektiv vision</strong> för framtiden</li>
                    <li>För att <strong>inspirera andra</strong> att tänka djupare kring ett meningsfullt samhälle</li>
                  </ul>
                  
                  <h3>Hur används ditt manifest?</h3>
                  <p>Din vision kan påverka vår kollektiva riktning på flera sätt:</p>
                  <ul>
                    <li>Om du väljer att dela det offentligt, kan ditt manifest inspirera andra</li>
                    <li>Alla manifest (även anonyma) analyseras försiktigt för att identifiera gemensamma teman och prioriteringar</li>
                    <li>De mest resonerande idéerna kan bli del av partiets utveckling</li>
                    <li>Du kan bli matchad med andra som delar din vision för gemensamma projekt</li>
                  </ul>
                  
                  <h3>När publiceras mitt manifest?</h3>
                  <div className="bg-blue-50 p-6 rounded-lg my-4">
                    <p>
                      När du skickar in ditt manifest får Björn (webbansvarig) en notifiering i sin telefon. 
                      I mån av tid och beroende på omständigheter gör han sitt bästa för att publicera manifestet 
                      så snart han kan. Detta är en manuell process som kan ta från någon timme upp till en och två veckor.
                    </p>
                    <p className="mt-2">
                      Din tålamod uppskattas! Varje manifest läses och övervägs noggrant som en del av vår 
                      kollektiva vision för framtiden.
                    </p>
                  </div>
                  
                  <h3>Hur skyddas din integritet?</h3>
                  <p>Vi respekterar och värnar om din personliga data:</p>
                  <ul>
                    <li>Du bestämmer själv om ditt manifest ska vara offentligt eller privat</li>
                    <li>Personliga kontaktuppgifter delas aldrig med tredje part</li>
                    <li>Du kan begära att ditt manifest tas bort när som helst</li>
                    <li>Vi använder Formspree för säker hantering av formulärdata</li>
                  </ul>
                  
                  <h3>Vanliga frågor</h3>
                  <p><strong>Behöver jag vara medlem?</strong></p>
                  <p>
                    Nej, du behöver inte gå med i partiet för att dela ditt manifest med oss eller använda formuläret. 
                    Detta är öppet för alla som vill bidra till samtalet om ett meningsfullt samhälle.
                  </p>
                  
                  <p>
                    För att skapa, dela och inspirera andra med ditt personliga manifest är allt du behöver göra att
                    fylla i formuläret på denna sida. Vi välkomnar tankar och visioner från alla, oavsett politisk hemvist
                    eller bakgrund.
                  </p>
                </div>
              </div>
            </>
          ) : (
            /* Thank You / Success Message */
            <div className="card bg-green-50 border border-green-200 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-4">Tack för ditt bidrag!</h2>
              
              <p className="text-center mb-4 text-lg">
                Ditt personliga manifest har skickats in. Vi ser fram emot att ta del av din vision
                för ett meningsfullt samhälle!
              </p>
              
              <p className="text-center mb-4 text-lg">
                Om du valde att göra ditt manifest offentligt kommer vårt team att gå igenom det och
                publicera det på vår webbplats. Detta är en manuell process som kan ta 1-2 veckor.
              </p>
              
              <p className="text-center mb-8 text-lg">
                Om du valde att dela dina kontaktuppgifter kommer vi att höra av oss
                om relaterade initiativ.
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <p className="font-medium">Inspirera andra genom att dela din handling:</p>
                
                <ShareButtons 
                  title="Jag har skapat mitt personliga manifest för ett meningsfullt samhälle"
                  description="Vad lever du för? Dela din vision för framtiden genom att skapa ditt eget manifest på Fjärilspartiets webbplats."
                />
                
                <div className="mt-8 pt-6 border-t border-green-200 flex justify-center gap-4">
                  <Link href="/" className="btn-secondary text-lg py-3 px-6">
                    Gå till startsidan
                  </Link>
                  <Link href="/vision" className="btn-primary text-lg py-3 px-6">
                    Utforska vår vision
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}
