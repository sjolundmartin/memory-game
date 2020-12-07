import * as React from 'react';
import Game from './Game';

export function App() {
  const noOfPairs = 8,
    type = 'easy';

  return <Game noOfPairs={noOfPairs} pairType={type} />;
}
