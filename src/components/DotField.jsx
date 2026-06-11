import React, { useMemo } from 'react';

const DotField = ({
  color = '#0d9488',
  size = 1.5,
  spacing = 32,
  opacity = 0.25,
  className = ''
}) => {
  const dotStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    opacity: opacity,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, ${spacing}px)`,
    gridTemplateRows: `repeat(auto-fill, ${spacing}px)`,
    gap: `${spacing - size}px`,
  };

  const dots = useMemo(() => {
    const count = Math.ceil((typeof window !== 'undefined' ? window.innerWidth : 1200) / spacing) * 10;
    return Array.from({ length: count });
  }, [spacing]);

  return (
    <div
      className={`dot-field ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        ...gridStyle
      }}
    >
      {dots.map((_, i) => (
        <div key={i} style={dotStyle} />
      ))}
    </div>
  );
};

export default DotField;
