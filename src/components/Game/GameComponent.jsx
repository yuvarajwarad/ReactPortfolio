import React, { useState } from 'react';
import './GameComponent.css';

const GameComponent = () => {
  const options = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contact', link: 'contact' },
  ];

  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);

  const startGame = () => {
    if (spinning) return;

    setSpinning(true);
    const rotations = 360 * 3; // 3 full rotations
    const randomStop = Math.floor(Math.random() * options.length); // Random stop between 0 and 3
    const finalAngle = rotations + randomStop * 90; // Each option is 90 degrees apart

    // Set the rotation angle
    setAngle(finalAngle);

    // Set timeout to simulate spinning and determine the option at the front
    setTimeout(() => {
      setSpinning(false);
      setCurrentOption(randomStop); // Highlight the correct option

      // Navigate to the correct section using ID
      window.location.href = `#${options[randomStop].link}`;
    }, 4000); // Adjust timing based on rotation speed
  };

  return (
    <div id='game' className="game-container">
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
                transform: `rotate(${index * 90}deg) translate(125px) rotate(-${index * 90}deg)`,
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
