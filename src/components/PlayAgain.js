import React from 'react';

const PlayAgain = (props) => {
  return (
    <div className="game-done">
      <h3>Nice! You won!</h3>
      <button className="play-again-button" onClick={props.onClick}>
        PlayAgain
      </button>
    </div>
  );
};

export default PlayAgain;
