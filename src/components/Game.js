import React from 'react';
import utils from '../utils';

import Tile from './Tile';

const Game = (props) => {
  //   const isAMatch = (pair) => {
  //     return pair[0] === pair[1];
  //   };

  const createTileArray = () => {
    console.log('in createTileArray');
    if (props.pairType == 'string') {
      return utils.createStringPairs(props.noOfPairs);
    } else if (props.pairType == 'num') {
      console.log('in num if statement');
      return utils.createNumPairs(props.noOfPairs);
    }
  };

  console.log('props', props);
  console.log('function', createTileArray());
  return (
    <div className="container">
      <div className="body">
        <h2>Memory Game</h2>
        <div className="tiles">
          {createTileArray().map((value, index) => (
            <Tile key={index} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
