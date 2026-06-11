import React, { useState } from 'react';
import './ReactionTimer.css';

const ReactionTimer = () => {
  const [message, setMessage] = useState('Click to start');
  const [start, setStart] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const handleStart = () => {
    setMessage('Wait for green...');
    setWaiting(true);
    setReactionTime(null);
    const timeout = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      setMessage('Tap now!');
      setStart(Date.now());
      setWaiting(false);
    }, timeout);
  };

  const handleClick = () => {
    if (!start && !waiting) {
      handleStart();
    } else if (waiting) {
      setMessage('Too early! Click to try again.');
      setWaiting(false);
    } else if (start) {
      const end = Date.now();
      setReactionTime(end - start);
      setStart(null);
      setMessage('Click to start');
    }
  };

  const boxClass = `reaction-box${waiting ? ' waiting' : start ? ' ready' : ''}`;

  return (
    <div className="reaction-timer" data-aos="fade-up" data-aos-delay="100" onClick={handleClick}>
      <div className="reaction-timer-header">
        <h3>Reaction Timer</h3>
        <p>Test your reflexes! Click the box and react as fast as you can when it turns green.</p>
      </div>
      <div className={boxClass}>
        <div className="box-icon">
          {waiting ? '⏳' : start ? '🟢' : reactionTime ? '⚡' : '🎯'}
        </div>
        <p>
          {reactionTime
            ? `${reactionTime} ms — ${reactionTime < 200 ? '🔥 Incredible!' : reactionTime < 300 ? '⚡ Great!' : '👍 Not bad!'}`
            : message}
        </p>
      </div>
      <p className="reaction-hint">Click anywhere in the box</p>
    </div>
  );
};

export default ReactionTimer;
