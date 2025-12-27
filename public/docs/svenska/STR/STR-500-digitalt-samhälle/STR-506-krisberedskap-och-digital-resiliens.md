# STR-506
---
dokumentid: STR-506
titel: Krisberedskap och digital resiliens
version: 1.0
senast-uppdaterad: 2025-12-27
ansvarig: Björn Kenneth Holmström
roll: Grundare och teknisk samordnare
relaterade-dokument:
  - STR-501 # Digital etik och datasuveränitet
  - STR-220 # Datasuveränitet och digital autonomi
  - STR-225 # Digital systemintegration
  - STR-400 # Hållbarhetsstrategi
---

# Krisberedskap och digital resiliens
## Fjärilspartiets policy för totalförsvarsinriktad IT-infrastruktur

### Sammanfattning

Fjärilspartiet förespråkar utveckling av öppen källkod infrastruktur för svensk digital suveränitet och totalförsvar. I en tid när undervattenssabotage (november 2024), cyberattacker och geopolitisk instabilitet hotar våra digitala system måste Sverige bygga infrastruktur som fungerar även under kris.

Vi förespråkar en övergång från centraliserad, internetberoende infrastruktur till distribuerade, offline-kapabla system som kan upprätthålla samhällskritiska funktioner även vid omfattande störningar.

---

## 1. Problemanalys

### 1.1 Nuvarande sårbarhet

**Sveriges digitala infrastruktur karakteriseras av:**

- **Molnberoende:** 95%+ av kommunal IT körs på amerikanska molntjänster (AWS, Azure, Google Cloud)
- **Internetberoende:** Nästan alla tjänster kräver kontinuerlig internetanslutning
- **Centralisering:** Enstaka kontrollpunkter som blir sårbarheter vid störning eller attack
- **Utländsk kontroll:** Data och tjänster beroende av utländska företag och jurisdiktion

**Konkreta risker:**

1. **Kabelavbrott:** November 2024 visade hur sabotage av undervattensledningar kan störa kritisk infrastruktur
2. **Cyberattacker:** Statssponsrade attacker mot kritisk infrastruktur ökar
3. **Geopolitisk påverkan:** Utländska företag kan stänga av tjänster vid sanktioner eller politisk konflikt
4. **Ekonomiskt beroende:** Stigande molnkostnader som svenska kommuner inte kan kontrollera

### 1.2 November 2024: Ett varningstecken

Sabotaget av C-Lion1 och BCS East-West kablarna mellan Sverige-Litauen och Finland-Tyskland demonstrerade:

- Hur enkelt kritisk infrastruktur kan störas
- Att Sverige saknar redundans för vissa kommunikationsvägar
- Att våra digitala tjänster inte är konstruerade för offline-drift

**Om avbrottet hade varat 72+ timmar:**
- Betalningssystem skulle ha kollapsat (Swish, BankID)
- Kommunala tjänster skulle blivit otillgängliga
- Ekonomisk aktivitet skulle ha avstannat
- Social samordning skulle ha störts allvarligt

---

## 2. Fjärilspartiets vision

### 2.1 Grundprinciper

**1. Offline-först arkitektur**
System måste fungera lokalt även utan internet, och synkronisera när anslutning återställs.

**2. Distribuerad kontroll**
Ingen enstaka kontrollpunkt (server, företag, stat) ska kunna tysta ner hela systemet.

**3. Öppen källkod**
All kritisk infrastruktur ska vara granskningsbar och kontrollerbar av svenska myndigheter och forskare.

**4. Lokal datasuveränitet**
Data ska lagras och kontrolleras lokalt, inte i utländska moln.

**5. Gradvis nedbrytning (graceful degradation)**
System ska försämras gradvis vid störning, inte kollapsa totalt.

### 2.2 Tekniska lösningar vi förespråkar

