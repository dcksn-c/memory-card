import React from 'react';

function Header(props) {
  const { score, highScore } = props;

  return (
    <header className="header">
      <p className="main-title">Memory Game</p>
      <div className="score-board">
        <p className="current-score">Score: {score}</p>
        <p className="best-score">Best Score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;