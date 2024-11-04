import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { Network, Book, Code, Scale } from 'lucide-react';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Om Fjärilspartiet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ett parti som kombinerar systemtänkande, evidensbaserad politik och 
            praktiska lösningar för att skapa positiv samhällsförändring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Vårt tillvägagångssätt</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Network className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Systemtänkande</h3>
                  <p className="text-gray-600">
                    Vi förstår att samhällsutmaningar är sammankopplade och kräver 
                    helhetslösningar som adresserar grundorsaker, inte bara symptom.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Book className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Evidensbaserad politik</h3>
                  <p className="text-gray-600">
                    Våra förslag bygger på forskning, praktisk erfarenhet och 
                    systematisk utvärdering av resultat.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Öppen utveckling</h3>
                  <p className="text-gray-600">
                    Vi utvecklar våra lösningar öppet och transparent, med möjlighet 
                    för alla att bidra och granska.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="w-12 h-12 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Samverkande system</h3>
                  <p className="text-gray-600">
                    Vi ser samhället som ett ekosystem där medborgare, institutioner och 
                    marknad samverkar för det gemensamma bästa. Genom att stärka dessa 
                    relationer skapar vi hållbara lösningar som gynnar alla.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Aktiva utvecklingsområden</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">DPOP - Digital demokratiplattform</h3>
                <p className="text-gray-600">
                  En öppen plattform för demokratiskt deltagande och transparent 
                  partiverksamhet, byggd på modern teknik och säkerhetsprinciper.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">AUBI - Adaptiv basinkomst</h3>
                <p className="text-gray-600">
                  Ett intelligent välfärdssystem som ger grundtrygghet och 
                  uppmuntrar samhällsengagemang.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Lokala pilotprojekt</h3>
                <p className="text-gray-600">
                  Praktiska experiment med nya lösningar för lokal demokrati, 
                  hållbarhet och samhällsengagemang.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <h2 className="text-2xl font-bold mb-6">Engagera dig</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vi är ett parti under utveckling och välkomnar alla som vill bidra 
            till att skapa positiv samhällsförändring. Det finns många sätt att 
            engagera sig, från teknisk utveckling till lokala initiativ.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/bli-medlem" className="btn-primary">
              Bli medlem
            </Link>
            <Link href="/vision" className="btn-secondary">
              Utforska vår vision
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
