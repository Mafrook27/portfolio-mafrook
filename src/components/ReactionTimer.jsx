import React, { useState } from 'react';
import './ReactionTimer.css';

const ReactionTimer = () => {
const [message, setMessage] = useState('Tap to start');
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
    setMessage('Start again.');
    setWaiting(false);
    } else if (start) {
    const end = Date.now();
    setReactionTime(end - start);
    setStart(null);
    setMessage('Tap to start');
    }
};

return (
    <>
    <div className="reaction-timer" data-aos="flip-right" onClick={handleClick}>
    <h2>Reaction <span>Timer</span></h2>
    <div className={`box ${waiting ? 'waiting' : start ? 'ready' : ''}`}>
        <p>{reactionTime ? `Your time: ${reactionTime} ms` : message}</p>
    </div>
    </div>
    </>
);
};

export default ReactionTimer;



