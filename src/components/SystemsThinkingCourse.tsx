import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Circle, Target, RefreshCw, Settings, Zap, Link } from 'lucide-react';

const SystemsThinkingCourse = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showExample, setShowExample] = useState(false);

  const sections = [
    {
      title: "Introduktion till systemtänkande",
      content: (
        <div className="space-y-4">
          <p>
            Systemtänkande är ett sätt att förstå hur saker hänger ihop och påverkar varandra i helheter. 
            Istället för att se isolerade problem ser vi mönster, relationer och sammanhang.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center">
              <Target className="w-5 h-5 text-blue-600 mr-2" />
              Grundprinciper
            </h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Helheten är mer än summan av delarna</li>
              <li>Allt är sammankopplat på olika sätt</li>
              <li>Systemstruktur påverkar systembeteende</li>
              <li>Orsakssamband är ofta cirkulära, inte linjära</li>
              <li>Små förändringar kan ge stora effekter</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Att se systemet",
      content: (
        <div className="space-y-4">
          <p>
            För att förstå ett system behöver vi identifiera dess komponenter, relationer och gränser.
            Vi behöver också förstå hur systemet beter sig över tid.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-blue-50 p-4 rounded-lg flex-1">
              <h4 className="font-semibold mb-2">Komponenter att identifiera:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Delar och aktörer</li>
                <li>Relationer och flöden</li>
                <li>Mönster och återkopplingar</li>
                <li>Gränser och omgivning</li>
                <li>Mål och syften</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex-1">
              <h4 className="font-semibold mb-2">Nyckelförmågor:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Hitta återkopplingsloopar</li>
                <li>Identifiera fördröjningar</li>
                <li>Upptäcka hävstångspunkter</li>
                <li>Se över olika tidsskalor</li>
                <li>Förstå framväxande egenskaper</li>
              </ul>
            </div>
          </div>

          <button 
            onClick={() => setShowExample(!showExample)}
            className="btn-secondary"
          >
            {showExample ? "Dölj exempel" : "Visa exempel"}
          </button>

          {showExample && (
            <div className="bg-white border border-gray-200 p-4 rounded-lg mt-2">
              <h4 className="font-semibold mb-2">Exempel: Sociala medier som system</h4>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><span className="font-medium">Komponenter:</span> Användare, innehåll, algoritmer, plattformen</li>
                <li><span className="font-medium">Relationer:</span> Användare skapar innehåll → algoritmer visar det → användare reagerar → algoritmer anpassar sig</li>
                <li><span className="font-medium">Återkoppling:</span> Mer engagemang → mer liknande innehåll → ännu mer engagemang (förstärkande loop)</li>
                <li><span className="font-medium">Framväxande egenskap:</span> Polarisering och filterbubblor</li>
              </ul>
              <p className="text-sm text-gray-600">
                Genom att förstå detta system kan vi identifiera hävstångspunkter: kanske förändra algoritmerna 
                eller skapa strukturer för mer varierat innehåll.
              </p>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Återkopplingsmekanismer",
      content: (
        <div className="space-y-4">
          <p>
            Återkoppling (feedback) är en av de viktigaste mekanismerna i system. Det finns två huvudtyper:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <RefreshCw className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-semibold">Förstärkande återkoppling</h4>
              </div>
              <p className="mb-2">Förstärker förändring i en viss riktning - &quot;snöbollseffekt&quot;</p>
              <div className="bg-white p-3 rounded">
                <p className="text-sm"><span className="font-medium">Exempel:</span> Bankrusning</p>
                <ul className="text-sm list-disc list-inside">
                  <li>Några tar ut pengar → Skapar oro</li>
                  <li>Oro → Fler tar ut pengar</li>
                  <li>Fler tar ut pengar → Ännu mer oro</li>
                  <li>Resultat: Exponentiell ökning</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Settings className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold">Balanserande återkoppling</h4>
              </div>
              <p className="mb-2">Motverkar förändring för att upprätthålla balans</p>
              <div className="bg-white p-3 rounded">
                <p className="text-sm"><span className="font-medium">Exempel:</span> Termostat</p>
                <ul className="text-sm list-disc list-inside">
                  <li>För kallt → Värme slås på</li>
                  <li>Värme → Temperatur stiger</li>
                  <li>Temperatur når mål → Värme slås av</li>
                  <li>Resultat: Stabil temperatur</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Zap className="w-5 h-5 text-yellow-600 mr-2" />
              <h4 className="font-semibold">Tillämpning:</h4>
            </div>
            <p>
              För att förändra system kan vi antingen:
            </p>
            <ul className="list-disc list-inside">
              <li>Skapa/stärka förstärkande loopar som driver önskad förändring</li>
              <li>Försvaga förstärkande loopar som driver oönskad förändring</li>
              <li>Stärka balanserande loopar som upprätthåller önskade tillstånd</li>
              <li>Försvaga balanserande loopar som motverkar önskad förändring</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Hävstångspunkter",
      content: (
        <div className="space-y-4">
          <p>
            Hävstångspunkter är ställen i ett system där små förändringar kan ge stora effekter. 
            Att identifiera dessa är nyckeln till effektiv systemförändring.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Donella Meadows 12 hävstångspunkter</h4>
            <p className="text-sm mb-2">Från minst till mest kraftfulla (förenklade):</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li><span className="font-medium">Parametrar:</span> Siffror, konstanter (t.ex. skattesatser, minimibelopp)</li>
              <li><span className="font-medium">Buffertar:</span> Systemets stabiliserande reserver (t.ex. lager, besparingar)</li>
              <li><span className="font-medium">Struktur:</span> Fysisk uppbyggnad och flöden (t.ex. infrastruktur)</li>
              <li><span className="font-medium">Fördröjningar:</span> Responstid mellan orsak och verkan</li>
              <li><span className="font-medium">Balanserande loopar:</span> Mekanismer som stabiliserar</li>
              <li><span className="font-medium">Förstärkande loopar:</span> Mekanismer som accelererar förändring</li>
              <li><span className="font-medium">Information:</span> Vem har tillgång till vilken information</li>
              <li><span className="font-medium">Regler:</span> Incitament, begränsningar, straff</li>
              <li><span className="font-medium">Självorganisering:</span> Systemets förmåga att förändra sig</li>
              <li><span className="font-medium">Mål:</span> Vad systemet strävar efter</li>
              <li><span className="font-medium">Paradigm:</span> Grundantaganden som systemet bygger på</li>
              <li><span className="font-medium">Transcendens:</span> Förmågan att gå bortom paradigm</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Exempel på hävstångspunkter:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-medium">AUBI (Adaptiv Universell Basinkomst)</p>
                <ul className="text-sm list-disc list-inside">
                  <li>Förändrar regler och incitament</li>
                  <li>Skapar nya informationsflöden</li>
                  <li>Möjliggör självorganisering</li>
                  <li>Kan ändra systemets mål från BNP-tillväxt till välbefinnande</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium">Lokal matproduktion</p>
                <ul className="text-sm list-disc list-inside">
                  <li>Förändrar fysisk struktur</li>
                  <li>Förkortar fördröjningar (tid från produktion till konsumtion)</li>
                  <li>Stärker balanserande loopar (ekologisk återkoppling)</li>
                  <li>Skapar nya förstärkande loopar (lokal ekonomi)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Holism och praktisk tillämpning",
      content: (
        <div className="space-y-4">
          <p>
            Holism innebär att se helheten och inte bara delarna. När vi tillämpar holism 
            i praktiken försöker vi förstå hur olika områden och perspektiv hänger ihop.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Link className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-semibold">Holistiska principer:</h4>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Integrera olika perspektiv och kunskapsområden</li>
              <li>Beakta både objektiva data och subjektiva upplevelser</li>
              <li>Se kortvariga och långvariga effekter</li>
              <li>Balansera individuella och kollektiva behov</li>
              <li>Inkludera både mänskliga och ekologiska system</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Hur du kan tillämpa systemtänkande:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <span className="font-medium">Rita systemkartor:</span>
                <p className="ml-5 text-sm">Skissa upp komponenter, relationer och återkopplingar. Använd pilar för att visa påverkan.</p>
              </li>
              <li>
                <span className="font-medium">Identifiera återkopplingsmekanismer:</span>
                <p className="ml-5 text-sm">Leta efter förstärkande och balanserande loopar i utmaningar du möter.</p>
              </li>
              <li>
                <span className="font-medium">Sök efter hävstångspunkter:</span>
                <p className="ml-5 text-sm">Var kan du göra små förändringar för stor påverkan?</p>
              </li>
              <li>
                <span className="font-medium">Utforska olika perspektiv:</span>
                <p className="ml-5 text-sm">Hur ser situationen ut från olika aktörers synvinkel?</p>
              </li>
              <li>
                <span className="font-medium">Tänk i tid:</span>
                <p className="ml-5 text-sm">Hur utvecklas systemet över olika tidshorisonter?</p>
              </li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Gå vidare:</h4>
            <p className="mb-2">
              För att fortsätta din resa in i systemtänkande, utforska dessa resurser:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>&quot;Thinking in Systems&quot; av Donella Meadows</li>
              <li>Systems Innovation Network (online-community)</li>
              <li>The Systems Thinker (publikation)</li>
              <li>Fjärilspartiets dokument: &quot;STR-228 Utvecklingsramverk och systemförståelse&quot;</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  // Referens till komponentens container med korrekt typning
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
      setShowExample(false);
      
      // Scrolla till toppen av komponenten istället för hela sidan
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevious = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      setShowExample(false);
      
      // Scrolla till toppen av komponenten istället för hela sidan
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Snabbkurs i Systemtänkande och Holism</h2>
      
      {/* Navigation dots */}
      <div className="flex justify-center mb-6">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSection(index);
              setShowExample(false);
            }}
            className={`flex items-center mx-2 ${
              index === activeSection ? 'text-blue-600' : 'text-gray-400'
            }`}
            aria-label={`Gå till sektion ${index + 1}: ${section.title}`}
          >
            <Circle 
              className={`w-3 h-3 mr-1 ${
                index === activeSection ? 'fill-blue-600' : ''
              }`} 
            />
            <span className="text-xs hidden md:inline">{section.title}</span>
          </button>
        ))}
      </div>
      
      {/* Section title */}
      <h3 className="text-xl font-semibold mb-4 text-blue-700">
        {activeSection + 1}. {sections[activeSection].title}
      </h3>
      
      {/* Section content */}
      <div className="mb-8">
        {sections[activeSection].content}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className={`btn-secondary flex items-center ${
            activeSection === 0 ? 'invisible' : ''
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Föregående
        </button>
        
        <button
          onClick={handleNext}
          className={`btn-primary flex items-center ${
            activeSection === sections.length - 1 ? 'invisible' : ''
          }`}
        >
          Nästa <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SystemsThinkingCourse;
