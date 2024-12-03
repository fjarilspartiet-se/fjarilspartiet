import { Shield, Recycle, Heart, Sprout, Users, ArrowRight, TrendingUp } from 'lucide-react';

export default function AUBISystemic() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">AUBI - Ett cirkulärt välfärdssystem</h1>
        <p className="text-lg text-gray-600">
          Precis som i naturen fungerar samhällsekonomin som ett kretslopp där resurser behöver 
          cirkulera för att skapa blomstring. AUBI är designat för att optimera detta flöde.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Grundtrygghet som katalysator</h2>
          </div>
          <p className="mb-4">Grundbelopp: 15,000 kr/månad plus möjliga tillägg:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              Behovstillägg upp till 5,000 kr
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              Bidragstillägg upp till 3,000 kr
            </li>
          </ul>
          <div className="mt-4 p-4 bg-white rounded">
            <p className="text-sm text-gray-600">
              När människor har en trygg grund vågar de ta risker, starta företag, 
              utbilda sig och engagera sig i samhället - vilket skapar mer värde för alla.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Recycle className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold">Värdeskapande kretslopp</h2>
          </div>
          <p className="mb-4">Finansiering genom värdeskapande aktiviteter:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-green-600" />
              Automation skapar värde som delas
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-green-600" />
              Hållbart nyttjande av naturresurser
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-green-600" />
              Rättvis beskattning av datavärde
            </li>
          </ul>
          <div className="mt-4 p-4 bg-white rounded">
            <p className="text-sm text-gray-600">
              Genom att beskatta värdeskapande automatisering och resursanvändning 
              - inte arbete - stimulerar vi innovation samtidigt som värdet delas rättvist.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Förebyggande effekter</h2>
          </div>
          <p className="text-gray-600">
            Trygghet och meningsfullhet leder till bättre hälsa, mindre kriminalitet och 
            starkare social sammanhållning - vilket minskar samhällskostnader.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-semibold">Lokal blomstring</h2>
          </div>
          <p className="text-gray-600">
            När människor har grundtrygghet kan de engagera sig lokalt, starta företag och 
            skapa kultur - vilket stärker lokalsamhällen.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold">Innovationskraft</h2>
          </div>
          <p className="text-gray-600">
            Frihet från ekonomisk oro frigör kreativitet och skapar utrymme för innovation 
            som gynnar hela samhället.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-gray-600" />
          <h2 className="text-xl font-semibold">Ett system som gynnar alla</h2>
        </div>
        <p className="text-gray-600">
          Genom att optimera det ekonomiska kretsloppet skapar AUBI ett mer dynamiskt och 
          blomstrande samhälle där både individer och företag kan utvecklas. Det handlar inte 
          om att ta från några och ge till andra - utan om att skapa ett system där alla kan 
          bidra och blomstra på sina egna villkor.
        </p>
      </div>
    </div>
  );
}
