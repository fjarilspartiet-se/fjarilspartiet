# STR-219
---
dokumentid: STR-219
titel: Ramverk för etisk beskattning
version: 1.0
senast-uppdaterad: 2024-11-13
ansvarig: Björn Kenneth Holmström
roll: Grundare och strategisk samordnare
relaterade-dokument:
  - STR-201 # Adaptivt skatteramverk
  - STR-202 # Svenskt adaptivt skatteramverk
  - STR-103 # Etik för jämvikt och sammanlänkning
  - OPS-104 # Försäkran om icke-korruption för digitala lösningar
---

# Ramverk för etisk beskattning
## Ett system för värderingsbaserad ekonomisk styrning

### 1. Grundprinciper

#### 1.1 Etiska bedömningsgrunder
- **Miljöpåverkan**: Hela livscykelns miljöeffekter
- **Social påverkan**: Arbetsförhållanden och samhällseffekter
- **Transparens**: Öppenhet i verksamhet och redovisning
- **Hållbarhet**: Långsiktig påverkan på ekosystem och samhälle
- **Etiskt ledarskap**: Företagsstyrning och värderingar

#### 1.2 Skattenivåer
**Progressiv etisk beskattning:**
- Högre skatt för negativ påverkan
- Skattelättnader för positiv påverkan
- Neutralt skatteläge för genomsnittlig påverkan
- Dynamisk anpassning baserad på utveckling

### 2. Bedömningssystem

#### 2.1 Etiskt index
**Bedömningskategorier:**

1. **Miljöansvar (30%)**
   - Koldioxidavtryck
   - Resursanvändning
   - Avfallshantering
   - Ekosystempåverkan
   - Biologisk mångfald

2. **Socialt ansvar (25%)**
   - Arbetsvillkor
   - Mångfald och inkludering
   - Samhällsengagemang
   - Lokal påverkan
   - Mänskliga rättigheter

3. **Styrning och transparens (20%)**
   - Öppen redovisning
   - Antikorruptionsarbete
   - Etiska riktlinjer
   - Intressentdialog
   - Ansvarstagande ledarskap

4. **Innovation och utveckling (15%)**
   - Hållbar innovation
   - Kunskapsdelning
   - Systemförbättring
   - Samhällsutveckling
   - Framtidsberedskap

5. **Värdekedjeansvar (10%)**
   - Leverantörskedja
   - Partnersamarbeten
   - Produktlivscykel
   - Konsumentansvar
   - Materialspårbarhet

#### 2.2 Beräkningsmodell
```python
def calculate_ethical_tax_rate(base_rate, ethical_index):
    # Base rate: Standard company tax rate (e.g., 20.6%)
    # Ethical index: Score 0-100 where 50 is neutral
    
    max_adjustment = 0.15  # Maximum 15% adjustment up or down
    neutral_score = 50
    
    # Calculate adjustment factor (-1 to 1)
    adjustment_factor = (ethical_index - neutral_score) / neutral_score
    
    # Calculate tax adjustment
    tax_adjustment = max_adjustment * adjustment_factor
    
    # Calculate final tax rate
    final_rate = base_rate * (1 - tax_adjustment)
    
    return max(min(final_rate, base_rate * 1.15), base_rate * 0.85)
```

### 3. Produktspecifik beskattning

#### 3.1 Produktkategorisering
**Etiska produktkategorier:**

1. **Positiv påverkan**
   - Miljöförbättrande produkter
   - Hälsofrämjande varor
   - Utbildningsmaterial
   - Hållbarhetslösningar
   - Samhällsförbättrande tjänster

2. **Neutral påverkan**
   - Vardagsprodukter
   - Basvaror
   - Standardtjänster
   - Underhållsprodukter
   - Normala konsumtionsvaror

3. **Negativ påverkan**
   - Miljöskadliga produkter
   - Hälsoskadliga varor
   - Resurskrävande lyxartiklar
   - Onödiga engångsprodukter
   - Socialt problematiska tjänster

#### 3.2 Skattedifferentiering
**Skattenivåer baserade på påverkan:**
- Reducerad skatt för positiv påverkan (0-12%)
- Standardskatt för neutral påverkan (25%)
- Förhöjd skatt för negativ påverkan (25-50%)

### 4. Implementation

#### 4.1 Fasad införing
**Implementationsfaser:**

1. **Pilotfas (1 år)**
   - Frivillig certifiering
   - Testning av bedömningssystem
   - Begränsad omfattning
   - Utvärdering och justering

2. **Utökad testfas (2 år)**
   - Obligatorisk för större företag
   - Utökad produktcertifiering
   - Systemoptimering
   - Branschspecifik anpassning

3. **Full implementation (3+ år)**
   - Omfattar alla företag
   - Komplett produktcertifiering
   - Kontinuerlig utvärdering
   - Systemutveckling

#### 4.2 Stödstrukturer
**Implementationsstöd:**
- Rådgivningstjänster
- Tekniska verktyg
- Utbildningsprogram
- Övergångsstöd
- Certifieringshjälp

### 5. Övervakning och kontroll

#### 5.1 Verifieringssystem
**Kontrollmekanismer:**
- Oberoende granskare
- Blockkedjebaserad spårning
- AI-stödd analys
- Intressentfeedback
- Kontinuerlig övervakning

#### 5.2 Transparensrapportering
**Offentlig redovisning:**
- Etiska index
- Påverkansanalyser
- Utvecklingsplaner
- Framstegsrapporter
- Certifieringsstatus

### 6. Incitamentstrukturer

#### 6.1 Positiva incitament
- Skattelättnader för förbättringar
- Innovationsstöd
- Offentlig erkännande
- Förenklade processer
- Prioriterad behandling

#### 6.2 Konsekvenshantering
- Graderade påföljder
- Stöd för förbättring
- Tydliga åtgärdsplaner
- Uppföljningsprocesser
- Rehabiliteringsmöjligheter

### 7. Framtida utveckling

#### 7.1 Systemevolution
- Kontinuerlig uppdatering av kriterier
- Integration av ny kunskap
- Teknologisk utveckling
- Anpassning till nya utmaningar
- International harmonisering

#### 7.2 Kunskapsutveckling
- Forskningssamarbeten
- Best practice-delning
- Internationellt utbyte
- Metodutveckling
- Effektanalyser
