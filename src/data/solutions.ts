// data/solutions.ts

import { Shield, Sprout, Network, Target, Calculator, HeartHandshake, 
         Users, Leaf, Trees, LeafyGreen, Compass, Heart, Book, Stars, 
         Layers, Wind, Rocket, Building, Route, Clock, Layout, Microscope,
         TreeDeciduous, Brain, Workflow, Recycle, Bot, Mountain, TrendingUp,
         Database, Minimize, Flower, Home, Store, Sun, Zap, Battery, Droplets, 
         GitBranch, Globe, TreePine, HeartPulse, Palette, Shrub, Bike, Lock,
         User, Wallet, School, Link, Eye, MessageCircle, BookOpen, Scale, 
         Coins, Map as MapIcon } from 'lucide-react';

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
      title: 'Grundprinciper',
      description: 'Ett intelligent och etiskt grundat ekonomiskt trygghetssystem som anpassar sig efter individuella behov:',
      items: [
        { icon: Shield, text: 'Grundbelopp: 12,000 kr/månad för alla vuxna' },
        { icon: Calculator, text: 'Behovstillägg upp till 4,000 kr baserat på livssituation' },
        { icon: HeartHandshake, text: 'Bidragstillägg upp till 3,000 kr för samhällsinsatser' },
        { icon: Target, text: 'Transparent och förutsägbar grund för alla' }
      ]
    },
    {
      title: 'Finansieringsmodell',
      description: 'Ett hållbart finansieringssystem baserat på etisk beskattning och systemeffektivisering:',
      items: [
        { icon: Recycle, text: 'Omfördelning av befintliga välfärdsresurser (~400 miljarder/år)' },
        { icon: Bot, text: 'Automatiseringsdividend från robotisering (200-300 miljarder/år)' },
        { icon: Mountain, text: 'Resursutvinningsskatt (100-150 miljarder/år)' },
        { icon: TrendingUp, text: 'Finansiell transaktionsskatt (50-70 miljarder/år)' },
        { icon: Database, text: 'Dataskatt på kommersiell dataanvändning (30-50 miljarder/år)' }
      ]
    },
    {
      title: 'Systemiska besparingar',
      description: 'Effektiviseringar och förebyggande effekter:',
      items: [
        { icon: Minimize, text: 'Minskad byråkrati och administration (50-75 miljarder/år)' },
        { icon: Heart, text: 'Förbättrad folkhälsa (25-35 miljarder/år)' },
        { icon: Shield, text: 'Minskad kriminalitet (15-25 miljarder/år)' },
        { icon: Flower, text: 'Förbättrade utbildningsresultat (10-15 miljarder/år)' }
      ]
    },
    {
      title: 'Implementation',
      description: 'Fasad införing för säker övergång:',
      items: [
        { icon: Target, text: 'Fas 1: Pilotprojekt i utvalda kommuner (1 år)' },
        { icon: GitBranch, text: 'Fas 2: Regional expansion med kontinuerlig utvärdering (2 år)' },
        { icon: Globe, text: 'Fas 3: Nationell utrullning med systematisk uppföljning (3+ år)' }
      ]
    }
  ],
  evidence: [
    {
      title: 'Ekonomiska effekter',
      items: [
        'Ökad lokal ekonomisk aktivitet',
        'Stärkt entreprenörskap och innovation',
        'Minskade samhällskostnader',
        'Effektivare resursanvändning',
        'Stabilare ekonomisk grund för alla'
      ]
    },
    {
      title: 'Sociala effekter',
      items: [
        'Förbättrad mental hälsa',
        'Ökad social rörlighet',
        'Stärkta lokalsamhällen',
        'Mer tid för familj och engagemang',
        'Minskad ekonomisk stress'
      ]
    },
    {
      title: 'Systemiska fördelar',
      items: [
        'Förenklad administration',
        'Transparent och rättvist system',
        'Ökad ekonomisk resiliens',
        'Stärkt demokratiskt deltagande',
        'Främjar hållbar utveckling'
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
      title: 'Hälsosam stadsutveckling',
      description: 'Ett alternativ till ohälsosam förtätning som prioriterar människors välmående:',
      items: [
        { icon: Users, text: 'Städer designade för människor, inte bilar' },
        { icon: Shrub, text: 'Integrerade grönytor och naturområden' },
        { icon: Home, text: 'Maximalt 4-5 våningar som standard' },
        { icon: Heart, text: 'Fokus på social sammanhållning och möten' }
      ]
    },
    {
      title: '15-minutersstaden',
      description: 'Decentraliserad stadsplanering där allt viktigt finns nära:',
      items: [
        { icon: Clock, text: 'Alla vardagstjänster inom 15 minuters gång' },
        { icon: Building, text: 'Decentraliserade centrum i varje område' },
        { icon: Bike, text: 'Prioritet för gång och cykel' },
        { icon: Store, text: 'Lokala verksamheter och service' }
      ]
    },
    {
      title: 'Energiomställning',
      description: 'En kombination av förnybar energi och smart energianvändning:',
      items: [
        { icon: Sun, text: 'Solceller på alla lämpliga tak' },
        { icon: Users, text: 'Lokala energigemenskaper' },
        { icon: Zap, text: 'Smart lastbalansering' },
        { icon: Battery, text: 'Energilagring i batterier och vätgas' }
      ]
    },
    {
      title: 'Cirkulära system',
      description: 'Integrerade system för resurseffektivitet:',
      items: [
        { icon: Droplets, text: 'Lokal dagvattenhantering och regnvatteninsamling' },
        { icon: Recycle, text: 'Cirkulär avfallshantering' },
        { icon: Sprout, text: 'Naturbaserade lösningar' },
        { icon: TreePine, text: 'Grön infrastruktur för klimatanpassning' }
      ]
    },
    {
      title: 'Social infrastruktur',
      description: 'Strukturer som främjar gemenskap och välmående:',
      items: [
        { icon: Users, text: 'Gemenskapslokaler och mötesplatser' },
        { icon: Book, text: 'Bibliotek och kulturhus' },
        { icon: HeartPulse, text: 'Hälsocenter och vårdcentraler' },
        { icon: Palette, text: 'Rum för kultur och kreativitet' }
      ]
    }
  ],
  evidence: [
    {
      title: 'Miljöeffekter',
      items: [
        'Minskade koldioxidutsläpp genom närproduktion',
        'Ökad biologisk mångfald i staden',
        'Bättre luftkvalitet och mikroklimat',
        'Effektivare resursanvändning'
      ]
    },
    {
      title: 'Hälsoeffekter',
      items: [
        'Bättre fysisk och mental hälsa',
        'Ökad rörelse i vardagen',
        'Mer social interaktion',
        'Minskad stress genom närhet till natur'
      ]
    },
    {
      title: 'Sociala effekter',
      items: [
        'Starkare lokalsamhällen',
        'Ökad social sammanhållning',
        'Mer levande stadsmiljöer',
        'Bättre förutsättningar för lokala verksamheter'
      ]
    }
  ]
};

