# OPS-105
---
dokumentid: OPS-105
titel: DidiS - ramverk för digitalt deltagande
version: 2.0
status: Utkast för diskussion – omarbetning efter strukturell granskning
senast-uppdaterad: 2026-08-10
ansvarig: Björn Kenneth Holmström
roll: Grundare och teknisk samordnare
relaterade-dokument:
  - STR-250 # Adaptiv demokrati- och inflytandepolitik (sensor och mandat)
  - STR-218 # Integrerad flernivådemokrati (kanaluppdelning och nivågränser)
  - STR-304 # Globalt konstitutionellt ramverk (varför global röstning utgår)
  - STR-210 # Demokratiskt deltagande för barn och ungdomar
  - OPS-102 # Digital partioperationsplattform - specifikation
  - OPS-205 # Säkerhetsramverk
  - TAK-105 # Intern demokrati och hybridstyrning
---

# DidiS – ramverk för digitalt deltagande
## Tre lägen, olika nivåer, olika tyngd

### Sammanfattning

Version 1.0 hette "ramverk för digital direktdemokrati" och beskrev ett system: förslag, deliberation, röstning, delegering, utrullning från kommun till nation. Det saknade två saker som avgör om systemet gör nytta eller skada.

Det saknade **nivågränser**. Ingenstans stod var funktionerna är giltiga. Det gjorde att andra dokument kunde citera DidiS som grund för direkt röstning om globala policyer – något plattformen inte kan leverera oavsett hur väl den byggs, eftersom problemet ligger i avståndet och inte i tekniken.

Det saknade **skillnaden mellan sensor och mandat**. Ett verktyg som upptäcker problem och ett verktyg som avgör vad allmänheten vill är olika saker med olika krav. En plattform som visar dem i samma gränssnitt, med samma vikt, raderar skillnaden i praktiken hur noga den än beskrivits i policydokumenten. Plattformen är den plats där distinktionen antingen byggs in eller går förlorad.

Version 2.0 delar DidiS i tre lägen med olika nivågränser och olika tyngd, och namnger de designval som avgör om systemet blir demokratiskt användbart eller bara populärt.

## 1. Tre lägen

### Läge A: sensor (självvalt deltagande)

**Vad det är.** Öppna förslag, kommentarer, diskussioner, felanmälan, tidiga varningssignaler. Vem som helst deltar när den vill.

**Vad det är bra på.** Att upptäcka problem, fånga lokalkännedom och lyfta det förvaltningen inte ser. Detta är en verklig och underskattad förmåga.

**Vad det inte är.** Ett mått på vad befolkningen vill. Deltagande i självvalda kanaler korrelerar strukturellt med tid, utbildning, ägt boende och ett befintligt intresse att skydda. Detta är inte ett rekryteringsproblem som kan lösas med bättre marknadsföring – det är en egenskap hos mekanismen.

**Nivåer:** alla, inklusive nationell och internationell. En sensor tål långa avstånd eftersom den inte gör anspråk på representativitet.

**Krav i gränssnittet:** varje sensorvy ska visa vem som deltagit – åldersfördelning, upplåtelseform, geografisk spridning – bredvid resultatet, inte i en separat rapport. Ett resultat utan deltagarsammansättning ska inte gå att exportera.

### Läge B: mandat (slumpvis urval)

**Vad det är.** Lottade paneler och medborgarjuryer med bindande eller starkt vägande koppling till beslut, understödda av plattformen: material, tidsbokning, dokumentation, uppföljning.

**Varför lottning.** Ett slumpmässigt urval som accepterar deltagande är den enda mekanism vi har som ger ett rimligt tvärsnitt av befolkningen. Det bindande inflytandet ska luta hit.

**Nivåer:** kommunal och regional, undantagsvis nationell för avgränsade frågor. Ju större population, desto svårare att både få ett tvärsnitt och ge deltagarna tillräcklig tid att sätta sig in i frågan.

**Krav:** ersättning och ledighet, så att deltagande inte förutsätter ekonomiskt utrymme. Bortfallet redovisas – vilka som lottades och tackade nej är en del av resultatet. Panelen ska ha rätt att kalla in expertis som inte utsetts av uppdragsgivaren.

### Läge C: omröstning

**Vad det är.** Bindande beslut genom röstning, med flera röstningsmetoder.

**Nivåer:** stadsdel och kommun. Vi föreslår inte nationella folkomröstningar via DidiS, och vi föreslår inte regionala annat än i avgränsade gränsfrågor.

**Vad omröstning är bra på.** Binära värde- och gränsfrågor där de som röstar också bär konsekvenserna.

