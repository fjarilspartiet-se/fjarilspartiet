# STR-218
---
dokumentid: STR-218
titel: Integrerad flernivådemokrati
version: 3.0
status: Utkast för diskussion – omarbetning efter strukturell granskning
senast-uppdaterad: 2026-08-10
ansvarig: Björn Kenneth Holmström
roll: Grundare och teknisk samordnare
relaterade-dokument:
  - STR-250 # Adaptiv demokrati- och inflytandepolitik (policyankare)
  - STR-110 # Adaptiv styrningsmodell
  - STR-249 # Adaptiv bostadspolitik (subsidiaritetens kapacitetsgräns)
  - OPS-105 # DidiS - Ramverk för digital direktdemokrati
  - STR-213 # Styrningens evolution
  - STR-210 # Demokratiskt deltagande för barn och ungdomar
---

# Integrerad flernivådemokrati
## Vad som faktiskt kan färdas mellan nivåer – och vad som inte kan det

### Sammanfattning

Version 2.0 av det här dokumentet byggde på en tilltalande idé: att demokratins problem är att nivåerna inte pratar med varandra, och att lösningen är att koppla ihop dem så att lokala röster "når hela vägen upp". Vi har prövat den idén mot vad som faktiskt går att veta om informationsflöden i flernivåsystem, och den håller inte. Att koppla ihop nivåer löser inte problemet, eftersom problemet inte är avsaknaden av en kanal utan vad som händer med informationen *i* kanalen.

Varje steg uppåt är en sammanfattning. Sammanfattningar tar bort spridning och behåller medelvärden. Det som tagits bort går inte att återskapa längre upp – ingen mängd analys, AI-stöd eller god vilja på nationell nivå kan rekonstruera den variation som redan komprimerats bort i den regionala syntesen. Bortom ett par led är det som når toppen inte längre en signal om vad människor vill, utan brus som ser ut som en signal.

Den här versionen gör tre saker. Den byter ut löftet "din röst når nationell nivå" mot ett hederligare och mer användbart löfte. Den delar upp det som färdas mellan nivåer i tre olika kanaler med olika krav. Och den flyttar tekniken från lösning till stödfunktion, eftersom teknik verkar på signalen *efter* att den anlänt och inte kan rädda det som redan gått förlorat.

## 1. Tes: kopplingen är inte problemet – komprimeringen är det

Vi har beskrivit svensk flernivådemokrati som fragmenterad: kommuner, regioner och stat i separata silos. Det stämmer och är ett verkligt problem – dubbelarbete, motstridiga planer, diffust ansvar. Men slutsatsen vi drog av det var fel. Vi drog slutsatsen att lösningen är fler och tätare kopplingar uppåt.

En kanal som transporterar sammanfattningar av sammanfattningar blir inte bättre av att bli bredare. Den blir bättre av att någon bestämmer vad som *inte* får sammanfattas bort. Det är en helt annan designuppgift, och den är svårare, billigare och mer verkningsfull än den vi tidigare beskrev.

Den bärande omformuleringen: **integration handlar inte om att låta allt färdas överallt, utan om att avgöra vad som måste bevaras i varje steg och vilken nivå som ska göra vad.**

## 2. Vad den gamla diagnosen fångade – och var den ledde fel

**Vad som håller.** Ansvaret är diffust när kommun, region och stat delar det utan tydlig gränsdragning. Kommuner uppfinner samma hjul parallellt utan att lära av varandra. Medborgare möter processer som är svåra att navigera. Återkopplingen från utfall till beslut är svag. Allt detta står kvar.

**Var den ledde fel.**

**"Lokala röster ska nå nationell nivå" är ett löfte kanalen inte kan hålla.** Preferensöverföring fungerar när avståndet mellan människor och beslut är ett eller två led. Då finns spridningen kvar, då går det att se vem som tycker vad och hur mycket. Bortom det leden försvinner spridningen först, och därefter mönstret. Att lova att en enskild kommuninvånares förslag ska forma riksdagsbeslut är inte ambitiöst, det är oärligt – och när löftet inte infrias betalar vi i förtroende.

**"Regional syntes" är namnet på förlusten, inte på lösningen.** Version 2.0 beskrev ett steg där lokala initiativ från olika kommuner "sammankopplas för att identifiera gemensamma mönster". Det som händer i praktiken är att det som är gemensamt behålls och det som är avvikande försvinner. Men den kommun där något går katastrofalt fel är oftast den viktigaste informationen i hela systemet, och den ser i en syntes ut som en avvikelse att jämna ut.

