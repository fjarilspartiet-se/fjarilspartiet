// components/ProjectCard.tsx
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  status: string;
  items: string[];
  linkText: string;
  linkHref: string;
}

export default function ProjectCard({ title, status, items, linkText, linkHref }: ProjectCardProps) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-4">
        Status: <span className="text-blue-600">{status}</span>
      </p>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      <a 
        href={linkHref}
        className="btn-primary inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText} <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}