#### Peer-to-Peer (P2P) nätverk
- Direkt kommunikation mellan enheter utan central server
- Fortsatt funktion även vid internetavbrott via mesh-nätverk
- Teknologier som libp2p (används av IPFS, Filecoin globalt)

#### Lokal-först datalagring
- Data originerar och lagras på användarens enhet
- Servrar är cacher, inte källan till sanning
- GDPR-efterlevnad automatisk (användaren äger sin data)

#### Distribuerad identitetshantering
- Agent-centrerad identitet (användaren har nycklar, inte servern)
- Ingen central databas att hacka eller kompromissa
- Kryptografisk verifiering utan internetberoende

#### Offline-kapabla kommunikationssystem
- Mesh-nätverk via Bluetooth, Wi-Fi Direct
- Automatisk synkronisering när anslutning återställs
- Konfliktlösning vid offline-ändringar

---

## 3. Konkreta policyförslag

### 3.1 Kommunal IT-upphandling

**Förslag:** Ändra upphandlingskriterier för att prioritera krisberedskap

**Konkret:**
- Kommuner ska kräva offline-kapabilitet i IT-upphandling
- Poäng för öppen källkod och lokal datalagring
- Leverantörer måste demonstrera 72-timmars offline-drift
- Föredra EU/svenska leverantörer framför amerikanska molnjättar

**Motivering:**
Nuvarande upphandling optimerar för kostnad och bekvämlighet, inte resiliens. Vi måste värdera samhällskritisk funktion högre än marginalbesparingar.

### 3.2 Statlig finansiering av alternativ

**Förslag:** Vinnova och andra innovationsmyndigheter prioriterar krisberedskapsinfrastruktur

**Konkret:**
- Särskilda anslag för utveckling av offline-först teknologi
- Stöd till kommuner som piloterar resilient infrastruktur
- Forskningsfinansiering för distribuerade system
- Subventioner för övergång från molntjänster till lokal infrastruktur

**Motivering:**
Marknadskrafter ensamma bygger inte krisberedskap. Staten måste aktivt stödja utveckling och implementering av resilient infrastruktur.

### 3.3 MCF totalförsvarsdoktrin

**Förslag:** Myndigheten för civilt försvar (MCF) inkluderar digital resiliens som kärnkomponent

**Konkret:**
- Digital infrastruktur ska utvärderas med samma krav som fysisk försörjningsberedskap
- MCF ska granska och certifiera kritiska IT-system
- Krav på regelbundna offline-tester (liknande FOI:s krishanteringsövningar)
- Integration med Frivilliga resursgrupper (FRG) och Hemvärnet

**Motivering:**
Totalförsvarskonceptet 2024:1032 erkänner vikten av samhällsresiliens, men digitala system behandlas fortfarande som sekundära. De måste bli primära.

### 3.4 Utbildning och kompetensuppbyggnad

**Förslag:** Nationellt program för kompetens inom distribuerade system

**Konkret:**
- Universitetsutbildningar i P2P-arkitektur och krisberedskap
- Fortbildning för kommunala IT-chefer
- Certifieringsprogram för resilient systemdesign
- Samarbete med FOI, KTH, och andra forskningsinstitut

**Motivering:**
Sverige saknar tillräcklig kompetens inom dessa områden. Vi måste bygga upp kunskap för att inte vara beroende av utländsk expertis.

---

## 4. Exempel: CivicBase och Stuga

**OBS:** CivicBase och Stuga är oberoende projekt som utvecklas med stöd från Vinnova och MCF. Fjärilspartiet äger eller driver inte dessa projekt, men förespråkar att fler liknande initiativ bör utvecklas och implementeras.

### 4.1 CivicBase (Plattform)

**Vad det är:**
Offline-först, peer-to-peer infrastrukturplattform för svenska kommuner. Bygger på libp2p (samma teknologi som IPFS/Filecoin använder globalt).