**Vad omröstning är dålig på.** Komplexa avvägningar, tekniska frågor, och allt med väsentliga effekter utanför den röstande kretsen. Plattformen ska därför kräva att en fråga klassificeras innan den kan läggas ut för omröstning, och klassificeringen ska vara offentlig och överklagbar.

## 2. Vad som utgår ur version 1.0

**Global och nationell direktröstning.** DidiS lägger inte ut policyfrågor för omröstning över kommunnivå. Skälet är inte tekniskt: en preferens som färdas många sammanfattande led fram till beslutsnivån bär till slut ingen information om vad någon ville. Se STR-218 avsnitt 4 och STR-304 avsnitt 1. Referenser i STR-304 och STR-011 till global röstning via DidiS är borttagna i respektive dokument.

**"Fas 3: nationell utrullning (18 månader)."** Ersatt av villkorade steg (avsnitt 7). Utrullning ska dessutom förstås som spridning av läge A och B till fler kommuner, inte som en flytt av läge C uppåt.

**Blockkedjeintegration.** Kravet på verifierbar rösträkning står kvar. Kravet på en viss teknik gör det inte.

**Integration mot sociala plattformar.** Att hämta in signaler från sociala medier gör plattformens sensor skevare, inte bredare, och gör det svårt att skilja opinion från kampanj. Utgår.

**"Användarengagemang" som nyckeltal.** Se avsnitt 6.

## 3. Delegering – behålls med hårda gränser

Flytande demokrati är den funktion i version 1.0 som har de mest välkända och minst omtalade felen. Delegering tenderar att koncentreras: ett litet antal mottagare samlar på sig mycket stora mängder röster, och resultatet är representation utan valprövning, mandatperiod eller ansvarsutkrävande. Det är inte en förbättring av representativ demokrati, det är en sämre version av den.

Vi behåller funktionen och begränsar den:

- **Tak för hur många röster en enskild mottagare kan bära.** Över taket går ytterligare delegeringar inte igenom, och den som delegerar får veta varför.
- **Delegering är ämnesbunden.** Man delegerar inom ett område, inte generellt.
- **Delegeringar löper ut** och måste förnyas aktivt.
- **Full insyn i den egna kedjan.** Den som delegerat ska alltid kunna se vem som i slutändan röstar med rösten, och kunna ta tillbaka den fram till att röstningen stänger.
- **Cykler bryts** och rösten återgår till avsändaren i stället för att tystna.
- **Koncentrationen publiceras.** Hur delegeringarna fördelar sig är ett resultat i sig och ska redovisas efter varje omröstning.

Delegering är tillåten i läge C, inte i läge B. En lottad panels legitimitet bygger på att den enskilde deltagaren själv gör arbetet.

## 4. Deliberation, sammanfattning och AI

**Originalen är källan.** Plattformen får producera sammanfattningar. Sammanfattningen får aldrig vara det underlag ett beslut fattas på utan att originalet är tillgängligt och länkat. Det som komprimeras bort går inte att återskapa senare, och den som sammanfattar väljer vad som räknas.

**Om AI används för syntes** ska minst två av varandra oberoende system användas och deras resultat visas bredvid varandra när de skiljer sig. Ett enda sammanfattningssystem över alla kommuner ger inte många ögon utan många kopior av samma öga, och ett systematiskt fel i det blir omöjligt att upptäcka genom att jämföra kommuner.

**Modellstöd får sänka trösklar, inte fatta beslut.** Att hjälpa någon formulera ett förslag, hitta relaterade ärenden, förstå ett underlag på lättare svenska eller på annat språk – ja. Att ranka förslag, förutsäga utfall eller föreslå vad som bör prioriteras – nej.

**Faktagranskning ska vara källhänvisande, inte dömande.** Plattformen visar vad källor säger. Den märker inte påståenden som sanna eller falska, eftersom den funktionen förr eller senare kommer att användas politiskt.

## 5. Verifierbarhet mot valhemlighet

Version 1.0 hade både BankID-identifiering, transparent rösträkning och röstverifiering i samma lista utan att notera att de drar åt olika håll. Ett system där jag kan bevisa hur jag röstat är ett system där någon annan kan kräva att jag bevisar det – en arbetsgivare, en hyresvärd, en familjemedlem, en församling.

Vi tar ställning: **i läge C väger valhemligheten tyngre än individuell verifierbarhet.** Rösträkningen ska vara verifierbar på aggregerad nivå, den enskilda rösten ska inte vara bevisbar för tredje part, och den som röstar ska kunna rösta om fram till stängning så att en avlagd röst under påtryckning kan ersättas.

