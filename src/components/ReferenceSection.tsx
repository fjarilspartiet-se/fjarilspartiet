// components/ReferenceSection.tsx
interface Reference {
  title: string;
  source: string;
  link: string;
}

interface ReferenceSectionProps {
  title: string;
  references: Reference[];
}

export default function ReferenceSection({ title, references }: ReferenceSectionProps) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {references.map((ref, index) => (
          <li key={index}>
            {ref.title}
            <a 
              href={ref.link}
              className="text-blue-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ref.source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