**Tekniska egenskaper:**
- Agent-centrisk datamodell (varje användare äger sin data)
- End-to-end kryptering (AES-256-GCM)
- Offline-kapabel synkronisering (vector clocks + last-write-wins)
- Mesh-nätverk som backup vid internetavbrott
- GDPR-compliance by design

**Användningsområden:**
- TAK-405: Kollektivtrafikvälfärd med Hearts-valuta
- DPOP: Politisk organisering som fortsätter vid kommunikationsavbrott
- DiDiS: Distribuerad identitetshantering utan central databas
- Framtida: Äldrevård, resurskoordinering, demokratiska processer

### 4.2 Stuga (Applikation)

**Vad det är:**
Lokal grannsamverkansapplikation byggd på CivicBase-plattformen. Fokuserar på konkret krisberedskap i lokala communities.

**Funktioner:**
- Resursdelning mellan grannar (mat, verktyg, kunskap)
- Samordning vid lokal kris
- Fungerar via Bluetooth/Wi-Fi Direct när internet är nere
- Integration med Civilförsvarsförbundet och FRG

**Piloter:**
- Upplands Väsby: Test med lokala Civilförsvarsförbundet
- Skärgården: MCF-finansierad pilot för FRG-integration

### 4.3 Varför dessa är policyrelevanta

**CivicBase och Stuga demonstrerar:**

1. **Genomförbarhet:** Offline-först infrastruktur är tekniskt möjlig idag
2. **Praktisk nytta:** Fungerar både i fred (TAK-405) och kris (Stuga)
3. **Svensk kontroll:** Öppen källkod, svenska utvecklare, svensk data
4. **Skalbarhet:** Plattform som kan användas för många olika tjänster

**Fjärilspartiets position:**
Vi förespråkar att alla svenska kommuner bör utvärdera liknande system. CivicBase är ett exempel - målet är inte monopol utan ekosystem av resilient infrastruktur.

---

## 5. Jämförelse: Blockchain vs. P2P för kommunal infrastruktur

**Många frågar:** "Varför inte blockchain för detta?"

### 5.1 Blockchain-begränsningar för totalförsvar

**Internetberoende:**
- Blockchain kräver global konsensus över internet
- Vid kabelavbrott: systemet stannar helt

**Energiförbrukning:**
- Proof-of-work kräver massiv elektricitet
- Proof-of-stake kräver kontinuerlig online-närvaro

**GDPR-konflikt:**
- Immutabel ledger = omöjligt att radera data
- Strider mot "rätten att bli glömd"

**Prestanda:**
- Långsamma transaktioner (Bitcoin: 7/sek, Ethereum: 30/sek)
- Kommunala system behöver tusentals transaktioner/sekund

### 5.2 P2P-fördelar (libp2p)

**Offline-kapabel:**
- Mesh-nätverk fungerar lokalt utan internet
- Synkronisering när anslutning återställs

**Resurseffektiv:**
- Minimal energiförbrukning
- Funktion på billiga enheter

**GDPR-kompatibel:**
- Data kan raderas (tombstone-märkning)
- Användare kontrollerar sin data

**Snabb:**
- Direkt kommunikation mellan noder
- Inga väntande på global konsensus

**Beprövad:**
- Används av IPFS (miljontals noder globalt)
- Filecoin lagrar petabytes data
- libp2p är modulärt och välunderhållet

---

## 6. Implementationsstrategi

### 6.1 Fas 1: Pilotprojekt (2026-2027)

**Mål:** Validera teknologi i verkliga kommunala miljöer

**Aktiviteter:**
- 3-5 kommuner testar offline-först system
- Utvärdering av användaracceptans
- Teknisk validering (72-timmars offline-test)
- Kostnadsanalys vs. traditionella molntjänster

**Framgångskriterier:**
- Systemet fungerar offline >72 timmar
- Användare upplever systemet som användbart
- Total ägandekostnad ≤ molnalternativ
- GDPR-efterlevnad verifierad

### 6.2 Fas 2: Regional expansion (2027-2028)

