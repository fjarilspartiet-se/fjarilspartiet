import React, { useState } from 'react';
import { Info } from 'lucide-react';

const AUBIKMSIEffectsDiagram = ({ className = '' }) => {
  const [activeNode, setActiveNode] = useState('');

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1000 720"
        className="w-full h-auto"
        aria-labelledby="aubi-kmsi-title aubi-kmsi-desc"
      >
        <title id="aubi-kmsi-title">AUBI:s effekter på kärlek, mening och sammanhang</title>
        <desc id="aubi-kmsi-desc">
          Ett diagram som visar hur AUBI främjar mänskligt välbefinnande genom att stärka kärlek, mening och sammanhang
        </desc>

        {/* Background gradient */}
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1000" height="720" fill="url(#bg-gradient)" rx="10" />

        {/* AUBI Central Node */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('aubi')}>
          <circle cx="500" cy="350" r="80" 
                  className={`${activeNode === 'aubi' ? 'fill-blue-600' : 'fill-blue-500'} transition-colors`} />
          <text x="500" y="340" textAnchor="middle" className="text-white font-bold text-xl">AUBI</text>
          <text x="500" y="370" textAnchor="middle" className="text-white text-sm">Ekonomisk grundtrygghet</text>
        </g>

        {/* Kärlek Dimension */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('karlek')}>
          <circle cx="280" cy="180" r="70" 
                  className={`${activeNode === 'karlek' ? 'fill-red-600' : 'fill-red-500'} transition-colors`} />
          <text x="280" y="180" textAnchor="middle" className="text-white font-bold text-lg">Kärlek</text>
        </g>

        {/* Kärlek Subnodes */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('sjalvkarlek')}>
          <circle cx="140" cy="100" r="45" 
                  className={`${activeNode === 'sjalvkarlek' ? 'fill-red-400' : 'fill-red-300'} transition-colors`} />
          <text x="140" y="100" textAnchor="middle" className="text-white text-sm">Självkärlek</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('relationer')}>
          <circle cx="250" cy="60" r="45" 
                  className={`${activeNode === 'relationer' ? 'fill-red-400' : 'fill-red-300'} transition-colors`} />
          <text x="250" y="60" textAnchor="middle" className="text-white text-sm">Relationer</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('medkansla')}>
          <circle cx="360" cy="100" r="45" 
                  className={`${activeNode === 'medkansla' ? 'fill-red-400' : 'fill-red-300'} transition-colors`} />
          <text x="360" y="100" textAnchor="middle" className="text-white text-sm">Medkänsla</text>
        </g>

        {/* Mening Dimension */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('mening')}>
          <circle cx="720" cy="180" r="70" 
                  className={`${activeNode === 'mening' ? 'fill-purple-600' : 'fill-purple-500'} transition-colors`} />
          <text x="720" y="180" textAnchor="middle" className="text-white font-bold text-lg">Mening</text>
        </g>

        {/* Mening Subnodes */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('arbete')}>
          <circle cx="640" cy="60" r="45" 
                  className={`${activeNode === 'arbete' ? 'fill-purple-400' : 'fill-purple-300'} transition-colors`} />
          <text x="640" y="60" textAnchor="middle" className="text-white text-sm">Arbete</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('kreativitet')}>
          <circle cx="750" cy="60" r="45" 
                  className={`${activeNode === 'kreativitet' ? 'fill-purple-400' : 'fill-purple-300'} transition-colors`} />
          <text x="750" y="60" textAnchor="middle" className="text-white text-sm">Kreativitet</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('larande')}>
          <circle cx="860" cy="100" r="45" 
                  className={`${activeNode === 'larande' ? 'fill-purple-400' : 'fill-purple-300'} transition-colors`} />
          <text x="860" y="100" textAnchor="middle" className="text-white text-sm">Lärande</text>
        </g>

        {/* Sammanhang Dimension */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('sammanhang')}>
          <circle cx="500" cy="580" r="70" 
                  className={`${activeNode === 'sammanhang' ? 'fill-blue-600' : 'fill-blue-500'} transition-colors`} />
          <text x="500" y="580" textAnchor="middle" className="text-white font-bold text-lg">Sammanhang</text>
        </g>

        {/* Sammanhang Subnodes */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('inre')}>
          <circle cx="360" cy="620" r="45" 
                  className={`${activeNode === 'inre' ? 'fill-blue-400' : 'fill-blue-300'} transition-colors`} />
          <text x="360" y="620" textAnchor="middle" className="text-white text-sm">Inre</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('socialt')}>
          <circle cx="460" cy="670" r="45" 
                  className={`${activeNode === 'socialt' ? 'fill-blue-400' : 'fill-blue-300'} transition-colors`} />
          <text x="460" y="670" textAnchor="middle" className="text-white text-sm">Socialt</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('natur')}>
          <circle cx="560" cy="670" r="45" 
                  className={`${activeNode === 'natur' ? 'fill-blue-400' : 'fill-blue-300'} transition-colors`} />
          <text x="560" y="670" textAnchor="middle" className="text-white text-sm">Natur</text>
        </g>

        <g className="hover:cursor-pointer" onClick={() => setActiveNode('existentiellt')}>
          <circle cx="660" cy="620" r="45" 
                  className={`${activeNode === 'existentiellt' ? 'fill-blue-400' : 'fill-blue-300'} transition-colors`} />
          <text x="660" y="620" textAnchor="middle" className="text-white text-sm">Existentiellt</text>
        </g>

        {/* Lekfullhet as an emergent property */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('lekfullhet')}>
          <circle cx="500" cy="120" r="50" 
                  className={`${activeNode === 'lekfullhet' ? 'fill-yellow-500' : 'fill-yellow-400'} transition-colors`} />
          <text x="500" y="120" textAnchor="middle" className="text-white font-bold text-base">Lekfullhet</text>
        </g>

        {/* Frihet as an emergent property (right side) */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('freedom')}>
          <circle cx="720" cy="520" r="50" 
                  className={`${activeNode === 'freedom' ? 'fill-green-500' : 'fill-green-400'} transition-colors`} />
          <text x="720" y="520" textAnchor="middle" className="text-white font-bold text-base">Frihet</text>
        </g>

        {/* Motståndskraft as an emergent property (left side) */}
        <g className="hover:cursor-pointer" onClick={() => setActiveNode('resilience')}>
          <circle cx="280" cy="520" r="50" 
                  className={`${activeNode === 'resilience' ? 'fill-teal-500' : 'fill-teal-400'} transition-colors`} />
          <text x="280" y="520" textAnchor="middle" className="text-white font-bold text-base">Resiliens</text>
        </g>

        {/* Connecting lines to Playfulness, Freedom and Resilience */}
        <path d="M500,430 L650,500" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M500,430 L350,500" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Lines from AUBI to main dimensions */}
        <path d="M470,290 L330,220" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M570,290 L670,220" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M500,430 L500,520" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M500,270 L500,160" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

        {/* Lines from main dimensions to subnodes */}
        {/* Kärlek */}
        <path d="M240,150 L170,120" stroke="#f9a8d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M280,140 L260,90" stroke="#f9a8d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M320,150 L340,120" stroke="#f9a8d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

        {/* Mening */}
        <path d="M680,150 L650,90" stroke="#d8b4fe" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M720,140 L740,90" stroke="#d8b4fe" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M760,150 L830,120" stroke="#d8b4fe" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

        {/* Sammanhang */}
        <path d="M460,610 L390,620" stroke="#93c5fd" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M480,640 L470,650" stroke="#93c5fd" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M520,640 L550,650" stroke="#93c5fd" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M540,610 L630,620" stroke="#93c5fd" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

        {/* Circles connecting the three main dimensions */}
        <path d="M340,220 A270,270 0 0,1 670,220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
        <path d="M670,220 A270,270 0 0,1 560,530" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
        <path d="M560,530 A270,270 0 0,1 340,220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
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
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode('');
              }}
              className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-sm text-gray-400 hover:text-gray-600 bg-transparent"
              aria-label="Stäng"
            >
              ✕
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
    aubi: 'AUBI',
    karlek: 'Kärlek',
    sjalvkarlek: 'Självkärlek',
    relationer: 'Mellanmänskliga relationer',
    medkansla: 'Universell medkänsla',
    mening: 'Mening',
    arbete: 'Meningsfullt arbete',
    kreativitet: 'Kreativt skapande',
    larande: 'Livslångt lärande',
    sammanhang: 'Sammanhang',
    inre: 'Inre sammanhang',
    socialt: 'Socialt sammanhang',
    natur: 'Sammanhang med naturen',
    existentiellt: 'Existentiellt sammanhang',
    lekfullhet: 'Lekfullhet',
    freedom: 'Frihet',
    resilience: 'Motståndskraft'
  };
  return titles[node] || '';
};