**Vertikal integration antogs vara vägen till horisontellt lärande.** Om Växjö ska lära av Ljungby behöver den kunskapen inte gå via regionen. Vi byggde en omväg genom en komprimeringspunkt för något som inte behövde komprimeras.

**Tekniken beskrevs som om den ökade signalkvaliteten.** AI-syntes, blockkedjespårning och realtidsanalys arbetar alla på den information som redan kommit fram. De kan inte återskapa det som togs bort tidigare i kedjan, och en oföränderlig logg över ett förvanskat underlag är en oföränderlig logg över ett förvanskat underlag.

**Var modellen tar slut.** Mycket av samordningsproblemet mellan svenska nivåer är inte ett informationsproblem alls, utan ett intressekonflikt- och finansieringsproblem. Kommunen som säger nej till regional infrastruktur saknar sällan information. Den har andra incitament. Ingen kanaldesign löser det; det kräver att ansvar och konsekvens sitter ihop (STR-250).

## 3. Principer

**Bevarande före koppling.** Innan vi bygger en kanal uppåt bestämmer vi vad som inte får försvinna i den.

**Bindande inflytande nära, koordination långt bort.** Ju längre från människorna ett beslut fattas, desto mindre ska det handla om att representera preferenser och desto mer om att sätta ramar, jämna ut resurser och upprätthålla regler alla vinner på att alla följer.

**Sensor och mandat är inte samma sak.** Vi ärver skillnaden från STR-250. Självvalda kanaler upptäcker problem. De avgör inte vad allmänheten vill.

**Kedjedjup är en designparameter.** Antalet led mellan den som berörs och den som beslutar är något vi räknar, redovisar och håller nere – inte något som bara blir som det blir.

**Horisontellt före vertikalt.** Kommun lär av kommun direkt. Regionen och staten stödjer den spridningen, de är inte dess flaskhals.

## 4. Tre kanaler, inte en

Version 2.0 hade en kanal som skulle bära allt. Det är den kanalen som kollapsar. Vi delar den i tre, med olika krav och olika räckvidd.

**Preferenskanalen – vad människor vill.** Bär värderingar och prioriteringar. Fungerar på ett till två led. Här hör bindande inflytande hemma: kommunala beslut, stadsdelsbeslut, lottade paneler med verklig koppling till beslut, lokala folkomröstningar i värde- och gränsfrågor. Denna kanal **skalas inte uppåt**. Vi bygger den bred och kort i stället för lång.

**Tillståndskanalen – hur det faktiskt är.** Bär mätvärden om verkligheten: bostadsbrist, skolresultat, väntetider, utsläpp, otrygghet. Denna kanal ska nå hela vägen upp, men med krav på vad som måste överleva varje steg (avsnitt 5.1). Den är en observationskanal, inte en viljekanal – att veta att en kommun har akut bostadsbrist är inte samma sak som att veta vad dess invånare vill att någon ska göra åt det, och att blanda ihop dem är ett av de vanligaste felen i svensk utredningstradition.

**Koordinationskanalen – vad vi kommit överens om att alla följer.** Bär protokoll, miniminivåer, standarder, finansieringsvillkor och utjämning. Går uppifrån och ned och behöver ingen hög upplösning nedifrån. Det är den här kanalen som gör att kommuner kan vara olika utan att bli ojämlika.

Nationell och europeisk nivå är, i den här uppdelningen, primärt koordinationsnivåer. Det är inte en degradering. Att sätta miniminivåer, finansiera utjämning, upprätthålla rättssäkerhet och bära det som ingen kommun kan bära ensam är en av de mest omfördelande saker en stat gör. Det är bara inte samma sak som att representera enskilda medborgares preferenser, och vi slutar låtsas att det är det.

## 5. Mekanismer att pröva

Mekanismerna drar delvis åt olika håll – en kortar kedjor, en annan kräver mer rapportering uppåt. Det är avsiktligt. Vi vill pröva dem parallellt och låta utfallen avgöra.

### 5.1 Distributionskrav i all uppåtrapportering

**Vad vi vill:** Göra det olagligt i praktiken att rapportera bara medelvärden.

