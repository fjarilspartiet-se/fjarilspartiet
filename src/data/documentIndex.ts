// Auto-generated document index
// Last updated: 2026-06-01T07:37:01.301Z

export interface Document {
  id: string;
  title: string;
  path: string;
  category: string;
  subcategory?: string;
  description?: string;
  version?: string;
  lastUpdated?: string;
  author?: string;
  role?: string;
  sortOrder?: number;
  priority?: string;
  relatedDocs?: string[];
}

export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories?: { [key: string]: { name: string; description: string; } };
}

export const documentCategories: DocumentCategory[] = [
  {
    "id": "STR",
    "name": "Strategiska dokument",
    "description": "Partiets grundläggande vision, politik och strategier",
    "icon": "🎯",
    "subcategories": {
      "STR-100": {
        "name": "Grundläggande ramverk",
        "description": "Partiets fundament och kärnprinciper"
      },
      "STR-200": {
        "name": "Politiska strategier",
        "description": "Konkreta politiska förslag och ramverk"
      },
      "STR-300": {
        "name": "Internationellt",
        "description": "Global strategi och internationellt samarbete"
      },
      "STR-400": {
        "name": "Hållbarhet",
        "description": "Miljö- och hållbarhetsstrategier"
      },
      "STR-500": {
        "name": "Digitalt samhälle",
        "description": "Digital etik och teknologistrategi"
      }
    }
  },
  {
    "id": "TAK",
    "name": "Taktiska ramverk",
    "description": "Implementering och praktiska tillämpningar",
    "icon": "⚙️",
    "subcategories": {
      "TAK-100": {
        "name": "Organisation",
        "description": "Organisationsstruktur och styrning"
      },
      "TAK-200": {
        "name": "Utveckling",
        "description": "Utbildning och utvecklingsramverk"
      },
      "TAK-300": {
        "name": "Hälsa",
        "description": "Hälso- och välfärdsramverk"
      },
      "TAK-400": {
        "name": "Samhälle",
        "description": "Bostad, stad och samhällsutveckling"
      },
      "TAK-500": {
        "name": "Lokal utveckling",
        "description": "Landsbygd och decentralisering"
      }
    }
  },
  {
    "id": "OPS",
    "name": "Operativa riktlinjer",
    "description": "Praktiska handledningar och processer",
    "icon": "📋",
    "subcategories": {
      "OPS-100": {
        "name": "Digital",
        "description": "Digitala verktyg och plattformar"
      },
      "OPS-200": {
        "name": "Riktlinjer",
        "description": "Kommunikation och processer"
      },
      "OPS-300": {
        "name": "Teknik",
        "description": "Tekniska ramverk och implementering"
      },
      "OPS-400": {
        "name": "Internationellt",
        "description": "Internationella samarbetsmekanismer"
      }
    }
  },
  {
    "id": "MED",
    "name": "Medlemsdokumentation",
    "description": "Guider och resurser för medlemmar",
    "icon": "👥"
  },
  {
    "id": "FALLSTUDIE",
    "name": "Fallstudier",
    "description": "Praktiska exempel och fallstudier",
    "icon": "📚",
    "subcategories": {
      "GGF": {
        "name": "Grundläggande garanterad försörjning",
        "description": "Fallstudier relaterade till GGF och ekonomiska system"
      }
    }
  }
];

