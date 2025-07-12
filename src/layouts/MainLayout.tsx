import { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <Logo className="mr-2" />
                <span className="text-2xl font-semibold text-gray-900">Fjärilspartiet</span>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="/manifest" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Manifest
              </Link>
              <Link href="/vision" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Vision
              </Link>
              <Link href="/losningar" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Lösningar
              </Link>
              <Link href="/helhet" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Helhet
              </Link>
              <Link href="/blogg" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Blogg
              </Link>
              <Link href="/om-oss" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Om oss
              </Link>
              <Link href="/dokument" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Dokument
              </Link>
              <Link href="/resurser" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Resurser
              </Link>
              <Link href="/kontakt" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Kontakt
              </Link>
              <Link href="/bli-medlem" className="btn-primary-sm">
                Bli medlem
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Öppna menyn</span>
                {/* Hamburger icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/om-oss"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Om oss
              </Link>
              <Link
                href="/vision"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Vision
              </Link>
              <Link
                href="/losningar"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Lösningar
              </Link>
              <Link
                href="/helhet"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Helhet
              </Link>
              <Link
                href="/manifest"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Manifest
              </Link>
              <Link
                href="/bli-medlem"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Bli medlem
              </Link>
              <Link
                href="/dokument"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Dokument
              </Link>
              <Link
                href="/resurser"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Resurser
              </Link>
              <Link
                href="/kontakt"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontakt</h3>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  E-post: fjarilspartiet@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Dokumentation</h3>
              <div className="mt-4">
                <a href="https://github.com/BjornKennethHolmstrom/fjarilspartiet" className="text-base text-gray-500 hover:text-gray-900">
                  GitHub Repository
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Fjärilspartiet</h3>
              <p className="mt-4 text-base text-gray-500">
                Ett parti för systemisk samhällsförnyelse
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Fjärilspartiet. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
