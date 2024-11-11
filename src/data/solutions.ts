// data/solutions.ts

import { Shield, Sprout, Network, Target, Calculator, HeartHandshake, 
         Users, Leaf, Trees, LeafyGreen, ChartNoAxesCombined, Code,
         Compass, Heart, Book, Stars, Layers, Wind, Rocket, Building } from 'lucide-react';

export const TABS = [
  { id: 'aubi', label: 'AUBI', icon: Shield },
  { id: 'hallbarhet', label: 'Hållbarhet', icon: Sprout },
  { id: 'demokrati', label: 'Demokrati', icon: Network },
  { id: 'utbildning', label: 'Utbildning', icon: Book },
  { id: 'projekt', label: 'Pilotprojekt', icon: Target }
];

export const AUBI_CONTENT = {
  title: 'AUBI - Adaptiv Universell Basinkomst',
  sections: [
    {
      title: 'Hur det fungerar',
      description: 'AUBI är ett intelligent ekonomiskt grundskydd som anpassar sig efter individuella behov och livssituationer. Systemet ersätter dagens komplexa bidragssystem med en transparent och förutsägbar grund för alla medborgare.',
      items: [
        { icon: Shield, text: 'Grundbelopp: 12,000 kr/månad för alla vuxna' },
        { icon: Calculator, text: 'Adaptiva tillägg baserade på individuella behov och samhällsinsatser' },
        { icon: HeartHandshake, text: 'Erkännande av olika former av samhällsbidrag' }
      ]
    },
    {
      title: 'Finansiering och genomförande',
      description: 'AUBI finansieras genom en kombination av:',
      items: [
        { text: 'Omfördelning av befintliga välfärdsresurser' },
        { text: 'Automatiseringsskatt på robotiserad produktion' },
        { text: 'Effektivisering av administrativa kostnader' },
        { text: 'Minskade kostnader för sociala problem' }
      ]
    }
  ],
  evidence: [
    {
      title: 'Från pilotprojekt',
      items: ['Ökat välmående och framtidstro']
    },
    {
      title: 'Ekonomiska effekter',
      items: [
        'Ökad lokal ekonomisk aktivitet',
        'Minskade sjukvårdskostnader',
        'Ökad innovation och företagsamhet'
      ]
    },
    {
      title: 'Samhällseffekter',
      items: [
        'Starkare lokalsamhällen',
        'Ökad social sammanhållning',
        'Mer tid för familj och engagemang'
      ]
    }
  ]
};

export const HALLBARHET_CONTENT = {
  title: 'Hållbar samhällsomställning',
  sections: [
    {
      title: 'Lokala matsystem',
      description: 'Vårt program för lokal matsuveränitet kombinerar modern teknik med beprövade odlingsmetoder för att skapa motståndskraftiga matsystem.',
      items: [
        { icon: Leaf, text: 'Stadsodling minskar transportbehov' },
        { icon: Trees, text: 'Skogsträdgårdar ökar biologisk mångfald' },
        { icon: LeafyGreen, text: 'Lokala matmarknader stärker ekonomin' }
      ]
    },
    {
      title: 'Energiomställning',
      description: 'En kombination av förnybar energi och smart energianvändning:',
      items: [
        { text: 'Solceller på alla lämpliga tak' },
        { text: 'Lokala energigemenskaper' },
        { text: 'Smart lastbalansering' },
        { text: 'Energilagring i batterier och vätgas' }
      ]
    }
  ]
};

export const DEMOKRATI_CONTENT = {
  title: 'Digital demokrati och deltagande',
  sections: [
    {
      title: 'DPOP Platform',
      description: 'Vår digitala plattform för direktdemokrati möjliggör:',
      items: [
        { icon: Network, text: 'Säker digital röstning med öppen källkod' },
        { icon: Code, text: 'Transparent beslutsfattande och spårbarhet' }
      ],
      link: {
        text: 'Utforska DPOP på GitHub',
        url: 'https://github.com/BjornKennethHolmstrom/DPOP'
      }
    },
    {
      title: 'Evidensbaserade resultat',
      description: 'Forskning om digital demokrati visar:',
      items: [
        { icon: Users, text: 'Ökat medborgardeltagande i beslutsprocesser genom digitala verktyg' },
        { icon: ChartNoAxesCombined, text: 'Högre tillfredsställelse med demokratiska processer vid användning av digitala plattformar' },
        { icon: Target, text: 'Signifikant förbättrad implementering av beslut när medborgare involveras digitalt' }
      ]
    }
  ]
};

