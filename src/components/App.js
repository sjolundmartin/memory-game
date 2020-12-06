import * as React from 'react';
import Game from './Game';

export function App() {
  const noOfPairs = 8,
    type = 'num';

  return <Game pairs={noOfPairs} pairType={type} />;
}
