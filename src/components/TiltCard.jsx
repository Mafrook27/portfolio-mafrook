import React, { useRef } from 'react';

const TiltCard = ({ children, className, style, maxTilt = 7, scaleOnHover = 1.02, glare = true }) => {
  const ref = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -maxTilt;
    const ry = ((x - cx) / cx) * maxTilt;

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scaleOnHover},${scaleOnHover},${scaleOnHover})`;

    if (glare && glareRef.current) {
      const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.18) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    if (glare && glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.18s ease', transformStyle: 'preserve-3d', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: 'absolute', inset: 0, borderRadius: 'inherit',
            opacity: 0, pointerEvents: 'none', zIndex: 2,
            transition: 'opacity 0.2s ease',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltCard;
