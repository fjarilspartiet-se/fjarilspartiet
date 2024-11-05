import { useState } from 'react';

interface IconProps {
  className?: string;
}

interface Stage {
  id: string;
  title: string;
  description: string;
  icon: React.FC<IconProps>;
}

const TransformationJourney = () => {
  const [activeStage, setActiveStage] = useState('egg');

  const stages: Stage[] = [
    {
      id: 'egg',
      title: 'Äggstadiet',
      description: 'Vi är här nu. Vi utvecklar noggrant våra ramverk, strukturer och digitala verktyg. Som ett ägg innehåller all information för fjärilens utveckling, bygger vi grunden för framtida förändring.',
      icon: ({ className }: IconProps) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <ellipse cx="12" cy="14" rx="8" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 10 Q12 14 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <path d="M8 12 Q12 16 16 12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 'larva',
      title: 'Larvstadiet',
      description: 'Nästa steg är att växa och samla resurser. Vi kommer aktivt engagera medlemmar, testa våra idéer i praktiken och bygga starka lokala nätverk.',
      icon: ({ className }: IconProps) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 12 Q8 8 12 12 Q16 16 20 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="14" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
          <path d="M5 11.5 Q6 10 7 9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'pupa',
      title: 'Puppstadiet',
      description: 'En period av djup transformation där vi implementerar våra system i större skala och omorganiserar samhällets strukturer för ökad hållbarhet och rättvisa.',
      icon: ({ className }: IconProps) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4 L12 6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 6 Q12 5 16 6 Q17 12 16 18 Q12 19 8 18 Q7 12 8 6Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 9 Q12 10 14 9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <path d="M10 12 Q12 13 14 12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <path d="M10 15 Q12 16 14 15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 'butterfly',
      title: 'Fjärilsstadiet',
      description: 'Det fullt utvecklade stadiet där våra system aktivt bidrar till ett blomstrande samhälle, precis som fjärilen pollinerar och sprider liv.',
      icon: ({ className }: IconProps) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12 Q8 8 4 12 Q8 16 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12 Q16 8 20 12 Q16 16 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11 8 Q10 6 9 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 8 Q14 6 15 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Vår transformationsresa</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`card p-6 cursor-pointer transition-all hover:shadow-lg ${
                activeStage === stage.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => setActiveStage(stage.id)}
            >
              <div className="flex flex-col items-center mb-4">
                <stage.icon className={`w-12 h-12 mb-4 ${
                  activeStage === stage.id ? 'text-blue-500' : 'text-gray-600'
                }`} />
                <h3 className="text-xl font-semibold text-center">{stage.title}</h3>
              </div>
              <p className="text-gray-600 text-center">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