**Så vill vi pröva det:**
- Varje mått som rapporteras från kommun till region eller stat följs av spridningen: värsta decilen, bästa decilen, och antalet enheter under en förutbestämd golvnivå.
- Automatisk eskalering: när en enhet passerar ett i förväg definierat larmvärde utlöses en granskning som inte kan jämnas ut i en sammanställning, oavsett hur riksgenomsnittet ser ut.
- Statsbidrag och utjämning beräknas på behovsspridning, inte på befolkningsstorlek eller genomsnitt.

**Prioriterar:** Att den enhet där något går sönder är den mest synliga, inte den minst synliga.
**Offrar:** Enkelhet och administrativ lätthet. Detta är mer rapportering, och rapportering har en kostnad som betalas av samma frontlinjepersonal som redan är överbelastad. Om vi inte tar bort något annat samtidigt blir mekanismen ett pålägg.
**Evidens som lyfts (att verifiera):** Erfarenheter från brittiska transparensagendor visar att öppna data i sig inte ändrar beslut utan konsekvenskoppling – vilket är just varför eskaleringen måste vara automatisk och inte frivillig.

### 5.2 Kedjedjup som redovisad och begränsad parameter

**Vad vi vill:** Räkna leden mellan den som berörs och den som beslutar, publicera siffran, och hålla den nere.

**Så vill vi pröva det:**
- För ett urval sakområden kartläggs och publiceras faktiskt beslutsavstånd: antal led, och tid från att ett problem först dokumenterats till att ett beslut fattats.
- Ett tak prövas i pilotkommuner för hur många led ett ärende av en viss typ får passera innan det ska avgöras.
- Nya samordningsorgan, råd och beredningar bedöms mot om de lägger till ett led. Ett organ som gör kedjan längre måste motivera varför det ändå gör den bättre.

**Prioriterar:** Korta återkopplingsslingor och möjligheten att utkräva ansvar av någon som faktiskt fattade beslutet.
**Offrar:** Beredningskvalitet och likvärdighet. Färre led betyder färre kontrollstationer, och några av dem finns av goda skäl. Vissa dåliga beslut kommer igenom snabbare.

### 5.3 Horisontell spridning utan vertikal omväg

**Vad vi vill:** Låta kommuner lära direkt av varandra i stället för via en regional syntes.

**Så vill vi pröva det:**
- Ett öppet register där varje kommunal pilot ligger som den skrevs: hypotes, utformning, mätvärden, utfall och – särskilt – vad som inte fungerade. Ingen sammanfattning ersätter originalet.
- Direkt matchning mellan kommuner med liknande förutsättningar, utan mellanled.
- En aktiv spridningsfunktion med resurser, eftersom det som fungerar bevisligen inte sprider sig av sig självt (STR-250:s spridningsproblem).

**Prioriterar:** Att den fulla informationen finns kvar för den som vill använda den.
**Offrar:** Överblick. Ett register med originalen är svårare att läsa än en sammanställning, och risken är att ingen läser det. Spridningsfunktionen är det som ska bära den kostnaden, och om den underfinansieras faller mekanismen.

### 5.4 Konsekvensbärandeprövning i stället för automatisk uppåtkoordinering

**Vad vi vill:** Ersätta "automatisk ärendekoordinering mellan nivåer" med en prövning av var beslutet hör hemma.

**Så vill vi pröva det:**
- När kommunala beslut kolliderar prövas inte vem som har formellt företräde, utan var konsekvenserna faller. Bärs de utanför den beslutande kretsen flyttas frågan uppåt; bärs de lokalt ligger den kvar.
- Prövningen görs öppet och motiverat, med möjlighet för kommunen att få sin sak prövad – den subsidiaritetsnämnd som föreslås i STR-250.

**Prioriterar:** Att gränsdragningen mellan nivåer blir en levande, prövbar och öppet motiverad fråga.
**Offrar:** Snabbhet, och en reell risk för centralisering. "Konsekvenserna bärs utanför" är ett argument som nästan alltid går att konstruera om man vill. Detta är mekanismens centrala svaghet och den behandlas i avsnitt 7.2.

### 5.5 Mätning av arkitekturen, inte bara av utfallen

**Vad vi vill:** Mäta om vår egen styrningsmodell faktiskt gör det vi påstår.