I läge A gäller det motsatta: där är öppenhet om vem som sagt vad i regel önskvärd, med möjlighet till anonymitet i känsliga frågor.

Detta är en verklig avvägning och vi anger den som ett designbeslut, inte som en självklarhet.

## 6. Mätning

Version 1.0 mätte användarengagemang, användarupplevelse och systemtillgänglighet. Det är mått på en produkt, inte på en demokratisk funktion, och ett system som optimeras mot dem blir en uppmärksamhetsprodukt.

Vi mäter i stället:

- **Representativitet:** hur deltagarnas sammansättning förhåller sig till befolkningens, per läge och per fråga.
- **Reell påverkan:** i hur många fall ett inkommet förslag ledde till en förändring, och i hur många det inte gjorde det. Båda talen publiceras.
- **Svarstid:** hur lång tid det tar från inlämnat förslag till motiverat besked.
- **Delegeringskoncentration:** fördelningen av burna röster.
- **Bortfall i lottade paneler:** vilka som tackade nej.

Vi mäter inte antal inloggningar eller tid i plattformen, och vi bygger inga funktioner vars syfte är att öka dem.

## 7. Legitimitetsrisken

En plattform som kvitterar att ett bidrag "mottagits och beaktats" när ingenting förändrades lär människor att systemet ljuger artigt. Det förbrukar det förtroende som allt annat i vår politik går på, och nedgången är lättare att hamna i än att ta sig ur.

Konstruktionskravet följer: **varje inlämnat förslag får ett motiverat besked, och beskedet redovisar vad som ändrades och vad som inte gjorde det.** Ett ärligt nej med skäl är bättre än ett vänligt mottagningskvitto. Om organisationen inte har kapacitet att ge motiverade besked ska funktionen inte finnas – hellre färre kanaler som fungerar än många som bekräftar.

## 8. Villkorade steg

**Steg 1 – läge A i en kommun.** Förutsätter att kommunen har kapacitet att ge motiverade besked. *Om inte:* bygg inte förslagsfunktionen än.

**Steg 2 – läge B i samma kommun.** Förutsätter ersättning till deltagare och en beslutsprocess som faktiskt tar emot panelens slutsats. *Om kopplingen till beslut saknas:* det blir en legitimeringsövning, och då avstår vi.

**Steg 3 – läge C.** Förutsätter att klassificeringen av frågor fungerar och att valhemligheten är löst i praktiken, inte bara i specifikationen.

**Steg 4 – spridning till fler kommuner.** Förutsätter oberoende utvärdering av steg 1–3 och att resultaten publicerats, även de dåliga.

Inget steg blir bättre av att tas innan det föregående är uppfyllt.

## 9. Teknik, säkerhet och integritet

Oförändrat i sak från version 1.0 och fortsatt giltigt: öppen källkod, modulär arkitektur, kryptering, dataminimering, rätt till radering, regelbundna säkerhetsgranskningar, fysiska alternativ till digitala vägar.

Tillägg:

- **Uppgifter om barn och unga** hanteras med striktare minimering och kortare lagringstider, enligt STR-210.
- **Deltagandedata är känsliga uppgifter.** Vem som engagerat sig i vilken fråga säger mycket om en person. Sammansättningsstatistik publiceras aggregerat; individuella deltagandemönster lagras inte längre än funktionen kräver.
- **Plattformen ska kunna granskas av någon som inte utvecklat den**, och den granskningen ska vara finansierad av någon annan än utvecklaren.

## 10. Vad vi inte vet

**Om läge B fungerar i svensk kontext.** Lottade paneler har prövats i andra länder med rimliga resultat. Vi vet inte hur bortfallet ser ut här eller om beslutsfattare faktiskt tar emot slutsatserna när de går emot dem.

**Om delegeringstaket är rätt konstruktion.** Det löser koncentrationen men skapar en gräns någon måste sätta, och den gränsen är ett politiskt val.

**Om motiverade besked är genomförbart i skala.** Kravet i avsnitt 7 är det som avgör om plattformen bygger eller förbrukar förtroende, och det är också det dyraste kravet i hela dokumentet.

## 11. Förhållande till övriga dokument

STR-250 bär skillnaden mellan sensor och mandat; avsnitt 1 är dess tekniska form. STR-218 bär nivågränserna. STR-210 bär ungas deltagande. TAK-105 bär partiets interna demokrati, där samma tre lägen gäller och där vi är den enda organisation vi kan ålägga dem.

---

**Dokumentstatus:** Utkast för diskussion. Ersätter version 1.0 i sin helhet.
