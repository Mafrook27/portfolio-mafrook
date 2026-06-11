import React, { useEffect, useRef, useState } from 'react';
import './BlurText.css';

const BlurText = ({ text, className = '', tag: Tag = 'span', delayMs = 60, threshold = 0.15 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`blur-text-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`blur-word ${visible ? 'blur-word--in' : ''}`}
          style={{ transitionDelay: `${i * delayMs}ms` }}
          aria-hidden="true"
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default BlurText;
