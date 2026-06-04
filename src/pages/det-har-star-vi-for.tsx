import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import { Shield, HeartPulse, GraduationCap, Wallet, Coins, Users, Zap, Home, Network, Sprout } from 'lucide-react';

const positions = [
  {
    Icon: Shield,
    title: 'Trygghet och grov brottslighet',
    vill: 'Ta grov brottslighet på största allvar – tydliga konsekvenser och resurser till polis och rättsväsende – och samtidigt ta lika allvarligt på varför unga rekryteras. Båda delarna, inte den ena eller den andra.',
    prova: 'Fånga risksignaler tidigt genom bättre samordning mellan skola, socialtjänst och polis – integritetssäkert – och sprid de lokala metoder som faktiskt minskar nyrekryteringen.',
    docId: 'STR-242'
  },
  {
    Icon: HeartPulse,
    title: 'Vården',
    vill: 'En vård som lär av dem som faktiskt utför arbetet – personal, patienter och resultat – i stället för fler krav uppifrån. En stor del av problemet är att besluten fattas för långt från patienten och personalen, och att 21 regioner blir svåra att överblicka. Mindre administration som stjäl tid från patienterna.',
    prova: 'Låt vårdens egna förbättringar testas och spridas, rensa bland mätningar som blivit självändamål, och pröva en tydligare ansvarsfördelning mellan stat, region och kommun. Vi vill inte avskaffa regionerna – men deras roll behöver bli tydligare.',
    docId: 'STR-243'
  },
  {
    Icon: GraduationCap,
    title: 'Skolan',
    vill: 'En skola som ger alla en trygg och stark grund, samtidigt som varje elevs nyfikenhet får växa. Sluta med de ständiga reformerna uppifrån som missar klassrummets verklighet.',
    prova: 'Färre toppstyrda reformer, fler förbättringar som prövas lokalt och sprids när de fungerar – med lärarnas erfarenhet som grund.',
    docId: 'STR-244'
  },
  {
    Icon: Wallet,
    title: 'Jobb och trygghet i omställning',
    vill: 'Att fler ska våga byta bana, vidareutbilda sig eller starta eget – utan att riskera allt – i en tid då automatiseringen förändrar arbetslivet.',
    prova: 'AUBI, en adaptiv grundtrygghet, är vårt förslag här. Vi har inget färdigt finansieringsförslag och är öppna med det – därför vill vi testa i en kommun först, utvärdera, och bygga vidare på evidens innan något görs i större skala.',
    docId: 'STR-245'
  },
  {
    Icon: Coins,
    title: 'Skatter och statens pengar',
    vill: 'Vi låser oss inte vid en bestämd skattenivå – men vi gömmer oss inte heller bakom det. Vi bedömer skatter och utgifter efter en sak: gör pengarna nytta? Hellre att rätta det som inte fungerar än att reflexmässigt höja eller sänka – och program ska förtjäna sin plats, även våra egna.',
    prova: 'Oberoende utvärdering och bortre tidsgränser på stora satsningar, så att det som inte ger resultat kan avvecklas i stället för att leva vidare av gammal vana. Behövs nya pengar vill vi först omfördela från det som inte fungerar – och hellre beskatta kapital- och automationsvinster än arbete och konsumtion.',
    docId: 'STR-246'
  },
  {
    Icon: Users,
    title: 'Migration och integration',
    vill: 'En ordnad och förutsägbar migrationspolitik – och en integration som faktiskt fungerar, så att de som är här kan lära sig språket, försörja sig och bli en del av samhället. Varken att vifta undan problemen eller att skylla allt på invandring.',
    prova: 'Bedöm integrationsinsatser efter resultat – jobb, språk, trygghet – behåll det som fungerar och lägg ner det som inte gör det.',
    docId: 'STR-247'
  },
  {
    Icon: Zap,
    title: 'Klimat och energi',
    vill: 'En klimat- och energipolitik som tar klimatvetenskapen på allvar – och just därför söker lösningar som faktiskt fungerar, inte sådana som mest känns rätt. Både att hålla nere utsläppen och att hålla igång hushåll och industri.',
    prova: 'Teknikneutralt: vi bedömer lösningar efter vad de faktiskt levererar i utsläppsminskning och i pålitlig, rimligt prissatt energi – inte efter vilken teknik som är inne. Och vi vill stärka den lokala energiberedskapen.',
    docId: 'STR-248'
  },
  {
    Icon: Home,
    title: 'Bostäder',
    vill: 'Göra det möjligt att faktiskt hitta någonstans att bo – både fler bostäder och rätt bostäder, så att också unga och de med små marginaler kommer in.',
    prova: 'Ge kommuner utrymme att pröva olika sätt att bygga och fördela bostäder, ta bort flaskhalsar i bygg- och planprocessen, och sprid snabbt det som fungerar. Vi vågar också pröva svårare frågor, som hur hyresregleringen kan reformeras utan att de mest utsatta drabbas.',
    docId: 'STR-249'
  },
  {
    Icon: Network,
    title: 'Demokrati och inflytande',
    vill: 'Mer inflytande mellan valen, och beslut så nära människorna som möjligt.',
    prova: 'Lottade, representativa medborgarpaneler som får tid och underlag att väga svåra frågor på djupet, mer öppenhet om hur beslut fattas, och Framtidskommuner som får friheten att pröva nya metoder. Folkomröstningar och dialoger är bra komplement – starkast i tydliga värde- och vägvalsfrågor.',
    docId: 'STR-250'
  },
  {
    Icon: Sprout,
    title: 'Beredskap och hållbarhet',
    vill: 'Ett samhälle som står starkare när kriser slår till – mat, vatten, värme, energi och betalningar som fungerar även när annat fallerar. Och lösningar som håller i längden, för både människor och miljö.',
    prova: 'Stärk den lokala beredskapen för det den faktiskt klarar – snabb respons, vatten, värme och distribution – och var ärliga med att försörjningstryggheten i stort vilar på nationell och europeisk nivå. Hållbarhet vägleder valen, men i en skarp kris går förmågan att klara sig först.',
    docId: 'STR-251'
  }
];