**Så vill vi pröva det:**
- Fyra parametrar följs och publiceras i pilotkommuner: beslutslatens (tid från dokumenterat problem till åtgärd), kedjedjup, hur väl policyutfall motsvarar uttryckta preferenser i frågor där båda är mätbara, och hur många oberoende dimensioner som faktiskt används för att observera ett problemområde.
- Utgångsvärden mäts före reform, inte efter.

**Prioriterar:** Att vi kan ha fel på ett sätt som syns. Om Framtidskommuner inte sänker latensen är det ett resultat, och vi publicerar det.
**Offrar:** Bekvämlighet. Ett system som mäter sin egen arkitektur producerar med tiden bevis mot delar av sitt eget program.

## 6. Teknik: vad den kan och inte kan

Version 2.0 hade ett eget kapitel om teknologiska innovationer, placerat som om tekniken var lösningen. Den flyttas här till en stödroll, med tre ärliga begränsningar.

**AI kan inte återskapa det som komprimerats bort.** AI-stöd är användbart för att göra material begripligt, hitta relaterade ärenden, sammanfatta remissvar och sänka trösklar för den som vill delta. Det är verklig nytta. Men modellanalys av ett underlag där spridningen redan tagits bort producerar självsäkra mönster i brus, och gör det övertygande. Vi använder AI nedströms i kanalen och litar inte på den för att kompensera uppströms förluster.

**En gemensam AI-infrastruktur är en gemensam blind fläck.** Om alla kommuner analyserar sina underlag med samma modell blir deras systematiska fel identiska, och identiska fel går inte att upptäcka genom att jämföra kommunerna med varandra. Vi ställer därför krav på att beslutsunderlag av vikt granskas genom minst två av varandra oberoende kanaler – olika modeller, eller modell plus mänsklig oberoende granskning. Vi tillämpar samma princip i vårt eget arbete och tycker den är rimlig att kräva av offentlig förvaltning.

**Blockkedja löser ett problem vi sällan har.** Oföränderlig spårning skyddar mot efterhandsmanipulation av protokoll. Det är inte den huvudsakliga svagheten i svensk förvaltning, och tekniken har en kostnad i komplexitet, energi och kompetensberoende. Vi behåller kravet på **verifierbar** spårbarhet och öppna beslutsloggar, och släpper kravet på att lösningen ska vara en blockkedja. Om en enklare lösning ger samma verifierbarhet väljer vi den.

**Medborgarportalen bär en legitimitetsrisk.** En portal som visar "ditt bidrag har mottagits och beaktats" när ingenting förändrades lär människor att systemet ljuger artigt. Förtroende är inte en produkt av tillgänglig information utan av att det man ser stämmer med det man erfar, och när det inte stämmer slutar människor både följa beslut och rapportera ärligt – vilket gör systemet både svårstyrt och blint på samma gång. Vi bygger därför portalen med ett hårdare krav: den redovisar vad som faktiskt ändrades och vad som inte gjorde det, med skäl. Hellre ett ärligt nej med motivering än ett vänligt mottagningskvitto.

## 7. Två obekväma bedömningar

### 7.1 Mer inflytande gynnar inte alla lika

Samma sak som i STR-250, och den gäller med full kraft här: varje verktyg som ökar inflytandet mellan valen gynnar strukturellt dem som har tid, utbildning, ägt boende och något befintligt att skydda. En integrerad flernivåplattform gör det värre, inte bättre, om den är självvald – den ger de redan mobiliserade en kanal till varje nivå samtidigt.

Slutsatsen är inte att avstå, utan att preferenskanalen ska luta mot lottade och representativa former för det bindande inflytandet och behandla självvalda kanaler som sensorer. Det innebär att vi ibland ger mindre spontant utrymme åt dem som redan har mest.

### 7.2 "Integration" kan vara centralisering i förklädnad

Ett system där varje kommunalt beslut automatiskt synkas mot regionala och nationella planer är inte neutralt. Det ger den nivå som definierar planen ett tyst veto över de andra, utan att någon behöver fatta ett beslut om att flytta makt. Det är precis så centralisering brukar gå till: inte genom ett maktövertagande utan genom en samordningsrutin.

Vi säger därför rakt ut att gränsdragningen mellan nivåer är ett politiskt avgörande, inte ett tekniskt. Ingen algoritm, ingen automatisk ärendekoordinering och ingen konsekvensanalys avgör var ett beslut hör hemma. Människor gör det, öppet och motiverat, och kan överprövas.

