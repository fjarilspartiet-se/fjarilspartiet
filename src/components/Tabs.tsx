import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface TabsProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  tabs: Tab[];
}

export default function Tabs({ activeTab, onTabChange, tabs }: TabsProps) {
  const handleTabClick = (id: string) => {
    onTabChange(id);
    // Remove smooth scroll since we're handling navigation through URL
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => handleTabClick(id)}
          role="tab"
          aria-selected={activeTab === id}
          aria-controls={`panel-${id}`}
          className={`flex items-center px-6 py-3 rounded-lg transition-all hover:shadow-md
            ${activeTab === id 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
        >
          <Icon className="w-5 h-5 mr-2" />
          {label}
        </button>
      ))}
    </nav>
  );
}
