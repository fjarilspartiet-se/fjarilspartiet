# Dokumenthierarki för Fjärilspartiet

## Strategisk nivå (STR)

### Grunddokument (STR-100)
- STR-100 Inledande skiss av grundläggande ramverk
- STR-101 Partigrund
- STR-102 Bas i p(∞)=1
- STR-103 Etik- och värderingsramverk
- STR-104 Fjärilsramverket
- STR-105 Bortom symboler
- STR-106 Vanliga frågor om bortom symboler

### Politisk strategi (STR-200)
- STR-201 Adaptivt skatteramverk
- STR-202 Svenskt adaptivt skatteramverk
- STR-203 Adaptiv universell basinkomst (AUBI)
- STR-204 AUBI fallstudie
- STR-205 Holistiskt stödramverk
- STR-206 Meningsfull tillvaro som social rättighet
- STR-207 Ramverk för religiös och andlig mångfald
- STR-208 Ramverk för alternativa livsstilar
- STR-209 Invandrings- och integrationspolitiskt ramverk
- STR-210 Demokratiskt deltagande för barn och ungdomar

### Internationell strategi (STR-300)
- STR-301 Internationell strategi
- STR-302 Mening och meningsfullhet som universell rättighet

### Hållbarhetsstrategi (STR-400)
- STR-401 En blomstrande framtid - lokal motståndskraft och hållbara matsystem

## Taktisk nivå (TAK)

### Organisatoriska ramverk (TAK-100)
- TAK-101 Juridiskt ramverk
- TAK-102 Svenskt politiskt integrationsramverk
- TAK-103 Finansiellt ramverk
- TAK-104 Kvalitetssäkringsramverk

### Utvecklingsramverk (TAK-200)
- TAK-201 Utbildnings- och träningsramverk
- TAK-202 Forsknings- och utvecklingsramverk
- TAK-203 Utbildningspolitiskt ramverk
- TAK-204 Svensk utbildningsintegration
- TAK-205 Meningsfullhet inom utbildning

### Hälso- och välfärdsramverk (TAK-300)
- TAK-301 Hälsofrämjande insatser
- TAK-302 Sjukvårdsramverk
- TAK-303 Tillgänglig och holistisk vård
- TAK-304 Psykisk hälsa och välbefinnande
- TAK-305 Mening och meningsfullhet som hälsokomponent

## Operativ nivå (OPS)

### Digital infrastruktur (OPS-100)
- OPS-101 Partiets operationsplattform - skiss
- OPS-102 Digital partioperationsplattform - specifikation
- OPS-103 Digital partioperationsplattform - flexibelt styre
- OPS-104 Försäkran om icke-korruption för digitala lösningar

### Praktiska riktlinjer (OPS-200)
- OPS-201 Konkreta åtgärdsplaner
- OPS-202 Kommunikationsstrategi
- OPS-203 Extern kommunikation om meningsfull tillvaro
- OPS-204 Symbolriktlinjer
- OPS-205 Säkerhetsramverk
- OPS-206 Utbildning implementeringsriktlinjer
- OPS-207 Exempel på utbildningsprojekt

## Filstruktur

```
fjärilspartiet/
├── STR/
│   ├── STR-100-grund/
│   ├── STR-200-politik/
│   ├── STR-300-internationellt/
│   └── STR-400-hållbarhet/
├── TAK/
│   ├── TAK-100-organisation/
│   ├── TAK-200-utveckling/
│   └── TAK-300-hälsa/
└── OPS/
    ├── OPS-100-digital/
    └── OPS-200-riktlinjer/
```

## Versionering och metadata

Varje dokument ska innehålla följande metadata i huvudet:
```markdown
---
dokumentid: STR-101
titel: Partigrund
version: 1.0
senast-uppdaterad: ÅÅÅÅ-MM-DD
ansvarig: [Namn/Roll]
relaterade-dokument: [Lista med dokumentid]
---
```

## Namngivningskonvention

Format: `[NIVÅ]-[NUMMER]-kortnamn.md`

Exempel:
- STR-101-partigrund.md
- TAK-101-juridiskt-ramverk.md
- OPS-101-plattform-skiss.md