## 8. Skyddsräcken

- **Distributionskrav som blir pappersarbete** – ta bort minst lika mycket rapportering som läggs till, och mät om frontlinjen faktiskt fick mer tid.
- **Eskaleringslarm som ingen agerar på** – varje larm ska ha en namngiven mottagare med mandat och budget, annars är det bara statistik.
- **Registret som ingen läser** – spridningsfunktionen är inte en fotnot, den är förutsättningen.
- **Konsekvensbärandeprövningen som centraliseringsverktyg** – nämndens sammansättning och överklagandeväg måste skydda mot detta, och besluten publiceras med skäl.
- **Portalen som legitimitetsteater** – mät reell påverkan, inte antal inskickade bidrag.
- **Gemensam modellinfrastruktur** – kravet på oberoende granskningskanaler får inte förhandlas bort för att det är dyrt, eftersom det är precis då det behövs.

## 9. Ett realistiskt exempel

Version 2.0 följde Maria i Växjö från ett cykelvägsförslag till nationell lagstiftning. Historien var uppbygglig och missvisande. Så här ser den ut med den arkitektur vi föreslår.

Maria föreslår ett sammanhängande cykelvägnät i Växjö. Förslaget bereds på kommunal nivå – ett led mellan henne och beslutet. Det diskuteras öppet, trafikplanerare bidrar med underlag, en lottad panel med bindande koppling väger det mot andra prioriteringar. Kommunen fattar beslut och motiverar det. Om svaret blir nej får hon veta varför.

Ljungby och Älmhult ser Växjös underlag i det öppna registret – hela underlaget, inte en sammanfattning – och kontaktar Växjö direkt. Ingen regional syntes behövs för att tre kommuner ska kunna prata med varandra. Regionen bidrar där den har rådighet: sammanhängande stråk över kommungränser, kollektivtrafikens knutpunkter.

Nationell nivå gör tre saker, och inte fler. Den finansierar. Den sätter standarder som gör att stråken hänger ihop över landet. Och den samlar tillståndsdata om cykelinfrastruktur, med spridningen kvar, så att det syns var det är sämst och inte bara vad snittet är.

Vad Maria inte får är ett meddelande om att hennes förslag påverkade riksdagens lagstiftning. Det påstod version 2.0, och det var det oärliga i den. Vad hon får i stället är ett verkligt beslut på den nivå hon faktiskt kan nå, ett öppet skäl om det blev nej, och ett cykelnät som hänger ihop med grannkommunernas därför att den nationella nivån gjorde sitt jobb – inte därför att hennes röst reste fyra led uppåt och kom fram intakt.

## 10. Vad vi inte har löst

**Vem sätter larmnivåerna.** Distributionskraven i 5.1 bygger på i förväg definierade golv. Var de golven ligger är en fördelningspolitisk fråga i teknisk dräkt, och vi har inte en process för att avgöra den.

**Tillståndskanalen kan Goodhartas.** Så snart spridningen styr pengar kommer den att rapporteras strategiskt. Vi vet detta och har ingen färdig motmedicin utöver oberoende granskning och att byta mått innan de blir helt korrumperade.

**Vi har inte prövat något av detta.** Detta är ett utkast med hypoteser, inte ett program med belägg. Mekanismerna i avsnitt 5 är formulerade för att kunna prövas i Framtidskommuner enligt STR-110, och 5.5 finns till för att vi ska kunna upptäcka att vi hade fel.

## 11. Förhållande till övriga dokument

STR-250 är policyankaret för demokrati och inflytande, och bär den försonade subsidiaritetsprincipen. Det här dokumentet är dess flernivåtillämpning: hur informationen rör sig mellan nivåer när ansvaret väl fördelats. STR-110 beskriver hur mekanismerna prövas. OPS-105 (DidiS) behöver revideras i ljuset av avsnitt 4 och 6 – särskilt påståendena om direkt röstning på nivåer där preferenskanalen inte når. STR-213 innehåller en äldre teknikoptimism som stäms av mot avsnitt 6.

---

**Dokumentstatus:** Utkast för diskussion. Ersätter version 2.0 i sin helhet.
**Nästa steg:** Avstämning mot OPS-105 och STR-213.
