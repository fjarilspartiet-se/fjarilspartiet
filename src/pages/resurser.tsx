import MainLayout from '../layouts/MainLayout';
import { Book, Network, Brain, Heart, Globe, School } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Resurser för utveckling och fördjupning
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          Här har vi samlat verktyg, litteratur och resurser som kan hjälpa dig förstå 
          och bidra till partiets systemiska approach för samhällsförnyelse.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Interaktiva verktyg */}
          <div className="card">
            <div className="flex items-center mb-4">
              <Network className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Interaktiva verktyg</h2>
            </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Spiralize.org</h3>
                  <p className="text-gray-600 mb-2">
                    Ett interaktivt verktyg för att utforska och förstå hur värderingar och 
                    världsbilder utvecklas. Hjälper dig förstå den utvecklingspsykologiska grunden 
                    för partiets systemiska approach.
                  </p>
                  <a 
                    href="https://spiralize.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Utforska Spiralize
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">DidiS & DPOP - Digital demokrati</h3>
                  <p className="text-gray-600 mb-2">
                    Våra open source-plattformar för demokratiskt deltagande och transparens:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">DidiS</span> - Plattform för direktdemokrati och deltagarprocesser
                    </li>
                    <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">DPOP</span> - Partiets operativa plattform för transparent styrning och medlemsengagemang
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/fjarilspartiet-se/DidiS" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      DidiS på GitHub
                    </a>
                    <a 
                      href="https://github.com/fjarilspartiet-se/DPOP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      DPOP på GitHub
                    </a>
                  </div>
                </div>
              </div>
          </div>

          {/* Rekommenderad läsning */}
          <div className="card">
            <div className="flex items-center mb-4">
              <Book className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold">Rekommenderad läsning</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Basinkomst och ekonomisk innovation</h3>
                <p className="text-gray-600 mb-2">Grundläggande texter om ekonomisk grundtrygghet och systemförändring:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;Complex Adaptation and Permissionless Innovation&quot;</span> av Otto Lehto 
                    - En doktorsavhandling som analyserar UBI från ett systemiskt och evolutionärt perspektiv, 
                    särskilt relevant för vår approach till AUBI.
                    <a 
                      href="https://kclpure.kcl.ac.uk/portal/en/studentTheses/complex-adaptation-and-permissionless-innovation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Ladda ner avhandlingen (PDF)
                    </a>
                  </li>
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;Universal Basic Income&quot;</span> av Karl Widerquist 
                    - En koncis och välskriven introduktion till basinkomst från MIT Press Essential Knowledge-serien.
                    <a 
                      href="https://mitpress.mit.edu/9780262546898/universal-basic-income/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om boken
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Systemtänkande</h3>
                <p className="text-gray-600 mb-2">Grundläggande verk om hur vi kan förstå och arbeta med komplexa system:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;Thinking in Systems&quot;</span> av Donella Meadows 
                    - En klassisk introduktion till systemtänkande som visar hur vi kan identifiera 
                    systemets hävstångspunkter för effektiv förändring.
                    <a 
                      href="https://www.chelseagreen.com/product/thinking-in-systems/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om boken
                    </a>
                  </li>
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;The Systems View of Life&quot;</span> av Fritjof Capra & Pier Luigi Luisi 
                    - En omfattande syntes som visar hur biologiska, kognitiva, sociala och ekologiska fenomen 
                    är sammanlänkade i livets grundläggande mönster.
                    <a 
                      href="https://www.cambridge.org/core/books/systems-view-of-life/35186BA5B12161E469C4224B6076ADFE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om boken
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Samhällstransformation</h3>
                <p className="text-gray-600 mb-2">Böcker som visar vägen mot djupare systemförändring:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;The Nordic Secret&quot;</span> av Lene Rachel Andersen 
                    - Hur de nordiska länderna historiskt använt bildning och personlig utveckling 
                    för samhällstransformation.
                    <a 
                      href="https://www.nordicsecret.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om boken
                    </a>
                  </li>
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;Reinventing Organizations&quot;</span> av Frederic Laloux 
                    - En utvecklingsbaserad analys av hur organisationer kan utvecklas mot mer 
                    meningsfulla och effektiva former.
                    <a 
                      href="https://www.reinventingorganizations.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om boken
                    </a>
                  </li>
                  <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                    <span className="font-medium">&quot;Doughnut Economics&quot;</span> av Kate Raworth 
                    - Nytänkande om hur vi kan skapa ekonomiska system som både möter människors 
                    behov och respekterar planetens gränser.
                    <a 
                      href="https://doughnuteconomics.org/about-doughnut-economics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-1"
                    >
                      Läs mer om konceptet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Kunskapsområden */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <Brain className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold mb-2">Utvecklingspsykologi</h3>
            <p className="text-gray-600">
              Fördjupa dig i hur människor och samhällen utvecklas genom olika stadier 
              av mognad och komplexitet. Förståelse för dessa mönster hjälper oss designa 
              system som främjar både individuell och kollektiv utveckling.
            </p>
          </div>

          <div className="card">
            <Heart className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="font-semibold mb-2">Social innovation</h3>
            <p className="text-gray-600">
              Utforska nya modeller för samhällsorganisering som skapar mer hållbara och rättvisa system. 
              Lär dig om framgångsrika experiment med alternativa ekonomiska och sociala strukturer 
              från hela världen.
            </p>
          </div>


          <div className="card">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Global transformation</h3>
            <p className="text-gray-600">
              Förstå hur lokala förändringar kan skapa positiva kedjereaktioner som transformerar 
              hela samhället. Genom att arbeta med naturliga utvecklingsmönster kan små, välplanerade 
              insatser få omfattande effekter.
            </p>
          </div>
        </div>

        {/* Studiegrupper */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <School className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Studiegrupper</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Gå med i en av våra studiegrupper för att tillsammans med andra utforska 
            och diskutera dessa ämnen. Vi organiserar både online och fysiska träffar.
          </p>
          <a 
            href="https://discord.gg/GxSxaYANU4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Gå med i vår Discord-community
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
