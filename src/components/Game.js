import React, { useState } from 'react';
import utils from '../utils';

import Tile from './Tile';

const Game = (props) => {
  const [matchedTiles, setMatchedTiles] = useState([1, 4]);
  const [candidateTiles, setCandidateTiles] = useState([6, 10]);
  //   const isAMatch = (pair) => {
  //     return pair[0] === pair[1];
  //   };

  const onTileClick = (key) => {
    if (matchedTiles.includes(key) || candidateTiles.includes(key)) {
      return;
    }

    if (candidateTiles.length() <= 1) {
      return;
    }
  };

  const tileStatus = (tile) => {
    if (matchedTiles.includes(tile)) {
      return 'matched';
    }

    if (candidateTiles.includes(tile)) {
      return 'candidate';
    }

    return 'hidden';
  };

  const createTileArray = () => {
    if (props.pairType == 'string') {
      return utils.createStringPairs(props.noOfPairs);
    } else if (props.pairType == 'num') {
      return utils.createNumPairs(props.noOfPairs);
    }
  };

  return (
    <div className="container">
      <div className="body">
        <h2>Memory Game</h2>
        <div className="tiles">
          {createTileArray().map((value, index) => (
            <Tile
              key={index}
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
