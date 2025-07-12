import React from 'react';
import { ButterflyLogo } from './ButterflyLogo';

interface ButterflySettingsProps {
  isEnabled: boolean;
  toggle: () => void;
  isHydrated: boolean;
}

export const ButterflySettings: React.FC<ButterflySettingsProps> = ({
  isEnabled,
  toggle,
  isHydrated
}) => {
  // Don't render until hydrated to prevent SSR mismatch
  if (!isHydrated) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggle}
        className={`group bg-white border-2 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isEnabled 
            ? 'border-purple-300 bg-gradient-to-br from-pink-50 to-cyan-50' 
            : 'border-gray-300 bg-gray-50'
        }`}
        title={`${isEnabled ? 'Disable' : 'Enable'} butterfly animation`}
        aria-label={`${isEnabled ? 'Disable' : 'Enable'} butterfly animation`}
      >
        <ButterflyLogo 
          className={`w-6 h-6 transition-all duration-300 ${
            isEnabled 
              ? 'scale-100 opacity-100' 
              : 'scale-75 opacity-50 grayscale'
          }`}
          isFlying={isEnabled}
        />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap">
          {isEnabled ? 'Disable' : 'Enable'} butterflies
        </div>
        <div className="absolute top-full right-2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};