export const DEMOKRATI_CONTENT = {
  title: 'Digital demokrati och flernivådeltagande',
  sections: [
    {
      title: 'DidiS - Digital direktdemokrati',
      description: 'En öppen demokratiplattform som möjliggör deltagande på alla nivåer:',
      items: [
        { icon: Network, text: 'Säker digital röstning med öppen källkod' },
        { icon: Lock, text: 'Transparent och spårbar beslutsprocess' },
        { icon: Users, text: 'Medborgardialoger och deltagarprocesser' },
        { icon: Globe, text: 'Integration med kommunala och regionala system' }
      ],
      link: {
        text: 'Utforska DidiS på GitHub',
        url: 'https://github.com/fjarilspartiet-se/DidiS'
      }
    },
    {
      title: 'Progressiv demokrati för unga',
      description: 'Ett system där ungas röster och rättigheter stärks gradvis:',
      items: [
        { icon: User, text: '13-15 år: Lokal deltaganderätt och rösträtt i ungdomsråd' },
        { icon: Users, text: '16-17 år: Rösträtt i kommunalval och folkomröstningar' },
        { icon: Wallet, text: 'Progressiv AUBI-implementation från 13 års ålder' },
        { icon: School, text: 'Reellt inflytande i skola och lokalsamhälle' }
      ]
    },
    {
      title: 'Integrerad flernivådemokrati',
      description: 'Sammankopplad demokratisk utveckling på alla nivåer:',
      items: [
        { icon: GitBranch, text: 'Kaskaderande medborgardialoger mellan nivåer' },
        { icon: Layers, text: 'Synkroniserade beslutsprocesser' },
        { icon: Link, text: 'Transparent ärendespårning mellan instanser' },
        { icon: Workflow, text: 'AI-stödd analys och syntes av input' }
      ]
    },
    {
      title: 'Digital infrastruktur',
      description: 'Tekniska system som möjliggör verklig demokrati:',
      items: [
        { icon: Shield, text: 'Säker identitetshantering och röstning' },
        { icon: Eye, text: 'Transparent spårning av beslutskedjor' },
        { icon: MessageCircle, text: 'Integrerade diskussionsforum' },
        { icon: Bot, text: 'Etisk AI-assistans för beslutsfattande' }
      ]
    },
    {
      title: 'Kunskapsbaserat beslutsfattande',
      description: 'System för att stärka kvaliteten i demokratiska beslut:',
      items: [
        { icon: Brain, text: 'AI-stödd konsekvensanalys' },
        { icon: BookOpen, text: 'Integrerad forskningsdata' },
        { icon: Users, text: 'Expertpaneler och medborgarråd' },
        { icon: Scale, text: 'Balanserad information om alternativen' }
      ]
    },
    {
      title: 'Lokal demokrati',
      description: 'Stärkt demokrati på lokal nivå:',
      items: [
        { icon: Home, text: 'Grannskapsdemokrati och lokala initiativ' },
        { icon: Coins, text: 'Lokal budgetering med medborgarinflytande' },
        { icon: MapIcon, text: 'Områdesbaserade utvecklingsplaner' },
        { icon: Leaf, text: 'Stöd för gräsrotsinitiativ' }
      ]
    }
  ],
  evidence: [
    {
      title: 'Demokratisk utveckling',
      items: [
        'Ökad deltagande i beslutsprocesser',
        'Stärkt demokratisk kompetens',
        'Bättre förankrade beslut',
        'Ökat förtroende för demokratiska institutioner',
        'Stärkt ungdomsengagemang genom progressiva rättigheter'
      ]
    },
    {
      title: 'Tekniska resultat',
      items: [
        'Säker och tillförlitlig digital röstning',
        'Effektiv ärendehantering mellan nivåer',
        'Förbättrad transparens och spårbarhet',
        'Framgångsrik AI-stödd beslutsanalys'
      ]
    },
    {
      title: 'Sociala effekter',
      items: [
        'Stärkt social sammanhållning',
        'Ökat ungdomsengagemang',
        'Förbättrad generationsintegration',
        'Mer levande lokaldemokrati'
      ]
    }
  ]
};

