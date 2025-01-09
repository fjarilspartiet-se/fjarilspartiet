import React, { useState } from 'react';
import { Info } from 'lucide-react';

const AUBIFlowDiagram = ({ className = '' }) => {
  const [activeNode, setActiveNode] = useState('');

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1000 800"
        className="w-full h-auto"
        aria-labelledby="aubi-flow-title aubi-flow-desc"
      >
        <title id="aubi-flow-title">AUBI Finansieringsflöde och systemeffekter</title>
        <desc id="aubi-flow-desc">
          Ett detaljerat diagram som visar AUBIs finansieringskällor, kostnader och systemeffekter
        </desc>

        {/* Primära finansieringskällor */}
        <g className="primary-sources">
          <g className="hover:cursor-pointer" onClick={() => setActiveNode('automation')}>
            <rect x="50" y="50" width="180" height="80" rx="5" 
                  className={`${activeNode === 'automation' ? 'fill-green-600' : 'fill-green-500'} transition-colors`} />
            <text x="140" y="85" textAnchor="middle" className="text-white text-sm">
              <tspan x="140" y="75">Automatisering</tspan>
              <tspan x="140" y="95">400-500 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('resources')}>
            <rect x="50" y="150" width="180" height="80" rx="5"
                  className={`${activeNode === 'resources' ? 'fill-green-600' : 'fill-green-500'} transition-colors`} />
            <text x="140" y="185" textAnchor="middle" className="text-white text-sm">
              <tspan x="140" y="175">Resursbeskattning</tspan>
              <tspan x="140" y="195">500-700 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('financial')}>
            <rect x="50" y="250" width="180" height="80" rx="5"
                  className={`${activeNode === 'financial' ? 'fill-green-600' : 'fill-green-500'} transition-colors`} />
            <text x="140" y="285" textAnchor="middle" className="text-white text-sm">
              <tspan x="140" y="275">Finansiella</tspan>
              <tspan x="140" y="295">transaktioner</tspan>
              <tspan x="140" y="315">200-250 mdr/år</tspan>
            </text>
          </g>
        </g>

        {/* Sekundära finansieringskällor */}
        <g className="secondary-sources">
          <g className="hover:cursor-pointer" onClick={() => setActiveNode('carbon')}>
            <rect x="50" y="350" width="180" height="80" rx="5"
                  className={`${activeNode === 'carbon' ? 'fill-lime-600' : 'fill-lime-500'} transition-colors`} />
            <text x="140" y="385" textAnchor="middle" className="text-white text-sm">
              <tspan x="140" y="375">Koldioxidprissättning</tspan>
              <tspan x="140" y="395">200 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('digital')}>
            <rect x="50" y="450" width="180" height="80" rx="5"
                  className={`${activeNode === 'digital' ? 'fill-lime-600' : 'fill-lime-500'} transition-colors`} />
            <text x="140" y="485" textAnchor="middle" className="text-white text-sm">
              <tspan x="140" y="475">Digital ekonomi</tspan>
              <tspan x="140" y="495">180 mdr/år</tspan>
            </text>
          </g>
        </g>

        {/* Total finansiering */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('total-financing')}>
          <rect x="50" y="580" width="180" height="100" rx="5"
                className={`${activeNode === 'total-financing' ? 'fill-orange-600' : 'fill-orange-500'} transition-colors`} />
          <text x="140" y="630" textAnchor="middle" className="text-white">
            <tspan x="140" y="610" className="text-sm">Total finansiering</tspan>
            <tspan x="140" y="640" className="text-base font-bold">1,660-2,010</tspan>
            <tspan x="140" y="660" className="text-sm">miljarder/år</tspan>
          </text>
        </g>

        {/* AUBI System */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('aubi-system')}>
          <rect x="400" y="300" width="200" height="140" rx="5"
                className={`${activeNode === 'aubi-system' ? 'fill-blue-600' : 'fill-blue-500'} transition-colors`} />
          <text x="500" y="340" textAnchor="middle" className="text-white text-sm">
            <tspan x="500" y="330">AUBI System</tspan>
            <tspan x="500" y="360">15,000 kr/månad grundbelopp</tspan>
            <tspan x="500" y="380">+ 5,000 kr behovstillägg</tspan>
            <tspan x="500" y="400">+ 3,000 kr bidragstillägg</tspan>
          </text>
        </g>

        {/* Nettokostnad */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('net-cost')}>
          <rect x="400" y="150" width="200" height="80" rx="5"
                className={`${activeNode === 'net-cost' ? 'fill-blue-600' : 'fill-blue-500'} transition-colors`} />
          <text x="500" y="190" textAnchor="middle" className="text-white">
            <tspan x="500" y="175" className="text-sm">Nettokostnad</tspan>
            <tspan x="500" y="205" className="text-base font-bold">1,292 mdr/år</tspan>
          </text>
        </g>

        {/* Systemeffekter */}
        <g className="system-effects">
          <g className="hover:cursor-pointer" onClick={() => setActiveNode('admin-savings')}>
            <rect x="750" y="50" width="180" height="80" rx="5"
                  className={`${activeNode === 'admin-savings' ? 'fill-purple-600' : 'fill-purple-500'} transition-colors`} />
            <text x="840" y="85" textAnchor="middle" className="text-white text-sm">
              <tspan x="840" y="75">Administrativa</tspan>
              <tspan x="840" y="95">besparingar</tspan>
              <tspan x="840" y="115">230 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('health')}>
            <rect x="750" y="150" width="180" height="80" rx="5"
                  className={`${activeNode === 'health' ? 'fill-purple-600' : 'fill-purple-500'} transition-colors`} />
            <text x="840" y="185" textAnchor="middle" className="text-white text-sm">
              <tspan x="840" y="175">Hälsoeffekter</tspan>
              <tspan x="840" y="195">180 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('social')}>
            <rect x="750" y="250" width="180" height="80" rx="5"
                  className={`${activeNode === 'social' ? 'fill-purple-600' : 'fill-purple-500'} transition-colors`} />
            <text x="840" y="285" textAnchor="middle" className="text-white text-sm">
              <tspan x="840" y="275">Sociala</tspan>
              <tspan x="840" y="295">besparingar</tspan>
              <tspan x="840" y="315">90 mdr/år</tspan>
            </text>
          </g>

          <g className="hover:cursor-pointer" onClick={() => setActiveNode('innovation')}>
            <rect x="750" y="350" width="180" height="80" rx="5"
                  className={`${activeNode === 'innovation' ? 'fill-purple-600' : 'fill-purple-500'} transition-colors`} />
            <text x="840" y="385" textAnchor="middle" className="text-white text-sm">
              <tspan x="840" y="375">Innovation &</tspan>
              <tspan x="840" y="395">Entreprenörskap</tspan>
              <tspan x="840" y="415">120 mdr/år</tspan>
            </text>
          </g>
        </g>

        {/* Total effekt */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('total-effect')}>
          <rect x="750" y="580" width="180" height="100" rx="5"
                className={`${activeNode === 'total-effect' ? 'fill-orange-600' : 'fill-orange-500'} transition-colors`} />
          <text x="840" y="630" textAnchor="middle" className="text-white">
            <tspan x="840" y="610" className="text-sm">Total effekt</tspan>
            <tspan x="840" y="640" className="text-base font-bold">620</tspan>
            <tspan x="840" y="660" className="text-sm">miljarder/år</tspan>
          </text>
        </g>

        {/* Flödespilar med markeringar */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" className="fill-gray-400" />
          </marker>
        </defs>

        {/* Flödespilar från källor till system */}
        <path d="M230,90 H400 V300" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M230,190 H400 V300" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M230,290 H400 V300" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M230,390 H400 V300" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M230,490 H400 V300" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />

        {/* Flödespilar från system till effekter */}
        <path d="M600,370 H750 V90" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M600,370 H750 V190" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M600,370 H750 V290" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
        <path d="M600,370 H750 V390" className="stroke-gray-400 stroke-2 fill-none marker-end-[url(#arrowhead)]" />
      </svg>

      {/* Information Box */}
      {activeNode && (
        <>
          {/* Overlay to handle clicks outside the info box */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setActiveNode('')}
          />
          
          <div className="absolute top-0 right-0 bg-white p-4 rounded-lg shadow-lg max-w-xs z-20">
            <button 
              onClick={() => setActiveNode('')}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Stäng"
            >
              ×
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-500" />
              <h4 className="font-semibold">
                {getNodeTitle(activeNode)}
              </h4>
            </div>
            <p className="text-sm text-gray-600">
              {getNodeDescription(activeNode)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

// Helper functions for node information
const getNodeTitle = (node: string): string => {
  const titles: Record<string, string> = {
    automation: 'Automatiseringsdividend',
    resources: 'Resursbeskattning',
    financial: 'Finansiella transaktioner',
    carbon: 'Koldioxidprissättning',
    digital: 'Digital ekonomi',
    'total-financing': 'Total finansiering',
    'aubi-system': 'AUBI-systemet',
    'net-cost': 'Nettokostnad',
    'admin-savings': 'Administrativa besparingar',
    health: 'Hälsoeffekter',
    social: 'Sociala besparingar',
    innovation: 'Innovation & Entreprenörskap',
    'total-effect': 'Total systemeffekt'
  };
  return titles[node] || '';
};

const getNodeDescription = (node: string): string => {
  const descriptions: Record<string, string> = {
    automation: 'Avgifter från automatisering och AI som återför produktivitetsvinster till samhället. Beräknad till 400-500 miljarder kronor årligen.',
    resources: 'Avgifter från natur-, data- och markresurser som gynnar hela samhället. Genererar 500-700 miljarder kronor per år.',
    financial: 'Skatter på finansiella transaktioner för att minska spekulation och återföra värde till samhället. Bidrar med 200-250 miljarder kronor årligen.',
    carbon: 'Prissättning av koldioxidutsläpp som driver omställning och genererar intäkter. Beräknad till 200 miljarder kronor per år.',
    digital: 'Beskattning av digitala tjänster och datavärde som bidrar med cirka 180 miljarder kronor årligen.',
    'total-financing': 'Total finansiering från alla källor uppgår till 1,660-2,010 miljarder kronor per år, vilket säkrar systemets långsiktiga hållbarhet.',
    'aubi-system': 'Kärnkomponenten som distribuerar grundinkomst plus tillägg baserat på behov och samhällsbidrag. Grundbelopp 15,000 kr/månad plus möjliga tillägg.',
    'net-cost': 'Systemets nettokostnad efter hänsyn till alla finansieringskällor och besparingar. Uppgår till 1,292 miljarder kronor årligen.',
    'admin-savings': 'Besparingar från förenklad administration och minskat byråkrati. Genererar 230 miljarder kronor i årliga besparingar.',
    health: 'Minskade vårdkostnader genom förbättrad folkhälsa, särskilt mental hälsa. Sparar 180 miljarder kronor årligen.',
    social: 'Besparingar från minskad kriminalitet och sociala problem. Bidrar med 90 miljarder kronor per år i minskade samhällskostnader.',
    innovation: 'Ökat entreprenörskap och innovation när människor vågar testa nya idéer. Genererar 120 miljarder kronor i årligt ekonomiskt värde.',
    'total-effect': 'De samlade positiva systemeffekterna uppgår till 620 miljarder kronor årligen, vilket minskar systemets nettokostnad avsevärt.'
  };
  return descriptions[node] || '';
};

export default AUBIFlowDiagram;
