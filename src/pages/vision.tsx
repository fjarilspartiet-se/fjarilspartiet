import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, HeartHandshake, Scale } from 'lucide-react';
import TransformationJourney from '../components/TransformationJourney';
import LongTermVision from '../components/LongTermVision';

export default function VisionPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              En vision för mänsklighetens blomstring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Vi ser en framtid där varje person har möjlighet att förverkliga sin fulla potential, 
              där samhället utvecklas i harmoni med naturen, och där teknologiska framsteg används 
              för att skapa överflöd och välmående för alla. Denna vision är inte bara en dröm - 
              det är ett åtagande vi arbetar för varje dag.
            </p>
          </div>
        </div>
      </section>

      {/* Long-term Vision Section */}
      <LongTermVision />

      {/* Butterfly effect section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vägen mot visionen</h2>
              <p className="text-lg text-gray-600 mb-4">
                Precis som en fjärils vingslag kan orsaka en storm på andra sidan jorden, 
                kan genomtänkta förändringar i samhällssystem skapa omfattande positiva effekter.
              </p>
              <p className="text-lg text-gray-600">
                Vi använder systemtänkande och evidensbaserad design för att identifiera och 
                implementera de förändringar som kan transformera samhället till det bättre genom 
                positiva återkopplingsloopar och nätverkseffekter.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Exempel: AUBI</h3>
                <p className="text-gray-600">
                  Ett grundläggande ekonomiskt skyddsnät skapar en positiv spiral av ökat 
                  entreprenörskap, bättre hälsa, starkare lokalsamhällen och minskad byråkrati - 
                  effekter som förstärker varandra mot vår vision.
                  <Link href="/losningar#aubi" className="text-blue-600 ml-1 hover:underline">
                    Läs mer om AUBI
                  </Link>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Exempel: Lokala matsystem</h3>
                <p className="text-gray-600">
                  Stöd för lokal matproduktion stärker både miljön, ekonomin och 
                  samhällsgemenskapen, vilket skapar en växande rörelse för hållbara lösningar.
                  <Link href="/losningar#hallbarhet" className="text-blue-600 ml-1 hover:underline">
                    Utforska lokala matsystem
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey showing the practical path */}
      <TransformationJourney />

      {/* Core Values - Now explicitly connected to the vision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Värderingar som vägleder oss</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <HeartHandshake className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Individuell autonomi</h3>
              </div>
              <p className="text-gray-600">
                Varje persons rätt och förmåga att forma sitt liv är central för vår 
                vision om mänsklig fulländning. Genom AUBI och andra stödsystem skapar vi 
                verklig frihet att välja sin väg.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Systemisk rättvisa</h3>
              </div>
              <p className="text-gray-600">
                För att uppnå vår vision måste vi adressera grundorsakerna till ojämlikhet 
                och orättvisa genom att omforma systemens struktur, inte bara lindra symptomen.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">Evidensbaserad innovation</h3>
              </div>
              <p className="text-gray-600">
                Vägen mot vår vision kräver att vi kombinerar forskning, praktisk erfarenhet 
                och systematisk utvärdering för att utveckla lösningar som verkligen fungerar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Now with stronger connection to vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Var med och förverkliga visionen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tillsammans kan vi bygga den framtid vi drömmer om. Se hur vi omsätter vår vision 
            i praktiken genom konkreta lösningar och pågående projekt.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/losningar" 
              className="btn-primary inline-flex items-center text-lg"
            >
              Utforska våra lösningar <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/bli-medlem" 
              className="btn-secondary inline-flex items-center text-lg"
            >
              Gå med i rörelsen <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
