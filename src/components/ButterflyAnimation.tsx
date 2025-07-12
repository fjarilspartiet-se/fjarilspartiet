import React, { useState, useEffect, useCallback } from 'react';
import { AnimatedButterfly } from './AnimatedButterfly';

interface ButterflyAnimationProps {
  enabled?: boolean;
  maxButterflies?: number;
  minInterval?: number;
  maxInterval?: number;
}

export const ButterflyAnimation: React.FC<ButterflyAnimationProps> = ({
  enabled = true,
  maxButterflies = 2,
  minInterval = 120000, // 2 minutes
  maxInterval = 480000,  // 8 minutes
}) => {
  const [butterflies, setButterflies] = useState<number[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleAnimationComplete = useCallback((id: number) => {
    setButterflies(prev => prev.filter(butterflyId => butterflyId !== id));
  }, []);

  // Clear all butterflies immediately when disabled
  useEffect(() => {
    if (!enabled) {
      setButterflies([]);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let initialTimeout: NodeJS.Timeout;
    let spawnInterval: NodeJS.Timeout;

    const spawnButterfly = () => {
      setButterflies(prev => {
        if (prev.length < maxButterflies) {
          const id = nextId;
          setNextId(current => current + 1);
          return [...prev, id];
        }
        return prev;
      });
    };

    // Only start spawning if enabled
    if (enabled) {
      initialTimeout = setTimeout(spawnButterfly, 3000);

      spawnInterval = setInterval(() => {
        setButterflies(current => {
          if (current.length < maxButterflies) {
            spawnButterfly();
          }
          return current;
        });
      }, minInterval + Math.random() * (maxInterval - minInterval));
    }

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (spawnInterval) clearInterval(spawnInterval);
    };
  }, [enabled, maxButterflies, minInterval, maxInterval, nextId]);

  if (!enabled) return null;

  return (
    <>
      {butterflies.map(id => (
        <AnimatedButterfly
          key={id}
          id={id}
          onAnimationComplete={handleAnimationComplete}
        />
      ))}
    </>
  );
};
