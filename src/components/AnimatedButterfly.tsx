import React, { useState, useEffect } from 'react';
import { ButterflyLogo } from './ButterflyLogo';

interface AnimatedButterflyProps {
  id: number;
  onAnimationComplete: (id: number) => void;
}

interface Position {
  x: number;
  y: number;
  rotation: number;
}

export const AnimatedButterfly: React.FC<AnimatedButterflyProps> = ({ 
  id, 
  onAnimationComplete 
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, rotation: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const generatePath = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const startSide = Math.floor(Math.random() * 4);
      let startX: number, startY: number, endX: number, endY: number;
      
      switch (startSide) {
        case 0: // left edge
          startX = -60;
          startY = Math.random() * viewportHeight;
          endX = viewportWidth + 60;
          endY = Math.random() * viewportHeight;
          break;
        case 1: // top edge
          startX = Math.random() * viewportWidth;
          startY = -60;
          endX = Math.random() * viewportWidth;
          endY = viewportHeight + 60;
          break;
        case 2: // right edge
          startX = viewportWidth + 60;
          startY = Math.random() * viewportHeight;
          endX = -60;
          endY = Math.random() * viewportHeight;
          break;
        case 3: // bottom edge
          startX = Math.random() * viewportWidth;
          startY = viewportHeight + 60;
          endX = Math.random() * viewportWidth;
          endY = -60;
          break;
        default:
          startX = startY = endX = endY = 0;
      }
      
      return { startX, startY, endX, endY };
    };

    const animateButterfly = () => {
      const { startX, startY, endX, endY } = generatePath();
      
      setPosition({ x: startX, y: startY, rotation: 0 });
      setIsVisible(true);
      
      const duration = 15000 + Math.random() * 10000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
          setIsVisible(false);
          onAnimationComplete(id);
          return;
        }
        
        const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
        const easedProgress = easeInOutSine(progress);
        
        const floatOffset = Math.sin(elapsed / 2000) * 20;
        const wobbleOffset = Math.sin(elapsed / 1500) * 10;
        
        const currentX = startX + (endX - startX) * easedProgress + wobbleOffset;
        const currentY = startY + (endY - startY) * easedProgress + floatOffset;
        
        // Rotation should primarily follow movement direction
        const directionAngle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI) + 120;
        
        // Add subtle floating rotation but keep it secondary to direction
        const floatRotation = Math.sin(elapsed / 1800) * 8; // Subtle floating
        const wobbleRotation = Math.sin(elapsed / 1400) * 5; // Subtle wobble
        
        // Primary rotation follows movement direction, floating adds natural variation
        const rotation = directionAngle + floatRotation + wobbleRotation;
        
        setPosition({ x: currentX, y: currentY, rotation });
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };

    animateButterfly();
  }, [id, onAnimationComplete]);

  const butterflyStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
    opacity: isVisible ? 0.3 : 0,
    transition: 'opacity 1s ease-in-out',
    pointerEvents: 'none',
    zIndex: 1,
    width: '40px',
    height: '40px',
  };

  return (
    <div style={butterflyStyle}>
      <ButterflyLogo className="w-full h-full" />
    </div>
  );
};
