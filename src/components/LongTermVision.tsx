import { Target, Sprout, Globe, Lightbulb } from 'lucide-react';

const LongTermVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Långsiktig vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi arbetar för en grundlig och systemisk samhällsförändring som skapar förutsättningar 
            för både mänskligt och ekologiskt välmående. Vår vision sträcker sig bortom kortsiktiga 
            politiska cykler för att möta framtidens utmaningar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Samhälleligt inre mål</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Eliminera orsakerna till kriminalitet genom förebyggande insatser
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Säkerställa tillgång till basala livsnödvändigheter för alla
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Främja individuell fulländning och självförverkligande
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Internationell vision</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Arbeta för en värld fri från väpnade konflikter
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Skapa ekonomisk rättvisa mellan nationer
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Utveckla globalt medborgarskap och rörelsefrihet
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold">Social och teknologisk evolution</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Utveckla sociala strukturer som förebygger kriminalitet
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Skapa resursöverflöd genom hållbar teknologi
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Främja internationell vetenskaplig samverkan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTermVision;
