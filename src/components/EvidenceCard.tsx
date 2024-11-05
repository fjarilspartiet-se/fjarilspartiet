// components/EvidenceCard.tsx
interface EvidenceItem {
  title: string;
  items: string[];
}

interface EvidenceCardProps {
  items: EvidenceItem[];
}

export default function EvidenceCard({ items }: EvidenceCardProps) {
  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Evidens och förväntade effekter</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="list-disc list-inside space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
