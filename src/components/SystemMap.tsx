import { useState } from 'react';
import { 
  Shield, Network, Brain, Heart,
  Users, Leaf, Book, Building, Zap, LucideIcon
} from 'lucide-react';

interface Node {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  connections: string[];
  effects: string[];
  category: 'core' | 'social' | 'environmental' | 'economic';
}

const SystemMap = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [highlightedConnections, setHighlightedConnections] = useState<string[]>([]);

  const nodes: Record<string, Node> = {
    aubi: {
      id: 'aubi',
      title: 'AUBI',
      icon: Shield,
      description: 'Adaptiv universell basinkomst',
      connections: ['local_economy', 'education', 'health', 'democracy'],
      effects: [
        'Ekonomisk grundtrygghet',
        'Möjlighet till omställning',
        'Stärkt entreprenörskap'
      ],
      category: 'core'
    },
    local_economy: {
      id: 'local_economy',
      title: 'Lokala ekonomier',
      icon: Building,
      description: 'Stärkta lokala ekonomiska system',
      connections: ['food_systems', 'energy', 'education'],
      effects: [
        'Ökad resiliens',
        'Jobbskapande',
        'Minskad miljöpåverkan'
      ],
      category: 'economic'
    },
    food_systems: {
      id: 'food_systems',
      title: 'Matsystem',
      icon: Leaf,
      description: 'Lokala och regenerativa matsystem',
      connections: ['biodiversity', 'health', 'community'],
      effects: [
        'Ökad matsäkerhet',
        'Biologisk mångfald',
        'Stärkta sociala band'
      ],
      category: 'environmental'
    },
    democracy: {
      id: 'democracy',
      title: 'Digital demokrati',
      icon: Network,
      description: 'DidiS och demokratiska verktyg',
      connections: ['education', 'community', 'governance'],
      effects: [
        'Ökat deltagande',
        'Transparens',
        'Bättre beslut'
      ],
      category: 'core'
    },
    education: {
      id: 'education',
      title: 'Utbildning',
      icon: Book,
      description: 'Transformativt lärande',
      connections: ['research', 'democracy', 'health'],
      effects: [
        'Livslångt lärande',
        'Kritiskt tänkande',
        'Personlig utveckling'
      ],
      category: 'social'
    },
    health: {
      id: 'health',
      title: 'Hälsa',
      icon: Heart,
      description: 'Holistisk hälsovård',
      connections: ['food_systems', 'community', 'education'],
      effects: [
        'Förbättrad folkhälsa',
        'Minskade vårdkostnader',
        'Ökad livskvalitet'
      ],
      category: 'social'
    },
    energy: {
      id: 'energy',
      title: 'Energi',
      icon: Zap,
      description: 'Lokala energisystem',
      connections: ['local_economy', 'environment', 'technology'],
      effects: [
        'Förnybar energi',
        'Energidemokrati',
        'Minskade utsläpp'
      ],
      category: 'environmental'
    },
    community: {
      id: 'community',
      title: 'Gemenskap',
      icon: Users,
      description: 'Stärkta lokalsamhällen',
      connections: ['democracy', 'health', 'culture'],
      effects: [
        'Social sammanhållning',
        'Ökat engagemang',
        'Lokal resiliens'
      ],
      category: 'social'
    },
    research: {
      id: 'research',
      title: 'Forskning',
      icon: Brain,
      description: 'Systemisk forskning',
      connections: ['technology', 'education', 'governance'],
      effects: [
        'Evidensbaserad politik',
        'Innovation',
        'Kunskapsutveckling'
      ],
      category: 'core'
    }
  };

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId);
    setHighlightedConnections([nodeId, ...nodes[nodeId].connections]);
  };

  const getNodeColor = (category: string) => {
    switch (category) {
      case 'core':
        return 'bg-blue-100 border-blue-500';
      case 'social':
        return 'bg-purple-100 border-purple-500';
      case 'environmental':
        return 'bg-green-100 border-green-500';
      case 'economic':
        return 'bg-yellow-100 border-yellow-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Systemkarta</h3>
      <p className="text-gray-600 mb-8">
        Utforska hur våra olika initiativ samverkar och förstärker varandra.
        Klicka på en nod för att se dess kopplingar och effekter.
      </p>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {Object.values(nodes).map((node) => (
          <div
            key={node.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              getNodeColor(node.category)
            } ${
              highlightedConnections.includes(node.id)
                ? 'ring-2 ring-blue-500 shadow-lg'
                : 'opacity-70'
            }`}
            onClick={() => handleNodeClick(node.id)}
          >
            <div className="flex items-center gap-3 mb-4">
              <node.icon className="w-6 h-6" />
              <h4 className="font-semibold">{node.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{node.description}</p>
            
            {activeNode === node.id && (
              <div className="mt-4 border-t pt-4">
                <h5 className="font-semibold mb-2">Effekter:</h5>
                <ul className="text-sm space-y-2">
                  {node.effects.map((effect, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Kategorier:</h4>
        <div className="flex gap-4">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500" />
            Kärninitiativ
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-purple-100 border-2 border-purple-500" />
            Sociala system
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-100 border-2 border-green-500" />
            Miljösystem
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-yellow-100 border-2 border-yellow-500" />
            Ekonomiska system
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemMap;