**Mål:** Skala upp till flera regioner

**Aktiviteter:**
- 10-20 kommuner implementerar resilient infrastruktur
- Regionala mesh-nätverk testas
- Integration med befintliga system
- Kompetensuppbyggnad hos kommunal IT-personal

**Framgångskriterier:**
- Interoperabilitet mellan kommuner verifierad
- Mesh-nätverk fungerar vid simulerade störningar
- <20% av IT-budget fortfarande till amerikanska moln

### 6.3 Fas 3: Nationell standard (2028-2030)

**Mål:** Offline-först blir standard för samhällskritiska system

**Aktiviteter:**
- Nationella riktlinjer för krisberedskapsinriktad IT
- Obligatoriska offline-tester för kritiska system
- EU-samarbete kring resilient infrastruktur
- Export av svensk expertis till andra länder

**Framgångskriterier:**
- >50% av svenska kommuner har offline-kapabel infrastruktur
- MCF certifierar digitala system som "totalförsvarsgodkänd"
- Sverige erkänt som ledare inom resilient IT

---

## 7. Ekonomiska överväganden

### 7.1 Kostnader

**Initial investering (per kommun):**
- Pilotfas: 2-5 MSEK (infrastruktur, utbildning, konsulter)
- Drift: ~60% av nuvarande molnkostnader
- Kompetensuppbyggnad: 500 KSEK/år

**National satsning:**
- Vinnova-anslag: 100 MSEK/år (första 3 åren)
- MCF-stöd: 50 MSEK/år (piloter och övningar)
- Forskningsanslag: 30 MSEK/år

### 7.2 Besparingar

**Direkta:**
- Minskade molnkostnader (-40% efter 3 år)
- Färre licensavgifter till utländska företag
- Minskat behov av support (enklare system)

**Indirekta:**
- Förhindrade kriskostnader (svårt kvantifiera, men potentiellt miljarder)
- Ökad digital suveränitet (strategiskt värde)
- Exportmöjligheter (svensk expertis)

### 7.3 Avkastning

**Ekonomisk:**
- Break-even efter 5-7 år för typisk kommun
- Nationellt: positiv avkastning efter 10 år

**Strategisk:**
- Oberoende från utländska molnjättar
- Resiliens mot geopolitiska störningar
- Position som ledare inom krisberedskap

---

## 8. Risker och motargument

### 8.1 "För komplext för kommuner"

**Motargument:** Nuvarande molntjänster är också komplexa, skillnaden är att kommunen inte kontrollerar dem. Med rätt stöd och standardisering blir P2P-system lika hanterbara.

**Lösning:** 
- Nationella standarder och referensimplementationer
- Delade tjänster för mindre kommuner
- Kommersiella supportavtal för öppen källkod

### 8.2 "Blockchain är framtiden"

**Motargument:** Blockchain löser fel problem för kommunal infrastruktur. Det är designat för finansiella transaktioner där förtroende saknas, inte för samhällstjänster där tillit finns.

**Lösning:**
- Använd rätt verktyg för rätt problem
- Blockchain kan ha nischroller (transparens, revisionsloggar)
- P2P är bättre för daglig drift

### 8.3 "Säkerhetsproblem"

**Motargument:** Centraliserade system har större attack surface. Ett breach i AWS påverkar tusentals organisationer. Distribuerade system isolerar skador.

**Lösning:**
- Professionella säkerhetsgranskningar (400 KSEK budgeterat i CivicBase-grant)
- Öppen källkod = transparenta sårbarheter
- Defense in depth (flera lager av säkerhet)

### 8.4 "Kostar för mycket"

**Motargument:** Kostnad för att INTE ha resiliens kan vara mycket högre. November 2024 var en varning - nästa gång kan vara värre.

**Lösning:**
- Fasad utrullning minskar risker
- Delad infrastruktur mellan kommuner
- EU-finansiering för digital suveränitet

---

