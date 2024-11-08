import { 
  Users, 
  Blocks, 
  GitBranch, 
  Sprout, 
  PenTool, 
  Microscope, 
  Heart,
  Globe,
  PartyPopper 
} from 'lucide-react';
import Link from 'next/link';

const EngagementSection = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Var med och forma framtiden</h2>
      <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
        Vi välkomnar alla som vill bidra till att skapa positiv samhällsförändring.
        Varje person som engagerar sig kan bidra med sitt unika perspektiv och sina färdigheter.
      </p>
      <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto italic">
        Här är några exempel på hur du kan engagera dig - men det finns många fler möjligheter!
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Users className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Community-byggare</h3>
          <p className="text-sm text-gray-600">
            Starta och leda lokala initiativ, organisera möten, bygga nätverk och skapa 
            mötesplatser för dialog och samarbete.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Blocks className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Policyutvecklare</h3>
          <p className="text-sm text-gray-600">
            Bidra till utvecklingen av våra politiska förslag, forska kring lösningar, 
            eller delta i arbetsgrupper för specifika områden.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <GitBranch className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Tech-utvecklare</h3>
          <p className="text-sm text-gray-600">
            Arbeta med våra open source-projekt, bidra till vår tekniska infrastruktur, 
            eller hjälp till med digitala demokrativerktyg.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Sprout className="w-8 h-8 text-green-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Hållbarhetsinspiratör</h3>
          <p className="text-sm text-gray-600">
            Starta lokala odlingsprojekt, organisera delningsevenemang, eller arbeta med 
            miljöinitiativ i ditt område.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <PenTool className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Kreativ kommunikatör</h3>
          <p className="text-sm text-gray-600">
            Hjälp till med att kommunicera våra idéer genom text, bild, film eller andra 
            kreativa uttryck.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Microscope className="w-8 h-8 text-indigo-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Kunskapsutforskare</h3>
          <p className="text-sm text-gray-600">
            Delta i forskning och utvärdering av våra projekt, eller bidra med din 
            expertis inom ditt område.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Heart className="w-8 h-8 text-red-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Social innovatör</h3>
          <p className="text-sm text-gray-600">
            Utveckla nya sätt att stärka gemenskaper, stötta utsatta grupper, eller 
            skapa sociala mötesplatser.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Globe className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Global brobyggare</h3>
          <p className="text-sm text-gray-600">
            Hjälp till att bygga internationella nätverk, översätta material eller 
            utveckla internationella samarbeten.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <PartyPopper className="w-8 h-8 text-yellow-600 mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Kulturkatalysator</h3>
          <p className="text-sm text-gray-600">
            Organisera kulturella evenemang, skapa konst som inspirerar till förändring, 
            eller starta kreativa projekt.
          </p>
        </div>
      </div>

      <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
        Har du andra idéer om hur du vill bidra? Vi är öppna för nya förslag och 
        sätt att engagera sig!
      </p>

      <div className="flex justify-center space-x-4">
        <Link href="/bli-medlem" className="btn-primary">
          Bli medlem
        </Link>
        <Link href="/kontakt" className="btn-secondary">
          Kontakta oss
        </Link>
      </div>
    </div>
  );
};

export default EngagementSection;
