import React from 'react';
import useGameState from '../useGameState';

import Tile from './Tile';

const Game = (props) => {
  const {
    matchedTiles,
    candidateKeys,
    candidateValues,
    wrongPair,
    tiles,
    setGameState,
  } = useGameState(props.type, props.noOfPairs);

  //Logic when a tile in the UI is clicked
  const onTileClick = (key, value, status) => {
    if (status === 'matched' || status === 'candidate') {
      return;
    }

    const newCandidateKeys = candidateKeys.concat([key]);
    const newCandidateValues = candidateValues.concat([value]);

    setGameState(newCandidateKeys, newCandidateValues);
  };

  //Returns the status used by the Tile component.
  const tileStatus = (tileKey) => {
    if (matchedTiles.includes(tileKey)) {
      return 'matched';
    }
    if (wrongPair.includes(tileKey)) {
      return 'wrong';
    }
    if (candidateKeys.includes(tileKey)) {
      return 'candidate';
    }
    return 'hidden';
  };

  return (
    <div className="container">
      <div className="body">
        <h2>Memory Game</h2>
        <div className="tiles">
          {tiles.current.map((value, index) => (
            <Tile
              key={index}
              index={index}
              value={value}
              onClick={onTileClick}
              status={tileStatus(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