## 9. Internationellt perspektiv

### 9.1 EU Digital Sovereignty

EU har identifierat beroende av amerikanska tech-jättar som strategisk sårbarhet. Gaia-X och andra initiativ försöker skapa europeiska alternativ.

**Fjärilspartiets position:**
Sverige bör leda inom offline-först infrastruktur och positionera sig som expert inom EU:s digitala självständighetssatsningar.

### 9.2 Nordiskt samarbete

**Förslag:**
- Nordisk standard för resilient IT
- Delade mesh-nätverk över gränser
- Gemensam kompetensuppbyggnad
- Koordinerade krisberedskapsövningar

### 9.3 Global inspiration

**Vad vi kan lära av:**
- **Estland:** E-residency och digital infrastruktur
- **Schweiz:** Datasäkerhet och neutralitet
- **Taiwan:** Civic tech och medborgardrivna lösningar
- **Ukraina:** Militär motståndskraft via distribuerade system

---

## 10. Sammanfattning och rekommendationer

### 10.1 Kärnbudskap

1. **Sveriges digitala infrastruktur är för sårbar** för fortsatt beroende av centraliserade molntjänster
2. **Offline-först P2P-teknologi finns** och är beprövad globalt (IPFS, Filecoin)
3. **Små piloter kan validera** koncept innan storskalig investering
4. **Kostnaden för resiliens** är mindre än kostnaden för systemkollaps

### 10.2 Omedelbara åtgärder

**För riksdag/regering:**
- Tillsätt utredning om digital krisberedskap
- Inkludera offline-krav i nya IT-upphandlingar
- Finansiera pilotprojekt via Vinnova/MCF

**För kommuner:**
- Utvärdera nuvarande beroendesituation
- Delta i befintliga piloter (CivicBase, andra)
- Kräv offline-kapacitet av leverantörer

**För medborgare:**
- Ställ krav på kommunpolitiker om krisberedskap
- Engagera er i lokala Civilförsvarsförbund
- Testa offline-kapabla alternativ

### 10.3 Långsiktig vision

**År 2030 ska Sverige:**
- Ha nationell standard för offline-först infrastruktur
- Vara oberoende av amerikanska molntjättar för kritiska system
- Vara erkänt ledande inom digital krisberedskap
- Kunna upprätthålla samhällsfunktion i 72+ timmar utan internet

---

## 11. Referenser och relaterade dokument

### Interna dokument (Fjärilspartiet)
- **STR-220:** Datasuveränitet och digital autonomi
- **STR-501:** Digital etik och datasuveränitet
- **STR-225:** Digital systemintegration
- **STR-400:** Hållbarhetsstrategi

### Externa referenser
- **MCF Totalförsvar 2024:1032:** Svensk totalförsvarsdoktrin
- **November 2024 cable cuts:** C-Lion1 och BCS East-West sabotage
- **IPFS/libp2p documentation:** [ipfs.io](https://ipfs.io), [libp2p.io](https://libp2p.io)
- **EU Digital Sovereignty:** Gaia-X initiativet
- **CivicBase projekt:** [globalgovernanceframeworks.org](https://globalgovernanceframeworks.org)

### Forskning och expertis
- **FOI:** Totalförsvar och cybersäkerhet
- **RISE:** Svenskt forskningsinstitut för digital infrastruktur
- **KTH:** Distribuerade system och P2P-forskning

---

## Kontakt

**För policy-frågor:**
Fjärilspartiet
fjarilspartiet@gmail.com

**För tekniska frågor:**
Björn Kenneth Holmström
bjorn.kenneth.holmstrom@gmail.com

**För samarbete kring piloter:**
Se respektive kommuns kontaktinformation eller kontakta Civilförsvarsförbundet lokalt.

---

*Dokumentversion 1.0 - Första publicering*  
*Datum: 2025-12-27*  
*Nästa revidering planerad: 2026-06-27 (efter pilotresultat)*
