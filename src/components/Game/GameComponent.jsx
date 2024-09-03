import React, { useState } from 'react';
import './GameComponent.css';

const GameComponent = () => {
  const options = [
    { label: 'home', link: '/home' },
    { label: 'about', link: 'about' },
    { label: 'about', link: 'about' },
    { label: 'about', link: 'about' },
    { label: 'about', link: 'about' },
  ];

  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);

  const startGame = () => {
    if (spinning) return;

    setSpinning(true);
    const rotations = 360 * 4; // 4 full rotations
    const randomStop = Math.floor(Math.random() * options.length);
    const finalAngle = rotations + randomStop * 72; // 72 degrees per option

    setAngle(finalAngle);

    setTimeout(() => {
      setSpinning(false);
      setCurrentOption(randomStop);
      window.location.href = options[randomStop].link; // Redirect after stopping
    }, 4000); // Adjust timing based on rotation speed
  };

  return (
    <div className="game-container">
      <div className="scrolling-text">
        <span className="scrolling-message">
          Hello, Hi! Welcome to my game. Let's play and decide where you should go first to view my portfolio.
        </span>
      </div>
      <div className="outer-circle">
        <div
          className="inner-circle"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="arrow"></div>
        </div>
        <button className="start-button" onClick={startGame} disabled={spinning}>
          Start Game
        </button>
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${index === currentOption ? 'active' : ''}`}
              style={{
                transform: `rotate(${index * 72}deg) translate(150px) rotate(-${index * 72}deg)`,
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
