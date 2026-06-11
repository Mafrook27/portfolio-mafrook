import React from 'react';

const AnimatedContent = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 20,
}) => {
  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  return (
    <div
      className={`animated-content ${className}`}
      style={{
        animation: `animContentIn ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
        '--anim-start': transforms[direction],
      }}
    >
      {children}
      <style>{`
        @keyframes animContentIn {
          from {
            opacity: 0;
            transform: var(--anim-start, translateY(20px));
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedContent;