export default function PositionsPage() {
  return (
    <>
      <SEO
        title="Det här står vi för"
        description="Var Fjärilspartiet står i de stora frågorna – vad vi vill uppnå, och det konkreta vi vill pröva för att komma dit. Riktningar, inte färdiga facit."
        canonical="/det-har-star-vi-for"
      />
      <MainLayout>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Det här står vi för
            </h1>
            <p className="text-xl text-gray-600">
              De här frågorna ser olika ut, men de har ofta samma rot: besluten fattas för långt från
              dem som ser verkligheten, och problemen hinner växa innan någon rättar kursen. Därför låser
              vi oss inte vid höger eller vänster – det viktiga sitter i hur besluten fattas, inte i en
              färdig ideologi. Vårt svar är i grunden detsamma överallt: flytta besluten närmare
              människorna, och pröva, lär och sprid det som fungerar. För varje fråga säger vi vad vi vill
              uppnå, och det konkreta vi vill pröva för att komma dit – riktningar, inte färdiga facit.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            {positions.map((p) => (
              <div key={p.title} className="card">
                <div className="flex items-center mb-3">
                  <p.Icon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-gray-900">{p.title}</h2>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-[var(--color-primary)]">Vi vill: </span>{p.vill}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  <span className="font-semibold">Så vill vi pröva det: </span>{p.prova}
                </p>
                <Link
                  href={`/dokument?doc=${p.docId}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Läs hela resonemanget ({p.docId})
                  <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Common thread + CTA */}
          <div className="mt-12 max-w-3xl mx-auto text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Märker du mönstret?</h2>
            <p className="text-gray-600 mb-6">
              Alla tio svaren bygger på samma idé: flytta makten dit kunskapen finns, pröva i liten skala,
              sprid det som fungerar och gör om det som inte gör det. Vi kallar det subsidiaritet – men du
              kan lika gärna kalla det sunt förnuft. Det här är riktningar, inte ett färdigt facit, och där
              vi inte vet säger vi det rakt ut.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/forslag" className="btn-primary">
                Läs våra förslag
              </Link>
              <Link href="/bli-medlem" className="btn-secondary">
                Bli medlem
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <ShareButtons
              title="Det här står vi för – Fjärilspartiet"
              description="Var vi står i de stora frågorna: vad vi vill uppnå, och det konkreta vi vill pröva för att komma dit."
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
