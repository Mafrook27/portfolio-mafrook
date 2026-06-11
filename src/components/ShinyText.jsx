import React from 'react';

const ShinyText = ({
  text,
  className = '',
  color = 'var(--color-accent)',
  shimmerColor = 'rgba(255, 255, 255, 0.6)',
  shimmerDuration = 2.5,
}) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color} 40%, ${shimmerColor} 50%, ${color} 60%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: `shimmer ${shimmerDuration}s ease-in-out infinite`,
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