export const UTBILDNING_CONTENT = {
  title: 'Transformation av utbildningssystemet',
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
      title: 'Radikal individualisering',
      description: 'Ett nytt paradigm där barns inneboende rätt till självbestämmande står i centrum:',
      items: [
        { icon: Compass, text: 'Frihet att välja lärandets tempo och form' },
        { icon: Route, text: 'Från ålderbaserade till kunskapsbaserade grupper' },
        { icon: Clock, text: 'Från fasta scheman till flextid' },
        { icon: Layout, text: 'Från ämnen till integrerade projekt' }
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
      title: 'Transformerade lärmiljöer',
      description: 'Flexibla och inspirerande miljöer som stödjer olika typer av lärande:',
      items: [
        { icon: Building, text: 'Öppna lärmiljöer och specialiserade verkstäder' },
        { icon: Microscope, text: 'Makerspace, laboratorier och konstnärliga ateljéer' },
        { icon: TreeDeciduous, text: 'Integration med naturmiljöer och samhället' },
        { icon: Users, text: 'Sociala mötesplatser och tysta studierum' }
      ]
    },
    {
      title: 'Nya lärarroller',
      description: 'Från traditionell undervisning till mentorskap och handledning:',
      items: [
        { icon: Heart, text: 'Mentorer och handledare som stödjer personlig utveckling' },
        { icon: Brain, text: 'Resursexperter inom olika kunskapsområden' },
        { icon: Rocket, text: 'Projektledare för samhällsintegrerade initiativ' },
        { icon: Workflow, text: 'Lärprocessdesigners och samhällskoordinatorer' }
      ]
    },
    {
      title: 'Personanpassade lärandevägar',
      description: 'Ett flexibelt system som erkänner olika sätt att lära och utvecklas:',
      items: [
        { icon: Layers, text: 'Projektbaserat lärande kopplat till samhällsutmaningar' },
        { icon: Wind, text: 'Integration av meditation och reflektion i vardagen' },
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
        'Förbättrade akademiska resultat när elever har reellt inflytande',
        'Ökad inre motivation när barn styr sitt eget lärande',
        'Djupare förståelse genom projektbaserat lärande',
        'Stärkt självkänsla och initiativförmåga'
      ]
    },
    {
      title: 'Pilotprojekt och exempel',
      items: [
        'Framgångsrika exempel från skolor som integrerat meningssökande',
        'Positiv feedback från både elever och lärare',
        'Stärkt samarbete mellan skola och lokalsamhälle',
        'Ökad demokratisk kompetens genom aktivt deltagande',
        'Demokratiska skolor internationellt',
        'Agila lärmiljöer i Finland',
        'Alternativa utbildningsformer i Danmark'
      ]
    },
    {
      title: 'Samhällseffekter',
      items: [
        'Ökad social kompetens och empati',
        'Starkare demokratisk förståelse',
        'Bättre förberedelse för framtidens utmaningar',
        'Minskad psykisk ohälsa bland unga'
      ]
    }
  ]
};