export const UTBILDNING_CONTENT = {
  title: 'Meningsfull utbildning',
  sections: [
    {
      title: 'Ett nytt syfte med utbildning',
      description: 'Vi vill skapa ett utbildningssystem som inte bara förmedlar kunskap, utan ger unga människor möjlighet att utforska vad de vill leva för och utveckla verktygen för att förverkliga detta.',
      items: [
        { icon: Compass, text: 'Rum för existentiell reflektion och livsfrågor' },
        { icon: Network, text: 'Systemtänkande och förståelse för samband' },
        { icon: Heart, text: 'Emotionell intelligens och empatisk förmåga' },
        { icon: Stars, text: 'Stöd att upptäcka och utveckla personlig potential' }
      ]
    },
    {
      title: 'Demokratiskt deltagande',
      description: 'Barn och unga är inte bara framtida medborgare - de är medborgare nu. Vi skapar strukturer för reellt inflytande:',
      items: [
        { icon: Users, text: 'Lokala barn- och ungdomsparlament med verklig beslutsmakt' },
        { icon: Target, text: 'Stärkta elevråd med egen budget för initiativ' },
        { icon: Shield, text: 'Konsekvensanalyser för barn och unga vid politiska beslut' },
        { icon: Network, text: 'Digital plattform anpassad för ungas demokratiska deltagande' }
      ]
    },
    {
      title: 'Personanpassade lärandevägar',
      description: 'Ett flexibelt system som erkänner olika sätt att lära och utvecklas:',
      items: [
        { icon: Layers, text: 'Projektbaserat lärande kopplat till samhällsutmaningar' },
        { icon: Wind, text: 'Integration av meditation och reflektion i skoldagen' },
        { icon: Rocket, text: 'Stöd för elevinitierade projekt och utforskande' },
        { icon: Building, text: 'Samarbete med lokala föreningar och initiativ' }
      ]
    }
  ],
  evidence: [
    {
      title: 'Vetenskapligt stöd',
      items: [
        'Ökad studiemotivation när lärandet kopplas till mening',
        'Bättre psykisk hälsa med tid för reflektion',
        'Starkare ledarskapsförmågor genom projektbaserat lärande',
        'Förbättrade akademiska resultat när elever har reellt inflytande'
      ]
    },
    {
      title: 'Pilotprojekt',
      items: [
        'Framgångsrika exempel från skolor som integrerat meningssökande',
        'Positiv feedback från både elever och lärare',
        'Stärkt samarbete mellan skola och lokalsamhälle',
        'Ökad demokratisk kompetens genom aktivt deltagande'
      ]
    }
  ]
};

export const PROJEKT_CONTENT = {
  title: 'Aktiva projekt och initiativ',
  projects: [
    {
      title: 'DPOP - Digital parti-operations-plattform',
      status: 'Tidig utvecklingsfas',
      items: [
        'Öppen källkod demokratiplattform',
        'Stödjer hybridstyrning och flexibel beslutsfattning'
      ],
      linkText: 'Bidra till utvecklingen',
      linkHref: 'https://github.com/BjornKennethHolmstrom/DPOP'
    },
    {
      title: 'CommuniTree - Samhällsengagemang',
      status: 'Under aktiv utveckling',
      items: [
        'Plattform för lokal samverkan',
        'Sammankopplar volontärer med behov',
        'Stödjer generationsöverskridande samarbete',
        'Integrerar med kommunala tjänster'
      ],
      linkText: 'Utforska projektet',
      linkHref: 'https://github.com/BjornKennethHolmstrom/CommuniTree'
    },
    {
      title: 'MU - Plattform för meningsfull utbildning',
      status: 'Konceptfas',
      items: [
        'Digitala verktyg för reflektion och meningssökande',
        'Stöd för mentorskap och samarbete mellan åldrar',
        'Integration med DPOP för elevdemokrati',
        'Resursbank för lärare och pedagoger'
      ],
      linkText: 'Läs mer om projektet',
      linkHref: '/utbildning'
    }
  ],
  proposals: [
    {
      title: 'EnergyShare',
      description: 'Plattform för lokal energidelning och smart nätbalansering.'
    },
    {
      title: 'FoodWeb',
      description: 'System för att koppla samman lokala matproducenter med konsumenter.'
    }
  ]
};

export const REFERENCES = {
  aubiStats: {
    title: 'Effekter av UBI',
    references: [
      {
        title: 'Ökat välmående och framtidstro',
        source: 'Finland Basic Income Trial (2019)',
        link: 'https://julkaisut.valtioneuvosto.fi/handle/10024/161361'
      }
    ]
  },
  digitalDemocracy: {
    title: 'Digital demokrati och deltagande',
    references: [
      {
        title: 'A New Wave of Deliberative Democracy',
        source: '[Läs mer]',
        link: 'https://carnegieendowment.org/research/2019/11/a-new-wave-of-deliberative-democracy?lang=en&center=europe'
      },
      {
        title: 'Empowering Digital Democracy',
        source: '[DOI: 10.1017/S1537592724000409]',
        link: 'https://www.cambridge.org/core/journals/perspectives-on-politics/article/empowering-digital-democracy/D39CBD8C8061EA6EE1B0FE0D64FA9E5D'
      }
    ]
  }
};
