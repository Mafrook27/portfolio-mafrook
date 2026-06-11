import React, { useRef, useState, useEffect } from 'react';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(13, 148, 136, 0.12)',
  spotlightSize = 200,
  borderGlow = true,
  style = {}
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
        boxShadow: isHovered
          ? 'var(--shadow-md)'
          : 'var(--shadow-sm)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      <div
        className="spotlight-effect"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity var(--transition-base)',
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Border glow effect */}
      {borderGlow && isHovered && (
        <div
          className="border-glow-effect"
          style={{
            position: 'absolute',
            inset: -1,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            opacity: 0.6,
            background: `radial-gradient(${spotlightSize * 1.2}px circle at ${position.x}px ${position.y}px, rgba(13, 148, 136, 0.15), transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