export const PROJEKT_CONTENT = {
  title: 'Aktiva projekt och initiativ',
  projects: [
    {
      title: 'DidiS - Direkt demokrati i Sverige',
      status: 'Under utveckling',
      items: [
        'Öppen källkod demokratiplattform',
        'Stöd för deltagardemokrati och medborgardialoger',
        'Integration med kommunala system',
        'Fokus på transparens och säkerhet'
      ],
      linkText: 'Bidra till utvecklingen',
      linkHref: 'https://github.com/BjornKennethHolmstrom/DidiS'
    },
    {
      title: 'DPOP - Digital parti-operations-plattform',
      status: 'Under utveckling',
      items: [
        'Öppen källkod plattform för partiorganisation',
        'Stöd för hybridstyrning och flexibelt beslutsfattande',
        'Transparent dokumenthantering',
        'Integrerad medlemshantering'
      ],
      linkText: 'Bidra till utvecklingen',
      linkHref: 'https://github.com/fjarilspartiet-se/DPOP'
    },
    {
      title: 'MU - Meningsfull utbildning',
      status: 'Under utveckling',
      items: [
        'Digitala verktyg för reflektion och meningssökande',
        'Integration av mysticism och filosofi i lärandet',
        'Stöd för mentorskap och ålderintegrerat lärande',
        'Resursbank för lärare och pedagoger'
      ],
      linkText: 'Bidra till utvecklingen',
      linkHref: 'https://github.com/fjarilspartiet-se/MU'
    },
    {
      title: 'FUN(TIME) - Freedom and Unity Network',
      status: 'Under utveckling',
      items: [
        'Internationellt nätverk för frihet och gemenskap',
        'Plattform för meningsfullt engagemang',
        'Stöd för självorganiserande initiativ',
        'Fokus på global transformation'
      ],
      linkText: 'Bidra till utvecklingen',
      linkHref: 'https://github.com/BjornKennethHolmstrom/FUN'
    }
  ],
  proposals: [
    {
      title: 'Växthuset',
      description: 'Ett pilotprojekt för lokal mat och gemenskap som kombinerar stadsodling, utbildning och social sammanhållning.',
      status: 'I planeringsfas',
      features: [
        'Community garden och lärcenter',
        'Integration med AUBI genom meningsfullt bidragande',
        'Kunskap och resursdelning',
        'Start i en utvald kommun'
      ]
    },
    {
      title: 'DemDel',
      description: 'Ett småskaligt test av demokratisk deliberation som kombinerar DidiS-plattformen med fysiska möten.',
      status: 'I planeringsfas',
      features: [
        'Digital + fysisk hybriddemokrati',
        'Fokus på lokala beslut',
        'Samarbete med intresserad kommun',
        'Test av nya demokratiformer'
      ]
    },
    {
      title: 'LärLab',
      description: 'Ett praktiskt experiment med transformativt lärande baserat på MU-principerna.',
      status: 'I planeringsfas',
      features: [
        'After-school program eller studiecirkel',
        'Integration av filosofi och praktik',
        'Fokus på meningsfullt lärande',
        'Testbädd för nya utbildningsmetoder'
      ]
    },
    {
      title: 'EnergyShare',
      description: 'Plattform för lokal energidelning och smart nätbalansering.',
      status: 'I konceptfas'
    },
    {
      title: 'FoodWeb',
      description: 'System för att koppla samman lokala matproducenter med konsumenter.',
      status: 'I konceptfas'
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
