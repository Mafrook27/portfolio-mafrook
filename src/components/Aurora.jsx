import React from 'react';
import './Aurora.css';

const Aurora = ({ className = '', opacity = 1 }) => {
  return (
    <div className={`aurora-root ${className}`} style={{ '--aurora-opacity': opacity }}>
      <div className="aurora-blob a1" />
      <div className="aurora-blob a2" />
      <div className="aurora-blob a3" />
      <div className="aurora-blob a4" />
    </div>
  );
};

export default Aurora;
