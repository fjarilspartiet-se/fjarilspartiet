import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Heart, Scale } from 'lucide-react';

export default function VisionPage() {
  const [activeStage, setActiveStage] = useState('egg');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Vår vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ett samhälle som främjar både individuellt självförverkligande och kollektivt välmående, 
              där varje person har verklig frihet att välja sin väg och bidra på sitt sätt. Precis som 
              fjärilen genomgår en fascinerande transformation arbetar vi för en genomtänkt och grundlig 
              samhällsförändring.
            </p>
          </div>
        </div>
      </section>

      {/* Butterfly effect section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fjärilseffekten</h2>
              <p className="text-lg text-gray-600 mb-4">
                Precis som en fjärils vingslag kan orsaka en storm på andra sidan jorden, 
                kan små, väldesignade förändringar i samhällssystem skapa omfattande positiva effekter.
              </p>
              <p className="text-lg text-gray-600">
                Vi använder systemtänkande och evidensbaserad design för att identifiera de mest 
                effektiva &quot;vingslagen&quot; - förändringar som kan transformera samhället till det bättre 
                genom positiva återkopplingsloopar och nätverkseffekter.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Exempel: AUBI</h3>
                <p className="text-gray-600">
                  Ett grundläggande ekonomiskt skyddsnät leder till ökad entreprenörskap, 
                  bättre hälsa, starkare lokalsamhällen och minskad byråkrati - effekter som 
                  förstärker varandra och skapar systemisk förändring.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Exempel: Lokala matsystem</h3>
                <p className="text-gray-600">
                  Stöd för lokal matproduktion stärker både miljön, ekonomin och 
                  samhällsgemenskapen, vilket i sin tur skapar mer engagemang för 
                  hållbara lösningar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Vår transformationsresa</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div 
              className={`card cursor-pointer transition-all ${
                activeStage === 'egg' ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStage('egg')}
            >
              <h3 className="text-xl font-semibold mb-4">Äggstadiet</h3>
              <p className="text-gray-600">
                Vi är här nu. Vi utvecklar noggrant våra ramverk, strukturer och digitala verktyg. 
                Som ett ägg innehåller all information för fjärilens utveckling, bygger vi grunden 
                för framtida förändring.
              </p>
            </div>

            <div 
              className={`card cursor-pointer transition-all ${
                activeStage === 'larva' ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStage('larva')}
            >
              <h3 className="text-xl font-semibold mb-4">Larvstadiet</h3>
              <p className="text-gray-600">
                Nästa steg är att växa och samla resurser. Vi kommer aktivt engagera medlemmar, 
                testa våra idéer i praktiken och bygga starka lokala nätverk.
              </p>
            </div>

            <div 
              className={`card cursor-pointer transition-all ${
                activeStage === 'pupa' ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStage('pupa')}
            >
              <h3 className="text-xl font-semibold mb-4">Puppstadiet</h3>
              <p className="text-gray-600">
                En period av djup transformation där vi implementerar våra system i större skala 
                och omorganiserar samhällets strukturer för ökad hållbarhet och rättvisa.
              </p>
            </div>

            <div 
              className={`card cursor-pointer transition-all ${
                activeStage === 'butterfly' ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStage('butterfly')}
            >
              <h3 className="text-xl font-semibold mb-4">Fjärilsstadiet</h3>
              <p className="text-gray-600">
                Det fullt utvecklade stadiet där våra system aktivt bidrar till ett blomstrande 
                samhälle, precis som fjärilen pollinerar och sprider liv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Våra kärnvärden</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Individuell autonomi</h3>
              </div>
              <p className="text-gray-600">
                Vi tror på varje persons rätt och förmåga att forma sitt liv. Genom AUBI och 
                andra stödsystem skapar vi verklig frihet att välja sin väg.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Systemisk rättvisa</h3>
              </div>
              <p className="text-gray-600">
                Våra lösningar adresserar grundorsakerna till ojämlikhet och orättvisa genom 
                att omforma systemens struktur, inte bara symptomen.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">Evidensbaserad innovation</h3>
              </div>
              <p className="text-gray-600">
                Vi kombinerar forskning, praktisk erfarenhet och systematisk utvärdering för 
                att utveckla lösningar som verkligen fungerar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Utforska våra lösningar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Se hur vi omsätter vår vision i praktiken genom konkreta lösningar och pågående projekt.
          </p>
          <Link 
            href="/losningar" 
            className="btn-primary inline-flex items-center text-lg"
          >
            Se våra lösningar <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
