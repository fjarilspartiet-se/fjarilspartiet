import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, HeartHandshake, Scale, Blend } from 'lucide-react';
import TransformationJourney from '../components/TransformationJourney';

export default function VisionPage() {

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
                  <Link href="/losningar#aubi" className="text-blue-600 ml-1 hover:underline">
                    [Läs mer]
                  </Link>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Exempel: Lokala matsystem</h3>
                <p className="text-gray-600">
                  Stöd för lokal matproduktion stärker både miljön, ekonomin och 
                  samhällsgemenskapen, vilket i sin tur skapar mer engagemang för 
                  hållbara lösningar.
                  <Link href="/losningar#hallbarhet" className="text-blue-600 ml-1 hover:underline">
                    [Läs mer]
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <TransformationJourney />

      {/* Core Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Våra kärnvärden</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <HeartHandshake className="w-6 h-6 text-red-500 mr-2" />
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
                <Blend className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Systemisk balans</h3>
              </div>
              <p className="text-gray-600">
                Vi ser samhället som ett samverkande system där institutioner och medborgare 
                stödjer varandra. Våra lösningar strävar efter att skapa balans och ömsesidigt 
                stärkande relationer mellan alla samhällets delar.
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
