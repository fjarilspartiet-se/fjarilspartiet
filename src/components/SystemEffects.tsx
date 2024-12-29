import { useState } from 'react';
import { 
  Shield, Sprout, Network, Book,
  Globe, Target, ArrowRight
} from 'lucide-react';

const SystemEffects = () => {
  const [activeSystem, setActiveSystem] = useState('aubi');
  
  const systems = {
    aubi: {
      title: "AUBI-systemets effekter",
      description: "Se hur ekonomisk grundtrygghet skapar positiva kedjereaktioner i samhället",
      icon: Shield,
      color: "blue",
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
      icon: Sprout,
      color: "green",
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
    },
    demokrati: {
      title: "Digital demokratis effekter",
      description: "Se hur deltagardemokrati skapar positiva kedjereaktioner",
      icon: Network,
      color: "purple",
      stages: [
        {
          title: "Digital tillgång",
          effects: ["Sänkt tröskel för deltagande", "Ökad transparens", "Realtidsfeedback"]
        },
        {
          title: "Ökat engagemang",
          effects: ["Fler deltar i beslut", "Bättre förankrade beslut", "Växande demokratisk kompetens"]
        },
        {
          title: "Systemisk effekt",
          effects: ["Stärkt demokratisk kultur", "Högre förtroende för institutioner", "Effektivare beslutsfattande"]
        },
        {
          title: "Samhällsförändring",
          effects: ["Mer resilient demokrati", "Stärkt social sammanhållning", "Bättre beslutskvalitet"]
        }
      ]
    },
    utbildning: {
      title: "Transformativ utbildnings påverkan",
      description: "Hur friare lärande förändrar hela samhället",
      icon: Book,
      color: "yellow",
      stages: [
        {
          title: "Individuell frihet",
          effects: ["Inre motivation blomstrar", "Personlig utveckling", "Meningsfullt lärande"]
        },
        {
          title: "Kunskapsutveckling",
          effects: ["Djupare förståelse", "Kreativ problemlösning", "Systemtänkande"]
        },
        {
          title: "Social påverkan",
          effects: ["Stärkt samarbetsförmåga", "Ökad empati", "Demokratisk kompetens"]
        },
        {
          title: "Samhällseffekt",
          effects: ["Innovation och entreprenörskap", "Stärkt demokrati", "Hållbar utveckling"]
        }
      ]
    },
    global: {
      title: "Global transformations spridning",
      description: "Hur lokala förändringar får global påverkan",
      icon: Globe,
      color: "indigo",
      stages: [
        {
          title: "Lokal förändring",
          effects: ["Framgångsrika pilotprojekt", "Dokumenterade resultat", "Praktiska exempel"]
        },
        {
          title: "Regional spridning",
          effects: ["Interkulturell dialog", "Kunskapsutbyte", "Anpassade lösningar"]
        },
        {
          title: "Systemförändring",
          effects: ["Nya samarbetsformer", "Teknologidemokratisering", "Resursutjämning"]
        },
        {
          title: "Global effekt",
          effects: ["Ökad global rättvisa", "Hållbar utveckling", "Fredsbyggande"]
        }
      ]
    },
    pilot: {
      title: "Pilotprojektens spridningseffekter",
      description: "Hur småskaliga experiment leder till omfattande förändring",
      icon: Target,
      color: "red",
      stages: [
        {
          title: "Initial test",
          effects: ["Praktisk erfarenhet", "Lokal anpassning", "Evidensbasering"]
        },
        {
          title: "Utveckling",
          effects: ["Förbättrade metoder", "Dokumentation", "Kunskapsdelning"]
        },
        {
          title: "Spridning",
          effects: ["Fler implementeringar", "Best practices", "Skalning"]
        },
        {
          title: "Systemeffekt",
          effects: ["Beprövade lösningar", "Systematisk förändring", "Kulturell transformation"]
        }
      ]
    }
  };

  const getColorClasses = (systemKey: string, isActive: boolean) => {
    const colors = {
      aubi: "blue",
      local: "green",
      demokrati: "purple",
      utbildning: "yellow",
      global: "indigo",
      pilot: "red"
    };
    
    const color = colors[systemKey as keyof typeof colors];
    return isActive 
      ? `bg-${color}-100 text-${color}-800` 
      : 'bg-gray-100';
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(systems).map(([key, system]) => {
          const Icon = system.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveSystem(key)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                getColorClasses(key, activeSystem === key)
              }`}
            >
              <Icon className="w-5 h-5" />
              {system.title.split(' ')[0]}
            </button>
          );
        })}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {systems[activeSystem as keyof typeof systems].title}
      </h3>
      <p className="text-gray-600 mb-8">
        {systems[activeSystem as keyof typeof systems].description}
      </p>

      <div className="grid grid-cols-4 gap-4">
        {systems[activeSystem as keyof typeof systems].stages.map((stage, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg ${
              getColorClasses(activeSystem, true)
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
