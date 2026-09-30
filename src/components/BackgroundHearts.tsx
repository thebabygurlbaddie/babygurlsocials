import React from 'react';

interface HeartConfig {
  id: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  scale?: number;
}

const HEARTS: HeartConfig[] = [
  { id: 1, top: '6%', left: '4%', size: 60, rotation: -14, duration: 7.2, delay: 0 },
  { id: 2, top: '15%', right: '5%', size: 76, rotation: 18, duration: 8.4, delay: 1.8 },
  { id: 3, top: '38%', left: '3%', size: 46, rotation: -8, duration: 6.6, delay: 3.5 },
  { id: 4, top: '50%', right: '4%', size: 68, rotation: 15, duration: 9.0, delay: 1.2 },
  { id: 5, top: '68%', left: '6%', size: 82, rotation: -20, duration: 7.8, delay: 4.6 },
  { id: 6, top: '84%', right: '7%', size: 52, rotation: 12, duration: 8.2, delay: 2.4 },
  { id: 7, top: '24%', left: '14%', size: 40, rotation: 8, duration: 9.5, delay: 5.5 },
  { id: 8, top: '74%', right: '16%', size: 56, rotation: -12, duration: 7.1, delay: 3.9 },
];

export const BackgroundHearts: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {HEARTS.map((heart) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          top: heart.top,
          bottom: heart.bottom,
          left: heart.left,
          right: heart.right,
          width: `${heart.size}px`,
          height: `${heart.size}px`,
          transform: `rotate(${heart.rotation}deg)`,
        };

        return (
          <div key={heart.id} style={style} className="opacity-80">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 50,85 C 22,60 5,42 5,26 C 5,11.5 16,3 30.5,3 C 39,3 46,7.5 50,14 C 54,7.5 61,3 69.5,3 C 84,3 95,11.5 95,26 C 95,42 78,60 50,85 Z"
                fill="none"
                stroke="#F2AEB9"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                className="heart-draw"
                style={{
                  animationDuration: `${heart.duration}s`,
                  animationDelay: `${heart.delay}s`,
                }}
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
