import { LucideIcon } from 'lucide-react';

interface ListItem {
  icon?: LucideIcon;
  text: string;
}

interface SectionContent {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  contents: SectionContent[];
  className?: string;
}

export default function ContentSection({ id, title, contents, className = '' }: ContentSectionProps) {
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
          </div>
        ))}
      </div>
    </section>
  );
}
