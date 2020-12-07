import React, { useState, useEffect } from 'react';
import utils from '../utils';

import Tile from './Tile';

const Game = (props) => {
  const [matchedTiles, setMatchedTiles] = useState([1, 4]);
  const [candidateTiles, setCandidateTiles] = useState({
    keys: [],
    values: [],
  });

  const onTileClick = (key, value) => {
    if (matchedTiles.includes(key) || candidateTiles.keys.includes(key)) {
      console.log('already clicked');
      return;
    }
    if (candidateTiles.keys.length <= 1) {
      setCandidateTiles((prevState) => ({
        keys: [...prevState.keys, key],
        values: [...prevState.values, value],
      }));
    }
  };

  useEffect(() => {
    if (candidateTiles.keys.length == 2) {
      if (candidateTiles.values[0] == candidateTiles.values[1]) {
        console.log('match');
      } else {
        console.log('no match');
      }
    }
  }, [candidateTiles]);

  //   const checkIfMatch = () => {
  //     if (candidateTiles.keys.length == 2) {
  //       if (candidateTiles[0] === candidateTiles[1]) {
  //         console.log('matched');
  //         this.setState((prevState) => ({
  //           matchedTiles: [...prevState.matchedTiles, ...candidateTiles],
  //         }));
  //       }
  //     }
  //   };

  const tileStatus = (tileKey) => {
    if (matchedTiles.includes(tileKey)) {
      return 'matched';
    }
    if (candidateTiles.keys.includes(tileKey)) {
      return 'candidate';
    }
    // if (candidateTiles.keys.length == 2) {
    //   //kolla om match och lägg till i matched eller returnera 'wrong'
    // }
    return 'hidden';
  };

  const createTileArray = () => {
    if (props.pairType == 'string') {
      return utils.createStringPairs(props.noOfPairs);
    }
    if (props.pairType == 'num') {
      return utils.createNumPairs(props.noOfPairs);
    }
    //All tiles have the same value
    if (props.pairType == 'easy') {
      return utils.createEasyMode(props.noOfPairs);
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
