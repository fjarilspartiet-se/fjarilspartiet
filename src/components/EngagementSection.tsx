import Link from 'next/link';

const EngagementSection = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Var med och forma framtiden</h2>
      <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
        Vi välkomnar alla som vill bidra. Det finns ingen särskild profil vi letar efter –
        partiet växer organiskt av de människor som dyker upp och det de bär med sig.
      </p>
      <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
        Du kan organisera något lokalt, bidra med kunskap eller hantverk, hjälpa till att
        kommunicera, formulera ditt eget manifest – eller helt enkelt bli medlem och rösta.
        Har du en idé vi inte tänkt på? Ännu bättre.
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
