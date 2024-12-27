import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ListItem {
  icon?: LucideIcon;
  text: string;
}

interface SectionContent {
  title: string;
  description?: string;
  items: ListItem[];
  link?: {
    text: string;
    action: string;
    url?: string;
  };
}

interface ContentSectionProps {
  id: string;
  title: string;
  contents: SectionContent[];
  className?: string;
}

export default function ContentSection({ id, title, contents, className = '' }: ContentSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLink = (action?: string) => {
    if (action === 'openModal') {
      setIsModalOpen(true);
    }
  };

  return (
    <section 
      id={id} 
      role="tabpanel" 
      aria-labelledby={`tab-${id}`}
      className={`mb-20 ${className}`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {contents.map((content, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{content.title}</h3>
            {content.description && (
              <p className="mb-4 text-gray-600">{content.description}</p>
            )}
            <ul className="space-y-2">
              {content.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  {item.icon && <item.icon className="w-5 h-5 text-blue-600 mt-1 mr-2" />}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            {content.link && (
              <div className="mt-6">
                <button
                  onClick={() => handleLink(content.link?.action)}
                  className="btn-secondary inline-flex items-center"
                >
                  {content.link.text} →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-6">Varför AUBI?</h2>
            
            <div className="prose prose-lg">
              <p>AUBI är en möjlighet att återkoppla pengarna som sparas genom samhällets effektivisering och automatisering till individer som därigenom förlorar sina arbetstillfällen. Detta ger människor möjlighet att ta hand om hela sin existens - kropp, sinne och själ - genom att vara i naturen, äta hälsosamt, träna och vårda sina sociala relationer. Den ekonomiska grundtryggheten skapar också tid och ro för att komma till insikt om vad man verkligen vill bidra med till världen. När människor får möjlighet att utvecklas och engagera sig utifrån sina djupaste drivkrafter skapas positiva effekter som sprider sig genom hela samhället. Eftersom AUBI utbetalas hela livet behöver man inte längre oroa sig om pension, vilket är en stor förbättring och lättnad för alla.</p>

              <p>Med ekonomisk grundtrygghet vågar fler människor ta steget att starta företag och utveckla nya idéer. Innovationskraften i samhället stärks när människor har tid att vara kreativa och testa nya lösningar utan att riskera sin försörjning. Detta skapar en mer dynamisk ekonomi som gynnar alla.</p>

              <p>Den frigjorda tiden öppnar också nya möjligheter för samhällsengagemang och demokratiskt deltagande. När människor inte behöver oroa sig för sin dagliga försörjning kan de engagera sig i lokala projekt, föreningsliv och samhällsfrågor. Detta stärker demokratin underifrån och skapar mer livskraftiga lokalsamhällen.</p>

              <p>AUBI ger också människor verklig frihet att utveckla sin kompetens genom hela livet. Det blir möjligt att studera, omskola sig eller fördjupa sina kunskaper när som helst i livet utan att oroa sig för försörjningen. Detta skapar ett mer flexibelt och dynamiskt arbetsliv där människor lättare kan anpassa sig till förändring.</p>

              <p>Familjerna stärks när människor får mer tid för varandra. Föräldrar kan vara mer närvarande med sina barn, och det blir lättare att ta hand om äldre anhöriga. Den minskade stressen kring ekonomi och försörjning förbättrar också den mentala hälsan och ger bättre förutsättningar för återhämtning och välmående.</p>

              <p>De lokala ekonomierna blomstrar när alla invånare har en garanterad grundinkomst. Det blir möjligt att leva och verka även på mindre orter, och lokala initiativ och projekt får bättre förutsättningar att utvecklas. Detta motverkar urbaniseringen och skapar mer livskraftiga samhällen i hela landet.</p>

              <p>AUBI stärker också människors position på arbetsmarknaden. Med en garanterad grundtrygghet blir det möjligt att tacka nej till dåliga arbetsvillkor och stå starkare i löneförhandlingar. Detta leder till bättre arbetsvillkor och en sundare balans mellan arbetsgivare och arbetstagare.</p>

              <p>Slutligen innebär AUBI en välkommen förenkling av välfärdssystemen. Genom att ersätta många olika bidrag och stöd med en universell utbetalning minskar byråkratin och administrationen kraftigt. Detta frigör resurser och minskar behovet av kontroller och övervakning, vilket skapar ett mer tillitsfullt samhälle.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
