import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from 'react';
import { ButterflyAnimation } from '../components/ButterflyAnimation';
import { ButterflySettings } from '../components/ButterflySettings';
import { useButterflyAnimation } from '../hooks/useButterflyAnimation';

export default function App({ Component, pageProps }: AppProps) {
  const { isEnabled, toggle, isHydrated } = useButterflyAnimation();
  
  return (
    <div className="relative">
      <Component {...pageProps} />
      {/* Only render butterflies after hydration to prevent SSR mismatch */}
      {isHydrated && <ButterflyAnimation enabled={isEnabled} />}
      {/* Pass shared state to settings button */}
      <ButterflySettings 
        isEnabled={isEnabled}
        toggle={toggle}
        isHydrated={isHydrated}
      />
    </div>
  );
}
