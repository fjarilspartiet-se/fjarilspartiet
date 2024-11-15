import { useState } from 'react';
import { ArrowRight, Sprout, Shield } from 'lucide-react';

const SystemEffects = () => {
  const [activeSystem, setActiveSystem] = useState('aubi');
  
  const systems = {
    aubi: {
      title: "AUBI-systemets effekter",
      description: "Se hur ekonomisk grundtrygghet skapar positiva kedjereaktioner i samhället",
      stages: [
        {
          title: "Grundtrygghet",
          effects: ["Minskad ekonomisk stress", "Tid för eftertanke", "Möjlighet till omställning"]
        },
        {
          title: "Personlig utveckling",
          effects: ["Utbildning och omskolning", "Hälsoförbättringar", "Entreprenörskap"]
        },
        {
          title: "Samhällsengagemang",
          effects: ["Ökad volontärverksamhet", "Kulturinitiativ", "Lokala projekt"]
        },
        {
          title: "Systemisk förändring",
          effects: ["Starkare lokalsamhällen", "Minskad ojämlikhet", "Ökad innovation"]
        }
      ]
    },
    local: {
      title: "Lokala matsystems påverkan",
      description: "Hur lokal matproduktion stärker hela samhället",
      stages: [
        {
          title: "Lokal produktion",
          effects: ["Färsk närproducerad mat", "Minskade transporter", "Biologisk mångfald"]
        },
        {
          title: "Gemenskap",
          effects: ["Starkare sociala band", "Kunskapsutbyte", "Generationsmöten"]
        },
        {
          title: "Ekonomisk utveckling",
          effects: ["Lokala arbetstillfällen", "Cirkulär ekonomi", "Ökad resiliens"]
        },
        {
          title: "Långsiktig förändring",
          effects: ["Förbättrad folkhälsa", "Ekologisk hållbarhet", "Levande lokalsamhällen"]
        }
      ]
    }
  };

  const activeData = systems[activeSystem as keyof typeof systems];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveSystem('aubi')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeSystem === 'aubi' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'
          }`}
        >
          <Shield className="w-5 h-5" />
          AUBI
        </button>
        <button
          onClick={() => setActiveSystem('local')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeSystem === 'local' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
          }`}
        >
          <Sprout className="w-5 h-5" />
          Lokala system
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-4">{activeData.title}</h3>
      <p className="text-gray-600 mb-8">{activeData.description}</p>

      <div className="grid grid-cols-4 gap-4">
        {activeData.stages.map((stage, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg ${
              activeSystem === 'aubi'
                ? 'bg-blue-50 border-2 border-blue-200'
                : 'bg-green-50 border-2 border-green-200'
            }`}
          >
            <h4 className="font-semibold mb-4">{stage.title}</h4>
            <ul className="space-y-2">
              {stage.effects.map((effect, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  {effect}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemEffects;
