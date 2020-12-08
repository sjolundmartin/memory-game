import React, { useState } from 'react';
import Game from './Game';

export function App() {
  const [gameId, setGameId] = useState(1);
  const noOfPairs = 8,
    type = 'string';

  return (
    <Game
      noOfPairs={noOfPairs}
      type={type}
      key={gameId}
      startNewGame={() => setGameId(gameId + 1)}
    />
  );
}
