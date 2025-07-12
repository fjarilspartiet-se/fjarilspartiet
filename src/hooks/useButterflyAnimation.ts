import { useState, useEffect } from 'react';

interface UseButterflyAnimationOptions {
  defaultEnabled?: boolean;
  storageKey?: string;
}

export const useButterflyAnimation = ({
  defaultEnabled = true,
  storageKey = 'fjaripartiet-butterfly-animation'
}: UseButterflyAnimationOptions = {}) => {
  // Start with false to match server-side rendering
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
    
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null) {
        try {
          setIsEnabled(JSON.parse(stored));
        } catch {
          console.warn('Failed to parse butterfly animation setting, using default');
          setIsEnabled(defaultEnabled);
        }
      } else {
        setIsEnabled(defaultEnabled);
      }
    }
  }, [defaultEnabled, storageKey]);

  // Save to localStorage when enabled state changes (but only after hydration)
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(isEnabled));
    }
  }, [isEnabled, storageKey, isHydrated]);

  return {
    isEnabled: isHydrated ? isEnabled : false, // Always false during SSR
    enable: () => setIsEnabled(true),
    disable: () => setIsEnabled(false),
    toggle: () => setIsEnabled(prev => !prev),
    isHydrated, // Expose hydration state
  };
};
