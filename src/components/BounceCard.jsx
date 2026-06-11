import React, { useRef } from 'react';
import './BounceCard.css';

const BounceCard = ({
  children,
  className = '',
  rotation = 0,
  style = {},
}) => {
  const ref = useRef(null);

  const handleEnter = () => {
    if (!ref.current) return;
    ref.current.style.transform = `rotate(0deg) translateY(-14px) scale(1.06)`;
    ref.current.style.zIndex = '20';
    ref.current.style.boxShadow = 'var(--bounce-shadow-hover)';
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `rotate(${rotation}deg) translateY(0) scale(1)`;
    ref.current.style.zIndex = '1';
    ref.current.style.boxShadow = 'var(--bounce-shadow)';
  };

  return (
    <div
      ref={ref}
      className={`bounce-card ${className}`}
      style={{
        ...style,
        transform: `rotate(${rotation}deg) translateY(0) scale(1)`,
        '--bounce-shadow':        '0 2px 12px rgba(0,0,0,0.07)',
        '--bounce-shadow-hover':  '0 20px 44px rgba(0,0,0,0.14)',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

export default BounceCard;