const getNodeDescription = (node: string): string => {
  const descriptions: Record<string, string> = {
    aubi: 'AUBI (Adaptiv Universell Basinkomst) skapar ekonomisk trygghet som möjliggör fördjupad kärlek, mening och sammanhang. När de basala behoven är säkrade kan människor utveckla och förverkliga sin fulla potential.',
    karlek: 'Kärlek innefattar tre dimensioner: självkärlek, mellanmänskliga relationer och universell medkänsla. AUBI ger människor tid och utrymme att utveckla alla dessa dimensioner.',
    sjalvkarlek: 'AUBI ger tid för självomvårdnad och återhämtning. När ekonomisk stress minskar får människor möjlighet att utveckla en hälsosam relation till sig själva, vilket är grunden för allt annat välbefinnande.',
    relationer: 'Med ekonomisk grundtrygghet kan människor investera mer tid och energi i sina relationer. AUBI möjliggör djupare omsorg om familj, vänner och lokalsamhälle.',
    medkansla: 'När grundbehoven är tillgodosedda ökar kapaciteten för medkänsla bortom den närmaste kretsen. AUBI främjar en kultur där omsorg om alla människor värderas och möjliggörs.',
    mening: 'Mening uppstår när vi engagerar oss i aktiviteter som känns värdefulla och meningsfulla. AUBI frigör människor att söka mening genom arbete, kreativitet och lärande.',
    arbete: 'AUBI gör det möjligt att välja arbete utifrån meningsfullhet och samhällsnytta snarare än enbart försörjningsbehov. Det möjliggör även arbete som inte direkt värdesätts på marknaden.',
    kreativitet: 'Med ekonomisk trygghet kan människor utforska sin kreativitet och skapa utan kommersiell press. AUBI stödjer en rik kultur där skapande värderas för sin egen skull.',
    larande: 'AUBI möjliggör livslångt lärande och kompetensutveckling. Människor kan ta tid för utbildning, omskolning och fördjupning i nya kunskapsområden.',
    sammanhang: 'Sammanhang handlar om upplevelsen av att vara en del av något större. AUBI stärker människors möjligheter att känna sammanhang på flera nivåer.',
    inre: 'AUBI ger tid för kontemplation och självreflektion, vilket ökar inre koherens och sammanhang. När yttre stress minskar kan vi lättare lyssna inåt.',
    socialt: 'Med ekonomisk trygghet kan människor aktivt delta i och bidra till sina lokalsamhällen. AUBI stärker sociala band och främjar gemenskapskänsla.',
    natur: 'AUBI ger tid att vistas i och värna om naturen. När ekonomiska behov är tillgodosedda kan miljömedvetenhet och ekologiskt ansvarstagande prioriteras högre.',
    existentiellt: 'Med grundtryggheten AUBI skapar får människor utrymme att utforska livets större frågor och utveckla en djupare mening med livet.',
    lekfullhet: 'När kärlek, mening och sammanhang finns i balans uppstår ofta en naturlig lekfullhet. AUBI frigör människors inneboende nyfikenhet och glädje, vilket leder till innovation och välbefinnande.',
    freedom: 'När människor upplever kärlek, mening och sammanhang växer deras känsla av genuin frihet. Detta är inte bara frihet från ekonomiska begränsningar, utan friheten att utvecklas och förverkliga sig själv. AUBI skapar förutsättningar för människor att utöva sin frihet på ett sätt som förstärker samhällets kollektiva välbefinnande.',
    resilience: 'Kärlek, mening och sammanhang bygger naturligt en djup motståndskraft mot livets utmaningar. När människor känner sig trygga, har meningsfulla mål och ingår i stödjande gemenskaper ökar deras förmåga att hantera förändringar och kriser. AUBI stärker denna kollektiva och individuella resiliens genom att skapa stabilitet även i oroliga tider.'
  };
  return descriptions[node] || '';
};

export default AUBIKMSIEffectsDiagram;
