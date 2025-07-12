import React from 'react';

interface ButterflyLogoProps {
  className?: string;
  style?: React.CSSProperties;
  isFlying?: boolean;
}

export const ButterflyLogo: React.FC<ButterflyLogoProps> = ({ 
  className = "w-10 h-10", 
  style = {},
  isFlying = false
}) => {
  const wingAnimationId = `wing-flutter-${Math.random().toString(36).substr(2, 9)}`;
  const [isRestingFlap, setIsRestingFlap] = React.useState(false);

  React.useEffect(() => {
    if (!isFlying) {
      // Set up random resting flaps when not flying
      const scheduleNextFlap = () => {
        const delay = 10000 + Math.random() * 20000; // 10-30 seconds
        setTimeout(() => {
          setIsRestingFlap(true);
          // Single flap lasts about 0.8 seconds (0.4s * 2 for alternate)
          setTimeout(() => {
            setIsRestingFlap(false);
            scheduleNextFlap(); // Schedule the next flap
          }, 800);
        }, delay);
      };

      scheduleNextFlap();
    } else {
      setIsRestingFlap(false);
    }
  }, [isFlying]);

  const shouldAnimate = isFlying || isRestingFlap;
  
  return (
    <svg 
      viewBox="0 0 264.58333 264.58334" 
      className={className}
      style={style}
      aria-label="Fjärilspartiet logo"
    >
      <style>
        {`
          .butterfly-body {
            fill: #916f6f;
            stroke: #000000;
            stroke-width: 0.240799px;
            z-index: 10;
            position: relative;
          }
          .butterfly-antenna {
            fill: none;
            stroke: #916f6f;
            stroke-width: 2.408;
            stroke-linecap: round;
            z-index: 10;
            position: relative;
          }
          .wing-left {
            fill: #de87cd;
            /* Pivot point where left wing meets the thorax */
            transform-origin: 140px 155px;
            ${isFlying ? `animation: ${wingAnimationId}-left 0.4s ease-in-out infinite alternate;` : ''}
          }
          .wing-right {
            fill: #37c8ab;
            /* Pivot point where right wing meets the thorax */
            transform-origin: 145px 145px;
            ${isFlying ? `animation: ${wingAnimationId}-right 0.4s ease-in-out infinite alternate;` : ''}
          }
          }
          .butterfly-head {
            fill: #916f6f;
            z-index: 10;
            position: relative;
          }
          .body-accent {
            fill: #6c5353;
            z-index: 10;
            position: relative;
          }
          
          ${shouldAnimate ? `
          @keyframes ${wingAnimationId}-left {
            from {
              /* Open state - wings spread */
              transform: rotateY(0deg) rotateZ(0deg) translateY(0px);
              opacity: 1;
            }
            to {
             /* Closed state - tilted along body angle with lift */
              transform: rotateX(-40deg) rotateY(-60deg) rotateZ(20deg) translateY(-5px);
              opacity: 0.7;
            }
          }
          
          @keyframes ${wingAnimationId}-right {
            from {
              /* Open state - wings spread */
              transform: rotateY(0deg) rotateZ(0deg) translateY(0px);
              opacity: 1;
            }
            to {
              /* Closed state - tilted along body angle with lift */
              transform: rotateY(80deg) rotateZ(-20deg) translateY(-5px);
              opacity: 0.7;
            }
          }
          ` : ''}
        `}
      </style>
      <g transform="translate(3.3937378,-2.9513774)">
        <path
          className="wing-left"
          d="m 124.91213,129.67987 c 0,0 -99.930879,-29.0738 -117.9066682,-13.68989 -4.7639298,4.56643 11.1116632,13.10254 19.9268132,23.79409 9.787402,11.87074 22.550028,13.73946 30.511727,22.59599 9.340043,10.38979 16.854238,23.1014 24.120002,29.22825 16.585672,13.98587 60.952926,-25.58086 63.003626,-23.39668 0.93324,0.994 -21.98985,26.38055 -32.65033,41.53564 -17.690553,25.14914 -12.052414,33.75789 9.19003,45.54453 18.41695,10.21888 51.15788,-2.89972 59.81143,-20.3735 4.59844,-9.28544 -8.85521,-29.77325 -8.85521,-29.77325"
        />
        <path
          className="wing-right"
          d="m 140.61606,120.79857 c 0,0 23.22854,-98.652745 41.32862,-108.639375 6.87673,-3.7942009 13.22778,12.57948 17.41155,29.749287 3.13973,12.885242 -0.68393,26.698277 2.6072,39.235924 3.13509,11.943181 5.39564,26.131544 9.60557,34.918844 9.90706,20.67874 -46.39347,40.73378 -46.39347,40.73378 0,0 34.46532,-5.82285 51.77412,-6.86088 22.48158,-1.34824 28.81837,-2.76661 34.34583,27.36745 3.64826,19.88925 -20.54376,43.27205 -40.69161,44.99134 -11.58488,0.98858 -25.4329,-25.44458 -25.4329,-25.44458"
        />
        <path
          className="butterfly-body"
          d="m 186.02665,214.41177 c -0.6473,-1.38039 -57.11486,-97.03295 -57.11486,-97.03295"
        />
        <path
          className="butterfly-antenna"
          d="M 118.02155,116.9044 66.030886,89.285014"
        />
        <path
          className="butterfly-antenna"
          d="M 129.68602,108.95303 119.70286,58.862544"
        />
        <path
          className="butterfly-body"
          d="m 176.40313,207.11128 9.62352,7.30049 -2.86508,-13.64822"
        />
        <path
          className="butterfly-body"
          d="m 135.80237,130.15431 -10.89024,-0.47444 47.15142,75.46518 13.9631,9.26672 c -14.24817,-24.96933 -13.45029,-24.59059 -50.22428,-84.25746"
        />
        <path
          className="body-accent"
          d="m 140.61606,120.79857 -4.81369,9.35574 50.22428,84.25746 -0.85568,-17.56141"
        />
        <path
          className="butterfly-head"
          d="m 129.95512,108.95037 a 13.327892,13.022045 0 0 1 13.32773,12.9563 13.327892,13.022045 0 0 1 -13.19316,13.08712 13.327892,13.022045 0 0 1 -13.46093,-12.82417 13.327892,13.022045 0 0 1 13.05725,-13.2166"
        />
      </g>
    </svg>
  );
};