export const documents: Document[] = [
  {
    "id": "FALLSTUDIE-GGF-001",
    "title": "Fallstudie GGF-001: Gemenskapsarbetslag i praktiken",
    "path": "fallstudier-ggf/FALLSTUDIE-GGF-001-Community-Work-Teams-i-praktiken.md",
    "category": "FALLSTUDIE",
    "subcategory": "GGF",
    "description": "- Work in Liberation # Transformative Labour & Employment Governance Framework"
  },
  {
    "id": "GUIDE-101",
    "title": "Guide för nya medlemmar",
    "path": "guide-för-nya-medlemmar.md",
    "category": "MED",
    "description": "Välkommen till en rörelse där din röst räknas och där vi tillsammans skapar positiv förändring. Hos oss finns utrymme för olika perspektiv, erfarenheter och sätt att bidra. Vi tror att verklig förändr..."
  },
  {
    "id": "GUIDE-TILL-NYA-MEDLEMMAR",
    "title": "Guide för nya medlemmar i Fjärilspartiet",
    "path": "guide-till-nya-medlemmar.md",
    "category": "MED",
    "description": "Varmt välkommen till Fjärilspartiet! Vi är glada att du vill vara med på denna spännande resa mot ett bättre samhälle. Hos oss finns plats för både djärva visioner och praktiska lösningar – här får du..."
  },
  {
    "id": "MED-101",
    "title": "Komma igång som medlem",
    "path": "MED/MED-101-komma-igång.md",
    "category": "MED",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-102",
    "title": "Organisera möten",
    "path": "MED/MED-102-organisera-möten.md",
    "category": "MED",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-103",
    "title": "Bidra tekniskt",
    "path": "MED/MED-103-bidra-tekniskt.md",
    "category": "MED",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-104",
    "title": "Lokala initiativ",
    "path": "MED/MED-104-lokala-initiativ.md",
    "category": "MED",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-105",
    "title": "Forskning och policyutveckling",
    "path": "MED/MED-105-forskning-och-policyutveckling.md",
    "category": "MED",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-106",
    "title": "Kommunikation och samhällsdialog",
    "path": "MED/MED-106-kommunikation-och-samhällsdialog.md",
    "category": "MED",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-107",
    "title": "Skalning och synergier",
    "path": "MED/MED-107-skalning-och-synergier.md",
    "category": "MED",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "MED-108",
    "title": "Engagemangsväg & Medlemsutveckling",
    "path": "MED/MED-108-engagemangsväg-och-medlemsutveckling.md",
    "category": "MED",
    "version": "2.0",
    "lastUpdated": "2024-11-01",
    "author": "Björn Kenneth Holmström",
    "role": "Medlemskoordinator"
  },
  {
    "id": "OPS-101",
    "title": "Skiss av partiets operationsplattform",
    "path": "OPS/OPS-100-digital/OPS-101-partiets-operations-plattform-skiss.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-102",
    "title": "Digital partioperationsplattform - specifikation",
    "path": "OPS/OPS-100-digital/OPS-102-digital-parti-operations-plattform-specifikation.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-103",
    "title": "Digital partioperationsplattform - flexibelt styre",
    "path": "OPS/OPS-100-digital/OPS-103-digital-parti-operations-plattform-flexibelt-styre.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-104",
    "title": "Försäkran om icke-korruption för digitala lösningar",
    "path": "OPS/OPS-100-digital/OPS-104-försäkran-om-icke-korruption-för-digitala-lösningar.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-105",
    "title": "DidiS - Ramverk för digital direktdemokrati",
    "path": "OPS/OPS-100-digital/OPS-105-didis-ramverk-för-direktdemokrati.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-106",
    "title": "Vårt förhållningssätt till A.I. (artificiell intelligens)",
    "path": "OPS/OPS-100-digital/OPS-106-vårt-förhållingssätt-till-A.I.-(artificiell-intelligens).md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "OPS-201",
    "title": "Konkreta åtgärdsplaner",
    "path": "OPS/OPS-200-riktlinjer/OPS-201-konkreta-åtgärdsplaner.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-202",
    "title": "Kommunikationsstrategi",
    "path": "OPS/OPS-200-riktlinjer/OPS-202-kommunikationsstrategi.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-203",
    "title": "Extern kommunikation om individuell autonomi och utvecklingsmöjligheter",
    "path": "OPS/OPS-200-riktlinjer/OPS-203-extern-kommunikation-om-individuell-autonomi-och-utvecklingsmöjligheter.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-204",
    "title": "Symbolriktlinjer",
    "path": "OPS/OPS-200-riktlinjer/OPS-204-symbol-riktlinjer.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-205",
    "title": "Säkerhetsramverk",
    "path": "OPS/OPS-200-riktlinjer/OPS-205-säkerhetsramverk.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-206",
    "title": "Utbildning implementeringsriktlinjer",
    "path": "OPS/OPS-200-riktlinjer/OPS-206-utbildning-implementeringsriktlinjer.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-207",
    "title": "Exempel på utbildningsprojekt",
    "path": "OPS/OPS-200-riktlinjer/OPS-207-exempel-på-utbildningsprojekt.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-208",
    "title": "Krishantering och resiliensstrategier",
    "path": "OPS/OPS-200-riktlinjer/OPS-208-krishantering-och-resiliensstrategier.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "version": "1.0",
    "lastUpdated": "2025-05-21",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-209",
    "title": "Adaptiv policyutveckling och feedbackmekanismer",
    "path": "OPS/OPS-200-riktlinjer/OPS-209-adaptiv-policyutveckling-och-feedbackmekanismer.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "OPS-300",
    "title": "Teknologiska ramverk",
    "path": "OPS/OPS-300-teknik/OPS-300-teknologiska-ramverk.md",
    "category": "OPS",
    "subcategory": "OPS-300",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Teknologiansvarig"
  },
  {
    "id": "OPS-400",
    "title": "Internationella samarbetsmekanismer",
    "path": "OPS/OPS-400-internationellt/OPS-400-internationella-samarbetsmekanismer.md",
    "category": "OPS",
    "subcategory": "OPS-400",
    "description": "- STR-302 # Mening och meningsfullhet som universell rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och internationell samordnare"
  },
  {
    "id": "DOKUMENTHIERARKI",
    "title": "Dokumenthierarki för Fjärilspartiet",
    "path": "dokumenthierarki.md",
    "category": "other",
    "description": "- STR-009 Individens utveckling och självförverkligande i ett transformativt samhälle"
  },
  {
    "id": "FJ-RILSPARTIET-INTRO",
    "title": "Fjärilspartiet",
    "path": "fjärilspartiet-intro.md",
    "category": "other",
    "description": "*Vi befinner oss i äggstadiet - en tid av gemensam utforskning, omsorgsfull utveckling, organisk utveckling och förberedelse*"
  },
  {
    "id": "INTRODUKTION-AV-CHATGPT",
    "title": "Fjärilspartiet är ett visionärt politiskt initiativ från Sverige som strävar efter att omforma vårt sätt att se på styrning, demokrati och samhället. Kärnan i partiet är en stark hängivenhet till inkludering, hållbarhet och innovation, inspirerat av fjärilens metafor – en symbol för tillväxt, transformation och sammanlänkning.",
    "path": "introduktion-av-ChatGPT.md",
    "category": "other",
    "description": "Fjärilspartiet är ett visionärt politiskt initiativ från Sverige som strävar efter att omforma vårt sätt att se på styrning, demokrati och samhället. Kärnan i partiet är en stark hängivenhet till inkl..."
  },
  {
    "id": "MOTIVERING-TILL-AUBI",
    "title": "AUBI (Adaptiv Universell Basinkomst) är en möjlighet att återkoppla pengarna som sparas genom samhällets effektivisering och automatisering till individer som därigenom förlorar sina arbetstillfällen. Detta ger människor möjlighet att ta hand om hela sin existens - kropp, sinne och själ - genom att vara i naturen, äta hälsosamt, träna och vårda sina sociala relationer. Den ekonomiska grundtryggheten skapar också tid och ro för att komma till insikt om vad man verkligen vill bidra med till världen. När människor får möjlighet att utvecklas och engagera sig utifrån sina djupaste drivkrafter skapas positiva effekter som sprider sig genom hela samhället. Eftersom AUBI utbetalas hela livet behöver man inte längre oroa sig om pension, vilket är en stor förbättring och lättnad för alla.",
    "path": "motivering-till-aubi.md",
    "category": "other",
    "description": "AUBI (Adaptiv Universell Basinkomst) är en möjlighet att återkoppla pengarna som sparas genom samhällets effektivisering och automatisering till individer som därigenom förlorar sina arbetstillfällen...."
  },
  {
    "id": "PERSONLIGA-MANIFEST-MALL",
    "title": "**2. Min Definition av en Meningsfull Tillvaro**",
    "path": "personliga-manifest-mall.md",
    "category": "other",
    "description": "*— Ett personligt manifest för en meningsfull tillvaro —*"
  },
  {
    "id": "V-LKOMSTMEDDELANDE",
    "title": "Tack för att du har valt att gå med och bidra till vår vision om en systemisk samhällsförnyelse, vi är så glada att du vill vara med i vår gemenskap! Fjärilspartiet är en plats där vi tillsammans utforskar vägar till positiv samhällsförändring, ett öppet, dynamiskt sammanhang där tanken är fri, och där alla medlemmar har möjlighet att påverka och förnya våra idéer och initiativ. Som en fjäril i utveckling omfamnar vi transformation och växande - både som individer och som grupp.",
    "path": "välkomstmeddelande.md",
    "category": "other",
    "description": "Tack för att du har valt att gå med och bidra till vår vision om en systemisk samhällsförnyelse, vi är så glada att du vill vara med i vår gemenskap! Fjärilspartiet är en plats där vi tillsammans utfo..."
  },
  {
    "id": "STR-001",
    "title": "Långsiktig vision och transformativa mål",
    "path": "STR/STR-100-grund/STR-001-långsiktig-vision-och-transformativa-mål.md",
    "category": "STR",
    "subcategory": "STR-100",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-009",
    "title": "Individens utveckling och självförverkligande i ett transformativt samhälle",
    "path": "STR/STR-100-grund/STR-009-individens-utveckling-och-självförverkligande-i-ett-transformativt-samhälle.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-010",
    "title": "Internationell integration och global enhetsstrategi",
    "path": "STR/STR-100-grund/STR-010-internationell-integration-och-global-enhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-011",
    "title": "Internationell integration och global enhetsstrategi, version 2",
    "path": "STR/STR-100-grund/STR-011-internationell-integration-och-global-enhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål",
    "version": "2.1",
    "lastUpdated": "2025-02-24",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-100",
    "title": "Inledande skiss av grundläggande ramverk",
    "path": "STR/STR-100-grund/STR-100-inledande-skiss-av-grundläggande-ramverk.md",
    "category": "STR",
    "subcategory": "STR-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-101",
    "title": "Partigrund",
    "path": "STR/STR-100-grund/STR-101-parti-grund.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk",
    "version": "2.0",
    "lastUpdated": "2026-05-02",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-102",
    "title": "Bas i p(∞)=1",
    "path": "STR/STR-100-grund/STR-102-bas-i-p(∞)=1.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-103",
    "title": "Etik för jämvikt och sammanlänkning",
    "path": "STR/STR-100-grund/STR-103-etik-för-jämvikt-och-sammanlänkning.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-206 Individuell autonomi och personlig utveckling som en social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-11-06",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-104",
    "title": "Fjärilsramverket",
    "path": "STR/STR-100-grund/STR-104-fjärilsramverket.md",
    "category": "STR",
    "subcategory": "STR-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-105",
    "title": "Bortom symboler",
    "path": "STR/STR-100-grund/STR-105-bortom-symboler.md",
    "category": "STR",
    "subcategory": "STR-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-106",
    "title": "Vanliga frågor om bortom symboler",
    "path": "STR/STR-100-grund/STR-106-vanliga-frågor-om-bortom-symboler.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-107",
    "title": "Regenerativa system och metoder",
    "path": "STR/STR-100-grund/STR-107-regenerativa-system-och-metoder.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2025-02-24",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-110",
    "title": "Adaptiv styrningsmodell (ASM)",
    "path": "STR/STR-100-grund/STR-110-adaptiv-styrningsmodell.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 # Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2026-05-02",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-200",
    "title": "Politisk strategi",
    "path": "STR/STR-200-politik/STR-200-politisk-strategi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 # Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-201",
    "title": "Adaptivt skatteramverk",
    "path": "STR/STR-200-politik/STR-201-adaptivt-skatteramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering",
    "version": "1.1",
    "lastUpdated": "2024-12-03",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-202",
    "title": "Svenskt adaptivt skatteramverk",
    "path": "STR/STR-200-politik/STR-202-svenskt-adaptivt-skatteramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering",
    "version": "1.1",
    "lastUpdated": "2024-12-03",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-203",
    "title": "Adaptiv universell basinkomst (AUBI)",
    "path": "STR/STR-200-politik/STR-203-adaptivt-universellt-grundinkomstsystem.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering",
    "version": "1.2",
    "lastUpdated": "2025-11-05",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-204",
    "title": "AUBI fallstudie",
    "path": "STR/STR-200-politik/STR-204-adaptiv-universell-basinkomst-fallstudie.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-205",
    "title": "AUBI - Holistiskt stödramverk",
    "path": "STR/STR-200-politik/STR-205-AUBI-holistiskt-stödramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet",
    "version": "1.1",
    "lastUpdated": "2024-12-03",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-206",
    "title": "Individuell autonomi, personlig utveckling, kärlek, mening och sammanhang som social rättighet",
    "path": "STR/STR-200-politik/STR-206-individuell-autonomi-personlig-utveckling-kärlek-mening-och-sammanhang-som-social-rättighet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-207",
    "title": "Ramverk för religiös och andlig mångfald",
    "path": "STR/STR-200-politik/STR-207-ramverk-för-religiös-och-andlig-mångfald.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-208",
    "title": "Ramverk för alternativa livsstilar",
    "path": "STR/STR-200-politik/STR-208-ramverk-för-alternativa-livsstilar.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-209",
    "title": "Invandrings- och integrationspolitiskt ramverk",
    "path": "STR/STR-200-politik/STR-209-invandrings-och-integrationspolitiskt-ramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-210",
    "title": "Demokratiskt deltagande för barn och ungdomar",
    "path": "STR/STR-200-politik/STR-210-demokratiskt-deltagande-för-barn-och-ungdomar.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-211",
    "title": "Inledning",
    "path": "STR/STR-200-politik/STR-211-vägar-till-sjukdomsbekämpning-genom-teknologi-och-social-utveckling.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig Vision och Transformativa Mål"
  },
  {
    "id": "STR-212",
    "title": "Ramverk för global ekonomisk jämlikhet och resursöverflöd",
    "path": "STR/STR-200-politik/STR-212-ramverk-för-global-ekonomisk-jämlikhet-och-resurs-överflöd.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-213",
    "title": "Styrningens evolution: Ett adaptivt och integrerat perspektiv",
    "path": "STR/STR-200-politik/STR-213-styrningens-evolution-ett-adaptivt-och-integrerat-perspektiv.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig vision och transformativa mål",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-214",
    "title": "AUBI - Ekonomisk analys och finansiering",
    "path": "STR/STR-200-politik/STR-214-aubi-ekonomisk-analys-och-finansiering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-232 # Nödvändiga lagreformer för AUBI och livsstilsfrihet",
    "version": "2.1",
    "lastUpdated": "2024-11-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-215",
    "title": "Mystik och kontemplation - ramverk",
    "path": "STR/STR-200-politik/STR-215-mystik-och-kontemplation-ramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-11-11",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-216",
    "title": "Enteogener och psykedelisk forskning",
    "path": "STR/STR-200-politik/STR-216-enteogener-och-psykedelisk-forskning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-11-11",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-217",
    "title": "Ungas ekonomiska och demokratiska rättigheter",
    "path": "STR/STR-200-politik/STR-217-ungas-ekonomiska-och-demokratiska-rättigheter.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-218",
    "title": "Integrerad flernivådemokrati",
    "path": "STR/STR-200-politik/STR-218-integrerad-flernivådemokrati.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-105 # DidiS - Ramverk för digital direktdemokrati",
    "version": "2.0",
    "lastUpdated": "2025-07-12",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-219",
    "title": "Ramverk för etisk beskattning",
    "path": "STR/STR-200-politik/STR-219-ramverk-för-etisk-beskattning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-104 # Försäkran om icke-korruption för digitala lösningar",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-220",
    "title": "Datasuveränitet och digital autonomi",
    "path": "STR/STR-200-politik/STR-220-datasuveränitet-och-digital-autonomi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-221",
    "title": "AI-etik och utvecklingsriktlinjer",
    "path": "STR/STR-200-politik/STR-221-ai-etik-och-utvecklingsriktlinjer.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-502 # Förhållande till artificiell intelligens",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-222",
    "title": "Ramverk för hållbar och hälsosam stadsutveckling",
    "path": "STR/STR-200-politik/STR-222-ramverk-för-hållbar-och-hälsosam-stadsutveckling.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-223",
    "title": "Transformation av utbildningssystemet - Frihet och individualisering",
    "path": "STR/STR-200-politik/STR-223-transformation-av-utbildningssystemet-frihet-och-individualisering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-224",
    "title": "Vision för framtidens integrerade hälsovård",
    "path": "STR/STR-200-politik/STR-224-vision-för-framtidens-integrerade-hälsovård.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-225",
    "title": "Digital systemintegration",
    "path": "STR/STR-200-politik/STR-225-digital-systemintegration.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-226",
    "title": "Ramverk för etiskt försvar och konflikthantering",
    "path": "STR/STR-200-politik/STR-226-ramverk-för-etiskt-försvar-och-konflikthantering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-403 # Etiskt ramverk för relation till djur, växter och natur",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-227",
    "title": "Ramverk för utvecklingspsykologi och samhällsförbättring",
    "path": "STR/STR-200-politik/STR-227-ramverk-för-utvecklingspsykologi-och-samhällsförbättring.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "Utvecklingspsykologi och samhällsförbättring är grundläggande för Fjärilspartiets strävan efter ett inkluderande, medvetet och adaptivt samhälle. Detta dokument syftar till att belysa vårt förhållning...",
    "version": "1.0",
    "lastUpdated": "2024-11-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-228",
    "title": "Utvecklingsramverk och systemförståelse",
    "path": "STR/STR-200-politik/STR-228-utvecklingsramverk-och-systemförståelse.md",
    "category": "STR",
    "subcategory": "STR-200",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-229",
    "title": "Evolution av medielandskapet",
    "path": "STR/STR-200-politik/STR-229-evolution-av-medielandskapet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-227 # Utvecklingsramverk och systemförståelse",
    "version": "1.0",
    "lastUpdated": "2025-01-02",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-230",
    "title": "AUBI - Värdeskapande i praktiken",
    "path": "STR/STR-200-politik/STR-230-aubi-värdeskapande-i-praktiken.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet",
    "version": "1.0",
    "lastUpdated": "2025-01-12",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-231",
    "title": "Arbetslivsflexibilitet och livsvägsmångfald",
    "path": "STR/STR-200-politik/STR-231-arbetslivsflexibilitet-och-livsvägsmångfald.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-232",
    "title": "Nödvändiga lagreformer för AUBI och livsstilsfrihet",
    "path": "STR/STR-200-politik/STR-232-nödvändiga-lagreformer-för-aubi-och-livsstilsfrihet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-233",
    "title": "Detaljerad analys av nyckelreformer för AUBI och livsstilsfrihet",
    "path": "STR/STR-200-politik/STR-233-detaljerad-analys-av-nyckelreformer-för-aubi-och-livsstilsfrihet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-228 # Nödvändiga lagreformer för AUBI och livsstilsfrihet",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-234",
    "title": "Övergångsplan från nuvarande socialförsäkringssystem till AUBI",
    "path": "STR/STR-200-politik/STR-234-övergångsplan-från-nuvarande-socialförsäkringssystem-till-aubi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-235",
    "title": "Rekommenderade resurser för utveckling och fördjupning",
    "path": "STR/STR-200-politik/STR-235-rekommenderade-resurser-för-utveckling-och-fördjupning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-228 # Utvecklingsramverk och systemförståelse",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-236",
    "title": "Bioregionala autonoma zoner - lokal resiliens och ekologisk integration",
    "path": "STR/STR-200-politik/STR-236-bioregionala-autonoma-zoner.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2025-10-19",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-237",
    "title": "Vision för reformerad regional och kommunal styrning",
    "path": "STR/STR-200-politik/STR-237-vision-för-reformerad-regional-och-kommunal-styrning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- TAK-501 # Landsbygdsutveckling och decentralisering",
    "version": "1.0",
    "lastUpdated": "2025-10-19",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-238",
    "title": "Hearts och Leaves - komplementära valutor i svensk kontext",
    "path": "STR/STR-200-politik/STR-238-hearts-leaves-i-svensk-kontext.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-237 # Vision för reformerad regional och kommunal styrning",
    "version": "1.0",
    "lastUpdated": "2025-10-19",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-239",
    "title": "Samisk medbestämmande och bioregionala autonoma zoner",
    "path": "STR/STR-200-politik/STR-239-samisk-medbestämmande-och-baz.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-237 # Vision för reformerad regional och kommunal styrning",
    "version": "1.0",
    "lastUpdated": "2025-10-19",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-240",
    "title": "GGF-integration översikt",
    "path": "STR/STR-200-politik/STR-240-GGF-integration-översikt.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- FALLSTUDIE-GGF-001 # Community Work Teams i praktiken",
    "version": "1.0",
    "lastUpdated": "2025-10-19",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-241",
    "title": "Fjärilspartiets ansats för ekonomisk rättvisa utan gränser",
    "path": "STR/STR-200-politik/STR-241-strategi-för-inkludering-av-statslösa-och-nomadiska-grupper.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-232 # Nödvändiga lagreformer för AUBI och livsstilsfrihet"
  },
  {
    "id": "STR-301",
    "title": "Internationell strategi",
    "path": "STR/STR-300-internationellt/STR-301-internationell-strategi.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Mening och meningsfullhet som universell rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-302",
    "title": "Individuell autonomi och utvecklingsmöjligheter som universell rättighet",
    "path": "STR/STR-300-internationellt/STR-302-individuell-autonomi-och-utvecklingsmöjligheter-som-universell-rättighet.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-303",
    "title": "Konkreta vägar till global transformation",
    "path": "STR/STR-300-internationellt/STR-303-konkreta-vägar-till-global-transformation.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet",
    "version": "1.0",
    "lastUpdated": "2024-12-10",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-304",
    "title": "Globalt konstitutionellt ramverk och etisk styrning",
    "path": "STR/STR-300-internationellt/STR-304-globalt-konstitutionellt-ramverk-och-etisk-styrning.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet",
    "version": "1.0",
    "lastUpdated": "2025-02-27",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-305",
    "title": "Fred och konfliktförebyggande på global nivå",
    "path": "STR/STR-300-internationellt/STR-305-fred-och-konfliktförebyggande-på-global-nivå.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-226 # Ramverk för etiskt försvar och konflikthantering",
    "version": "1.0",
    "lastUpdated": "2024-12-14",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-305",
    "title": "Fred och konfliktförebyggande på global nivå",
    "path": "STR/STR-300-internationellt/STR-305.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-226 # Ramverk för etiskt försvar och konflikthantering",
    "version": "1.0",
    "lastUpdated": "2024-12-14",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-306",
    "title": "Global ekonomisk rättvisa och resursfördelning",
    "path": "STR/STR-300-internationellt/STR-306-global-ekonomisk-rättvisa-och-resursfördelning.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-212 # Ramverk för global ekonomisk jämlikhet och resurs-överflöd",
    "version": "1.0",
    "lastUpdated": "2024-12-15",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-307",
    "title": "Vetenskaplig-spirituell integration för mänsklig utveckling",
    "path": "STR/STR-300-internationellt/STR-307-vetenskaplig-spirituell-integration-för-mänsklig-utveckling.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-227 # Ramverk för utvecklingspsykologi och samhällsförbättring",
    "version": "1.0",
    "lastUpdated": "2024-12-15",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och strategisk samordnare"
  },
  {
    "id": "STR-400",
    "title": "Hållbarhetsstrategi",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-400-hållbarhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 - En blomstrande framtid - lokal motståndskraft och hållbara matsystem",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Strategiansvarig"
  },
  {
    "id": "STR-401",
    "title": "En blomstrande framtid - lokal motståndskraft och hållbara matsystem",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-401-en-blomstrande-framtid-lokal-motståndskraft-och-hållbara-matsystem.md",
    "category": "STR",
    "subcategory": "STR-400",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-402",
    "title": "Klimatresiliens och biologisk mångfald - ramverk",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-402-klimatresiliens-och-biologisk-mångfald-ramverk.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 - En blomstrande framtid - Lokal motståndskraft och hållbara matsystem",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och hållbarhetssamordnare"
  },
  {
    "id": "STR-403",
    "title": "Etiskt ramverk för relation till djur, växter och natur",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-403-etiskt-ramverk-för-relation-till-djur-växter-och-natur.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft och hållbara matsystem",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "STR-501",
    "title": "Digital etik och datasuveränitet",
    "path": "STR/STR-500-digitalt-samhälle/STR-501-digital-etik-och-datasuveränitet.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-502 - Förhållande till artificiell intelligens",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Teknisk Samordnare"
  },
  {
    "id": "STR-502",
    "title": "Förhållande till artificiell intelligens",
    "path": "STR/STR-500-digitalt-samhälle/STR-502-förhållande-till-artificiell-intelligens.md",
    "category": "STR",
    "subcategory": "STR-500",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Teknisk Samordnare"
  },
  {
    "id": "STR-503",
    "title": "Bioetik och framväxande tekniker",
    "path": "STR/STR-500-digitalt-samhälle/STR-503-bioetik-och-framväxande-tekniker.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-504 Riktlinjer för framväxande bioteknologier",
    "version": "1.0",
    "lastUpdated": "2024-11-06",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och visionär"
  },
  {
    "id": "STR-504",
    "title": "Riktlinjer för framväxande bioteknologier",
    "path": "STR/STR-500-digitalt-samhälle/STR-504-riktlinjer-för-framväxande-bioteknologier.md",
    "category": "STR",
    "subcategory": "STR-500",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Visionär"
  },
  {
    "id": "STR-505",
    "title": "AI-styrning för mänskligt blomstrande",
    "path": "STR/STR-500-digitalt-samhälle/STR-505-ai-styrning-för-mänskligt-blomstrande.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-502 - Förhållande till artificiell intelligens",
    "version": "1.0",
    "lastUpdated": "2025-04-05",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Teknisk Samordnare"
  },
  {
    "id": "STR-506",
    "title": "Krisberedskap och digital resiliens",
    "path": "STR/STR-500-digitalt-samhälle/STR-506-krisberedskap-och-digital-resiliens.md",
    "category": "STR",
    "subcategory": "STR-500",
    "version": "1.0",
    "lastUpdated": "2025-12-27",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-101",
    "title": "Juridiskt ramverk",
    "path": "TAK/TAK-100-organisation/TAK-101-juridiskt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-102",
    "title": "Svenskt politiskt integrationsramverk",
    "path": "TAK/TAK-100-organisation/TAK-102-svenskt-politiskt-integrations-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-103",
    "title": "Finansiellt ramverk",
    "path": "TAK/TAK-100-organisation/TAK-103-finansiellt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-104",
    "title": "Kvalitetssäkringsramverk",
    "path": "TAK/TAK-100-organisation/TAK-104-kvalitetssäkringsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-105",
    "title": "Intern demokrati och hybridstyrning",
    "path": "TAK/TAK-100-organisation/TAK-105-intern-demokrati-och-hybridstyrning.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-103 # Digital partioperationsplattform - flexibelt styre",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-106",
    "title": "Konflikthantering och medling",
    "path": "TAK/TAK-100-organisation/TAK-106-konflikthantering-och-medling.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-103 # Digital partioperationsplattform - flexibelt styre",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-107",
    "title": "Lokala kapitel och organisation",
    "path": "TAK/TAK-100-organisation/TAK-107-lokala-kapitel-och-organisation.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-108",
    "title": "Riktlinjer för ekonomisk struktur och hantering",
    "path": "TAK/TAK-100-organisation/TAK-108-riktlinjer-för-ekonomisk-struktur-och-hantering.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-104 # Försäkran om icke-korruption för digitala lösningar",
    "version": "1.0",
    "lastUpdated": "2024-10-31",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-201",
    "title": "Utbildnings- och träningsramverk",
    "path": "TAK/TAK-200-utveckling/TAK-201-utbildnings-och-träningsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- TAK-205 # Självbestämmande och personlig utveckling inom utbildning",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-202",
    "title": "Forsknings- och utvecklingsramverk",
    "path": "TAK/TAK-200-utveckling/TAK-202-forskning-och-utvecklingsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-203",
    "title": "Utbildningspolitiskt ramverk",
    "path": "TAK/TAK-200-utveckling/TAK-203-utbildningspolitiskt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-204",
    "title": "Svensk utbildningsintegration",
    "path": "TAK/TAK-200-utveckling/TAK-204-svensk-utbildningsintegration.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-205",
    "title": "Självbestämmande och personlig utveckling inom utbildning",
    "path": "TAK/TAK-200-utveckling/TAK-205-självbestämmande-och-personlig-utveckling-inom-utbildning.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "2.0",
    "lastUpdated": "2024-12-14",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-300",
    "title": "Hälso- och välfärdsramverk",
    "path": "TAK/TAK-300-hälsa/TAK-300-hälso-och-välfärdsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och välfärdssamordnare"
  },
  {
    "id": "TAK-301",
    "title": "Hälsofrämjande insatser",
    "path": "TAK/TAK-300-hälsa/TAK-301-hälsofrämjande-insatser.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-302",
    "title": "Sjukvårdsramverk",
    "path": "TAK/TAK-300-hälsa/TAK-302-sjukvårdsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-303",
    "title": "Tillgänglig och holistisk vård",
    "path": "TAK/TAK-300-hälsa/TAK-303-tillgänglig-och-holistisk-vård.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-304",
    "title": "Psykisk hälsa och välbefinnande",
    "path": "TAK/TAK-300-hälsa/TAK-304-psykisk-hälsa-och-välbefinnande.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent",
    "version": "1.1",
    "lastUpdated": "2024-12-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-305",
    "title": "Självbestämmande och personlig utveckling som hälsokomponent",
    "path": "TAK/TAK-300-hälsa/TAK-305-självbestämmande-och-personlig-utveckling-som-hälsokomponent.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet",
    "version": "1.0",
    "lastUpdated": "2024-10-29",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och teknisk samordnare"
  },
  {
    "id": "TAK-401",
    "title": "Bostäder och stadsutveckling - ramverk",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-401-bostäder-och-stadsutveckling-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "description": "- OPS-102 - Digital partioperationsplattform - specifikation",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Utvecklingssamordnare"
  },
  {
    "id": "TAK-402",
    "title": "Rättsreform och social rättvisa",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-402-rättsreform-och-social-rättvisa.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och rättspolicysamordnare"
  },
  {
    "id": "TAK-403",
    "title": "Ramverk för kulturell innovation och bevarande",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-403-ramverk-för-kulturell-innovation-och-bevarande.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "description": "- Bevarar och utvecklar kulturarv genom digital teknologi",
    "version": "1.0",
    "lastUpdated": "2024-11-13",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Utvecklingssamordnare"
  },
  {
    "id": "TAK-404",
    "title": "Lokal bostadspolicy – En synoptisk policycykel",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-404-lokal-bostadspolicy.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "description": "*Skapad genom SCI‑cykeln (Synthesis, Challenge, Integration) med stöd av Institutional Regeneration Framework och Synoptic Protocol*",
    "version": "1.0",
    "lastUpdated": "2025-12-02",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare ochu utvecklingssamordnare"
  },
  {
    "id": "TAK-501",
    "title": "Landsbygdsutveckling och decentralisering",
    "path": "TAK/TAK-500-land-och-lokal-utveckling/TAK-501-landsbygdsutveckling-och-decentralisering.md",
    "category": "TAK",
    "subcategory": "TAK-500",
    "version": "1.0",
    "lastUpdated": "2024-10-30",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Strategisk Samordnare"
  },
  {
    "id": "TAK-502",
    "title": "Rätten att stanna – Sveriges billigaste försäkring mot nästa kris",
    "path": "TAK/TAK-500-land-och-lokal-utveckling/TAK-502-rätten-att-stanna.md",
    "category": "TAK",
    "subcategory": "TAK-500",
    "description": "Fjärilspartiet är inte intresserat av att subventionera en livsstil.",
    "version": "2.0",
    "lastUpdated": "2025-12-03",
    "author": "Björn Kenneth Holmström",
    "role": "Grundare och Utvecklingssamordnare"
  }
];

// Helper functions
export function getDocumentById(id: string): Document | undefined {
  return documents.find(doc => doc.id === id);
}

export function getDocumentsByCategory(category: string): Document[] {
  return documents.filter(doc => doc.category === category);
}

export function getDocumentsBySubcategory(subcategory: string): Document[] {
  return documents.filter(doc => doc.subcategory === subcategory);
}

export function searchDocuments(query: string): Document[] {
  const lowerQuery = query.toLowerCase();
  return documents.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.description?.toLowerCase().includes(lowerQuery) ||
    doc.id.toLowerCase().includes(lowerQuery)
  );
}
