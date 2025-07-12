// Auto-generated document index
// Last updated: 2025-07-12T18:03:11.191Z

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
    "title": "MED-101",
    "path": "MED/MED-101-komma-igång.md",
    "category": "MED"
  },
  {
    "id": "MED-102",
    "title": "MED-102",
    "path": "MED/MED-102-organisera-möten.md",
    "category": "MED"
  },
  {
    "id": "MED-103",
    "title": "MED-103",
    "path": "MED/MED-103-bidra-tekniskt.md",
    "category": "MED",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "MED-104",
    "title": "MED-104",
    "path": "MED/MED-104-lokala-initiativ.md",
    "category": "MED",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft"
  },
  {
    "id": "MED-105",
    "title": "MED-105",
    "path": "MED/MED-105-forskning-och-policyutveckling.md",
    "category": "MED"
  },
  {
    "id": "MED-106",
    "title": "MED-106",
    "path": "MED/MED-106-kommunikation-och-samhällsdialog.md",
    "category": "MED",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro"
  },
  {
    "id": "MED-107",
    "title": "MED-107",
    "path": "MED/MED-107-skalning-och-synergier.md",
    "category": "MED",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft"
  },
  {
    "id": "MED-108",
    "title": "MED-108  ",
    "path": "MED/MED-108-engagemangsväg-och-medlemsutveckling.md",
    "category": "MED"
  },
  {
    "id": "OPS-101",
    "title": "OPS-101",
    "path": "OPS/OPS-100-digital/OPS-101-partiets-operations-plattform-skiss.md",
    "category": "OPS",
    "subcategory": "OPS-100"
  },
  {
    "id": "OPS-102",
    "title": "OPS-102",
    "path": "OPS/OPS-100-digital/OPS-102-digital-parti-operations-plattform-specifikation.md",
    "category": "OPS",
    "subcategory": "OPS-100"
  },
  {
    "id": "OPS-103",
    "title": "OPS-103",
    "path": "OPS/OPS-100-digital/OPS-103-digital-parti-operations-plattform-flexibelt-styre.md",
    "category": "OPS",
    "subcategory": "OPS-100"
  },
  {
    "id": "OPS-104",
    "title": "OPS-104",
    "path": "OPS/OPS-100-digital/OPS-104-försäkran-om-icke-korruption-för-digitala-lösningar.md",
    "category": "OPS",
    "subcategory": "OPS-100"
  },
  {
    "id": "OPS-105",
    "title": "OPS-105",
    "path": "OPS/OPS-100-digital/OPS-105-didis-ramverk-för-direktdemokrati.md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "OPS-106",
    "title": "OPS 106 vårt förhållingssätt till A.I. (artificiell intelligens)",
    "path": "OPS/OPS-100-digital/OPS-106-vårt-förhållingssätt-till-A.I.-(artificiell-intelligens).md",
    "category": "OPS",
    "subcategory": "OPS-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "OPS-201",
    "title": "OPS-201",
    "path": "OPS/OPS-200-riktlinjer/OPS-201-konkreta-åtgärdsplaner.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk"
  },
  {
    "id": "OPS-202",
    "title": "OPS-202",
    "path": "OPS/OPS-200-riktlinjer/OPS-202-kommunikationsstrategi.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro"
  },
  {
    "id": "OPS-203",
    "title": "OPS-203",
    "path": "OPS/OPS-200-riktlinjer/OPS-203-extern-kommunikation-om-individuell-autonomi-och-utvecklingsmöjligheter.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "OPS-204",
    "title": "OPS-204",
    "path": "OPS/OPS-200-riktlinjer/OPS-204-symbol-riktlinjer.md",
    "category": "OPS",
    "subcategory": "OPS-200"
  },
  {
    "id": "OPS-205",
    "title": "OPS-205",
    "path": "OPS/OPS-200-riktlinjer/OPS-205-säkerhetsramverk.md",
    "category": "OPS",
    "subcategory": "OPS-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "OPS-206",
    "title": "OPS-206",
    "path": "OPS/OPS-200-riktlinjer/OPS-206-utbildning-implementeringsriktlinjer.md",
    "category": "OPS",
    "subcategory": "OPS-200"
  },
  {
    "id": "OPS-207",
    "title": "OPS-207",
    "path": "OPS/OPS-200-riktlinjer/OPS-207-exempel-på-utbildningsprojekt.md",
    "category": "OPS",
    "subcategory": "OPS-200"
  },
  {
    "id": "OPS-208",
    "title": "OPS-208",
    "path": "OPS/OPS-200-riktlinjer/OPS-208-krishantering-och-resiliensstrategier.md",
    "category": "OPS",
    "subcategory": "OPS-200"
  },
  {
    "id": "OPS-209",
    "title": "OPS-209",
    "path": "OPS/OPS-200-riktlinjer/OPS-209-adaptiv-policyutveckling-och-feedbackmekanismer.md",
    "category": "OPS",
    "subcategory": "OPS-200"
  },
  {
    "id": "OPS-300",
    "title": "OPS-300",
    "path": "OPS/OPS-300-teknik/OPS-300-teknologiska-ramverk.md",
    "category": "OPS",
    "subcategory": "OPS-300"
  },
  {
    "id": "OPS-400",
    "title": "OPS-400",
    "path": "OPS/OPS-400-internationellt/OPS-400-internationella-samarbetsmekanismer.md",
    "category": "OPS",
    "subcategory": "OPS-400",
    "description": "- STR-302 # Mening och meningsfullhet som universell rättighet"
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
    "title": "introduktion av ChatGPT",
    "path": "introduktion-av-ChatGPT.md",
    "category": "other",
    "description": "Fjärilspartiet är ett visionärt politiskt initiativ från Sverige som strävar efter att omforma vårt sätt att se på styrning, demokrati och samhället. Kärnan i partiet är en stark hängivenhet till inkl..."
  },
  {
    "id": "MOTIVERING-TILL-AUBI",
    "title": "motivering till aubi",
    "path": "motivering-till-aubi.md",
    "category": "other",
    "description": "AUBI (Adaptiv Universell Basinkomst) är en möjlighet att återkoppla pengarna som sparas genom samhällets effektivisering och automatisering till individer som därigenom förlorar sina arbetstillfällen...."
  },
  {
    "id": "PERSONLIGA-MANIFEST-MALL",
    "title": "personliga manifest mall",
    "path": "personliga-manifest-mall.md",
    "category": "other",
    "description": "*— Ett personligt manifest för en meningsfull tillvaro —*"
  },
  {
    "id": "V-LKOMSTMEDDELANDE",
    "title": "välkomstmeddelande",
    "path": "välkomstmeddelande.md",
    "category": "other",
    "description": "Tack för att du har valt att gå med och bidra till vår vision om en systemisk samhällsförnyelse, vi är så glada att du vill vara med i vår gemenskap! Fjärilspartiet är en plats där vi tillsammans utfo..."
  },
  {
    "id": "STR-001",
    "title": "STR-001",
    "path": "STR/STR-100-grund/STR-001-långsiktig-vision-och-transformativa-mål.md",
    "category": "STR",
    "subcategory": "STR-100"
  },
  {
    "id": "STR-009",
    "title": "STR-009",
    "path": "STR/STR-100-grund/STR-009-individens-utveckling-och-självförverkligande-i-ett-transformativt-samhälle.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål"
  },
  {
    "id": "STR-010",
    "title": "STR-010",
    "path": "STR/STR-100-grund/STR-010-internationell-integration-och-global-enhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål"
  },
  {
    "id": "STR-011",
    "title": "STR-011",
    "path": "STR/STR-100-grund/STR-011-internationell-integration-och-global-enhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-001 - Långsiktig vision och transformativa mål"
  },
  {
    "id": "STR-100",
    "title": "STR-100",
    "path": "STR/STR-100-grund/STR-100-inledande-skiss-av-grundläggande-ramverk.md",
    "category": "STR",
    "subcategory": "STR-100"
  },
  {
    "id": "STR-101",
    "title": "STR-101",
    "path": "STR/STR-100-grund/STR-101-parti-grund.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk"
  },
  {
    "id": "STR-102",
    "title": "STR-102",
    "path": "STR/STR-100-grund/STR-102-bas-i-p(∞)=1.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk"
  },
  {
    "id": "STR-103",
    "title": "STR-103",
    "path": "STR/STR-100-grund/STR-103-etik-för-jämvikt-och-sammanlänkning .md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-206 Individuell Autonomi och Personlig Utveckling som en Social Rättighet"
  },
  {
    "id": "STR-104",
    "title": "STR-104",
    "path": "STR/STR-100-grund/STR-104-fjärilsramverket.md",
    "category": "STR",
    "subcategory": "STR-100"
  },
  {
    "id": "STR-105",
    "title": "STR-105",
    "path": "STR/STR-100-grund/STR-105-bortom-symboler.md",
    "category": "STR",
    "subcategory": "STR-100"
  },
  {
    "id": "STR-106",
    "title": "STR-106",
    "path": "STR/STR-100-grund/STR-106-vanliga-frågor-om-bortom-symboler.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- OPS-203 # Extern kommunikation om meningsfull tillvaro"
  },
  {
    "id": "STR-107",
    "title": "STR-107",
    "path": "STR/STR-100-grund/STR-107-regenerativa-system-och-metoder.md",
    "category": "STR",
    "subcategory": "STR-100",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft"
  },
  {
    "id": "STR-200",
    "title": "STR-200",
    "path": "STR/STR-200-politik/STR-200-politisk-strategi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 # Långsiktig vision och transformativa mål"
  },
  {
    "id": "STR-201",
    "title": "STR-201",
    "path": "STR/STR-200-politik/STR-201-adaptivt-skatteramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering"
  },
  {
    "id": "STR-202",
    "title": "STR-202",
    "path": "STR/STR-200-politik/STR-202-svenskt-adaptivt-skatteramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering"
  },
  {
    "id": "STR-203",
    "title": "STR-203",
    "path": "STR/STR-200-politik/STR-203-adaptivt-universellt-grundinkomstsystem.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering"
  },
  {
    "id": "STR-204",
    "title": "STR-204",
    "path": "STR/STR-200-politik/STR-204-adaptiv-universell-basinkomst-fallstudie.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet"
  },
  {
    "id": "STR-205",
    "title": "STR-205",
    "path": "STR/STR-200-politik/STR-205-AUBI-holistiskt-stödramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet"
  },
  {
    "id": "STR-206",
    "title": "STR-206",
    "path": "STR/STR-200-politik/STR-206-individuell-autonomi-personlig-utveckling-kärlek-mening-och-sammanhang-som-social-rättighet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet"
  },
  {
    "id": "STR-207",
    "title": "STR-207",
    "path": "STR/STR-200-politik/STR-207-ramverk-för-religiös-och-andlig-mångfald.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk"
  },
  {
    "id": "STR-208",
    "title": "STR-208",
    "path": "STR/STR-200-politik/STR-208-ramverk-för-alternativa-livsstilar.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald"
  },
  {
    "id": "STR-209",
    "title": "STR-209",
    "path": "STR/STR-200-politik/STR-209-invandrings-och-integrationspolitiskt-ramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald"
  },
  {
    "id": "STR-210",
    "title": "STR-210",
    "path": "STR/STR-200-politik/STR-210-demokratiskt-deltagande-för-barn-och-ungdomar.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "STR-211",
    "title": "STR 211 vägar till sjukdomsbekämpning genom teknologi och social utveckling",
    "path": "STR/STR-200-politik/STR-211-vägar-till-sjukdomsbekämpning-genom-teknologi-och-social-utveckling.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig Vision och Transformativa Mål"
  },
  {
    "id": "STR-212",
    "title": "STR-212",
    "path": "STR/STR-200-politik/STR-212-ramverk-för-global-ekonomisk-jämlikhet-och-resurs-överflöd.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig Vision och Transformativa Mål"
  },
  {
    "id": "STR-213",
    "title": "STR-213",
    "path": "STR/STR-200-politik/STR-213-styrningens-evolution-ett-adaptivt-och-integrerat-perspektiv.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-001 - Långsiktig Vision och Transformativa Mål"
  },
  {
    "id": "STR-214",
    "title": "STR-214",
    "path": "STR/STR-200-politik/STR-214-aubi-ekonomisk-analys-och-finansiering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-232 # Nödvändiga lagreformer för AUBI och livsstilsfrihet"
  },
  {
    "id": "STR-215",
    "title": "STR-215",
    "path": "STR/STR-200-politik/STR-215-mystik-och-kontemplation-ramverk.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "STR-216",
    "title": "STR-216",
    "path": "STR/STR-200-politik/STR-216-enteogener-och-psykedelisk-forskning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "STR-217",
    "title": "STR-217",
    "path": "STR/STR-200-politik/STR-217-ungas-ekonomiska-och-demokratiska-rättigheter.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar"
  },
  {
    "id": "STR-218",
    "title": "STR-218",
    "path": "STR/STR-200-politik/STR-218-integrerad-flernivådemokrati.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-105 # DidiS - Ramverk för digital direktdemokrati"
  },
  {
    "id": "STR-219",
    "title": "STR-219",
    "path": "STR/STR-200-politik/STR-219-ramverk-för-etisk-beskattning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-104 # Försäkran om icke-korruption för digitala lösningar"
  },
  {
    "id": "STR-220",
    "title": "STR-220",
    "path": "STR/STR-200-politik/STR-220-datasuveränitet-och-digital-autonomi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "STR-221",
    "title": "STR-221",
    "path": "STR/STR-200-politik/STR-221-ai-etik-och-utvecklingsriktlinjer.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-502 # Förhållande till artificiell intelligens"
  },
  {
    "id": "STR-222",
    "title": "STR-222",
    "path": "STR/STR-200-politik/STR-222-ramverk-för-hållbar-och-hälsosam-stadsutveckling.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft"
  },
  {
    "id": "STR-223",
    "title": "STR-223",
    "path": "STR/STR-200-politik/STR-223-transformation-av-utbildningssystemet-frihet-och-individualisering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar"
  },
  {
    "id": "STR-224",
    "title": "STR-224",
    "path": "STR/STR-200-politik/STR-224-vision-för-framtidens-integrerade-hälsovård.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "STR-225",
    "title": "STR-225",
    "path": "STR/STR-200-politik/STR-225-digital-systemintegration.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "STR-226",
    "title": "STR-226",
    "path": "STR/STR-200-politik/STR-226-ramverk-för-etiskt-försvar-och-konflikthantering.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-403 # Etiskt ramverk för relation till djur, växter och natur"
  },
  {
    "id": "STR-227",
    "title": "STR-227",
    "path": "STR/STR-200-politik/STR-227-ramverk-för-utvecklingspsykologi-och-samhällsförbättring.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "Utvecklingspsykologi och samhällsförbättring är grundläggande för Fjärilspartiets strävan efter ett inkluderande, medvetet och adaptivt samhälle. Detta dokument syftar till att belysa vårt förhållning..."
  },
  {
    "id": "STR-228",
    "title": "STR-228",
    "path": "STR/STR-200-politik/STR-228-utvecklingsramverk-och-systemförståelse.md",
    "category": "STR",
    "subcategory": "STR-200"
  },
  {
    "id": "STR-229",
    "title": "STR-229",
    "path": "STR/STR-200-politik/STR-229-evolution-av-medielandskapet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-227 # Utvecklingsramverk och systemförståelse"
  },
  {
    "id": "STR-230",
    "title": "STR-230",
    "path": "STR/STR-200-politik/STR-230-aubi-värdeskapande-i-praktiken.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet"
  },
  {
    "id": "STR-231",
    "title": "STR-231",
    "path": "STR/STR-200-politik/STR-231-arbetslivsflexibilitet-och-livsvägsmångfald.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "STR-232",
    "title": "STR-228",
    "path": "STR/STR-200-politik/STR-232-nödvändiga-lagreformer-för-aubi-och-livsstilsfrihet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-207 # Ramverk för religiös och andlig mångfald"
  },
  {
    "id": "STR-233",
    "title": "STR-233",
    "path": "STR/STR-200-politik/STR-233-detaljerad-analys-av-nyckelreformer-för-aubi-och-livsstilsfrihet.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-228 # Nödvändiga lagreformer för AUBI och livsstilsfrihet"
  },
  {
    "id": "STR-234",
    "title": "STR-230",
    "path": "STR/STR-200-politik/STR-234-övergångsplan-från-nuvarande-socialförsäkringssystem-till-aubi.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-214 # AUBI - Ekonomisk analys och finansiering"
  },
  {
    "id": "STR-235",
    "title": "STR-235",
    "path": "STR/STR-200-politik/STR-235-rekommenderade-resurser-för-utveckling-och-fördjupning.md",
    "category": "STR",
    "subcategory": "STR-200",
    "description": "- STR-228 # Utvecklingsramverk och systemförståelse"
  },
  {
    "id": "STR-301",
    "title": "STR-301",
    "path": "STR/STR-300-internationellt/STR-301-internationell-strategi.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Mening och meningsfullhet som universell rättighet"
  },
  {
    "id": "STR-302",
    "title": "STR-302",
    "path": "STR/STR-300-internationellt/STR-302-individuell-autonomi-och-utvecklingsmöjligheter-som-universell-rättighet.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-206 # Meningsfull tillvaro som social rättighet"
  },
  {
    "id": "STR-303",
    "title": "STR-303",
    "path": "STR/STR-300-internationellt/STR-303-konkreta-vägar-till-global-transformation.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet"
  },
  {
    "id": "STR-304",
    "title": "STR-304",
    "path": "STR/STR-300-internationellt/STR-304-globalt-konstitutionellt-ramverk-och-etisk-styrning.md",
    "category": "STR",
    "subcategory": "STR-300",
    "description": "- STR-302 # Individuell autonomi och utvecklingsmöjligheter som universell rättighet"
  },
  {
    "id": "STR-400",
    "title": "STR-400",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-400-hållbarhetsstrategi.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 - En blomstrande framtid - lokal motståndskraft och hållbara matsystem"
  },
  {
    "id": "STR-401",
    "title": "STR-401",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-401-en-blomstrande-framtid-lokal-motståndskraft-och-hållbara-matsystem.md",
    "category": "STR",
    "subcategory": "STR-400"
  },
  {
    "id": "STR-402",
    "title": "STR-402",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-402-klimatresiliens-och-biologisk-mångfald-ramverk.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 - En blomstrande framtid - Lokal motståndskraft och hållbara matsystem"
  },
  {
    "id": "STR-403",
    "title": "STR-403",
    "path": "STR/STR-400-hållbarhetsstrategi/STR-403-etiskt-ramverk-för-relation-till-djur-växter-och-natur.md",
    "category": "STR",
    "subcategory": "STR-400",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft och hållbara matsystem"
  },
  {
    "id": "STR-501",
    "title": "STR-501",
    "path": "STR/STR-500-digitalt-samhälle/STR-501-digital-etik-och-datasuveränitet.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-502 - Förhållande till artificiell intelligens"
  },
  {
    "id": "STR-502",
    "title": "STR-502",
    "path": "STR/STR-500-digitalt-samhälle/STR-502-förhållande-till-artificiell-intelligens.md",
    "category": "STR",
    "subcategory": "STR-500"
  },
  {
    "id": "STR-503",
    "title": "STR-503",
    "path": "STR/STR-500-digitalt-samhälle/STR-503-bioetik-och-framväxande-tekniker.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-504 Riktlinjer för framväxande bioteknologier"
  },
  {
    "id": "STR-504",
    "title": "STR-503",
    "path": "STR/STR-500-digitalt-samhälle/STR-504-riktlinjer-för-framväxande-bioteknologier.md",
    "category": "STR",
    "subcategory": "STR-500"
  },
  {
    "id": "STR-505",
    "title": "STR-505",
    "path": "STR/STR-500-digitalt-samhälle/STR-505-ai-styrning-för-mänskligt-blomstrande.md",
    "category": "STR",
    "subcategory": "STR-500",
    "description": "- STR-502 - Förhållande till artificiell intelligens"
  },
  {
    "id": "TAK-101",
    "title": "TAK-101",
    "path": "TAK/TAK-100-organisation/TAK-101-juridiskt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk"
  },
  {
    "id": "TAK-102",
    "title": "TAK-102",
    "path": "TAK/TAK-100-organisation/TAK-102-svenskt-politiskt-integrations-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk"
  },
  {
    "id": "TAK-103",
    "title": "TAK-103",
    "path": "TAK/TAK-100-organisation/TAK-103-finansiellt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100"
  },
  {
    "id": "TAK-104",
    "title": "TAK-104",
    "path": "TAK/TAK-100-organisation/TAK-104-kvalitetssäkringsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-102 # Digital partioperationsplattform - specifikation"
  },
  {
    "id": "TAK-105",
    "title": "TAK-105",
    "path": "TAK/TAK-100-organisation/TAK-105-intern-demokrati-och-hybridstyrning.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-103 # Digital partioperationsplattform - flexibelt styre"
  },
  {
    "id": "TAK-106",
    "title": "TAK-106",
    "path": "TAK/TAK-100-organisation/TAK-106-konflikthantering-och-medling.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-103 # Digital partioperationsplattform - flexibelt styre"
  },
  {
    "id": "TAK-107",
    "title": "TAK-107",
    "path": "TAK/TAK-100-organisation/TAK-107-lokala-kapitel-och-organisation.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- STR-401 # En blomstrande framtid - lokal motståndskraft"
  },
  {
    "id": "TAK-108",
    "title": "TAK-108",
    "path": "TAK/TAK-100-organisation/TAK-108-riktlinjer-för-ekonomisk-struktur-och-hantering.md",
    "category": "TAK",
    "subcategory": "TAK-100",
    "description": "- OPS-104 # Försäkran om icke-korruption för digitala lösningar"
  },
  {
    "id": "TAK-201",
    "title": "TAK-201",
    "path": "TAK/TAK-200-utveckling/TAK-201-utbildnings-och-träningsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- TAK-205 # Självbestämmande och personlig utveckling inom utbildning"
  },
  {
    "id": "TAK-202",
    "title": "TAK-202",
    "path": "TAK/TAK-200-utveckling/TAK-202-forskning-och-utvecklingsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-100 # Inledande skiss av grundläggande ramverk"
  },
  {
    "id": "TAK-203",
    "title": "TAK-203",
    "path": "TAK/TAK-200-utveckling/TAK-203-utbildningspolitiskt-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-210 # Demokratiskt deltagande för barn och ungdomar"
  },
  {
    "id": "TAK-204",
    "title": "TAK-204",
    "path": "TAK/TAK-200-utveckling/TAK-204-svensk-utbildningsintegration.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-209 # Invandrings- och integrationspolitiskt ramverk"
  },
  {
    "id": "TAK-205",
    "title": "TAK-205",
    "path": "TAK/TAK-200-utveckling/TAK-205-självbestämmande-och-personlig-utveckling-inom-utbildning.md",
    "category": "TAK",
    "subcategory": "TAK-200",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "TAK-300",
    "title": "TAK-300",
    "path": "TAK/TAK-300-hälsa/TAK-300-hälso-och-välfärdsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "TAK-301",
    "title": "TAK-301",
    "path": "TAK/TAK-300-hälsa/TAK-301-hälsofrämjande-insatser.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "TAK-302",
    "title": "TAK-302",
    "path": "TAK/TAK-300-hälsa/TAK-302-sjukvårdsramverk.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "TAK-303",
    "title": "TAK-303",
    "path": "TAK/TAK-300-hälsa/TAK-303-tillgänglig-och-holistisk-vård.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "TAK-304",
    "title": "TAK-304",
    "path": "TAK/TAK-300-hälsa/TAK-304-psykisk-hälsa-och-välbefinnande.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- TAK-305 # Självbestämmande och personlig utveckling som hälsokomponent"
  },
  {
    "id": "TAK-305",
    "title": "TAK-305",
    "path": "TAK/TAK-300-hälsa/TAK-305-självbestämmande-och-personlig-utveckling-som-hälsokomponent.md",
    "category": "TAK",
    "subcategory": "TAK-300",
    "description": "- STR-206 # Individuell autonomi och personlig utveckling som social rättighet"
  },
  {
    "id": "TAK-401",
    "title": "TAK-401",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-401-bostäder-och-stadsutveckling-ramverk.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "description": "- OPS-102 - Digital partioperationsplattform - Specifikation"
  },
  {
    "id": "TAK-402",
    "title": "TAK-402",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-402-rättsreform-och-social-rättvisa.md",
    "category": "TAK",
    "subcategory": "TAK-400"
  },
  {
    "id": "TAK-403",
    "title": "TAK-403",
    "path": "TAK/TAK-400-bostad-och-samhälle/TAK-403-ramverk-för-kulturell-innovation-och-bevarande.md",
    "category": "TAK",
    "subcategory": "TAK-400",
    "description": "- Bevarar och utvecklar kulturarv genom digital teknologi"
  },
  {
    "id": "TAK-501",
    "title": "TAK-501",
    "path": "TAK/TAK-500-land-och-lokal-utveckling/TAK-501-landsbygdsutveckling-och-decentralisering.md",
    "category": "TAK",
    "subcategory": "TAK-500"
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
