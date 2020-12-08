import React, { useState, useEffect, useRef } from 'react';
//import tileArrayMaker from '../tileArrayMaker';
import utils from '../utils';

import Tile from './Tile';

//Based on the type of game passed by the parent, fetches an array of tile values from ../utils.
const createTileArray = (type, noOfPairs) => {
  if (type == 'string') {
    return utils.createStringPairs(noOfPairs);
  }
  if (type == 'num') {
    return utils.createNumPairs(noOfPairs);
  }
  //All tiles have the same value
  if (type == 'easy') {
    return utils.createEasyMode(noOfPairs);
  }
};

const Game = (props) => {
  //STATES
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [candidateKeys, setCandidateKeys] = useState([]);
  const [candidateValues, setCandidateValues] = useState([]);
  const [wrongPair, setWrongPair] = useState([]);
  const tiles = useRef([...createTileArray(props.type, props.noOfPairs)]);

  //Returns the comparison of two candidateValues as Boolean
  const isAMatch = candidateValues[0] === candidateValues[1];

  //Logic when a tile in the UI is clicked
  const onTileClick = (key, value, status) => {
    console.log(value);
    if (status === 'matched' || status === 'candidate') {
      console.log('already clicked');
      return;
    }

    const newCandidateKeys = candidateKeys.concat([key]);
    const newCandidateValues = candidateValues.concat([value]);

    if (candidateKeys.length <= 1) {
      setCandidateKeys(newCandidateKeys);
      setCandidateValues(newCandidateValues);
    }
  };

  //Checks if there are two tiles selected and puts them in matchedTiles if they match. Then clears candidateValues and candidateKeys.
  //The function runs when onTileClick is finished.
  useEffect(() => {
    if (candidateKeys.length == 2) {
      if (isAMatch) {
        console.log('match');
        const newMatchedTiles = matchedTiles.concat(candidateKeys);
        setMatchedTiles(newMatchedTiles);
      } else {
        setWrongPair(candidateKeys);
        setTimeout(() => {
          setWrongPair([]);
        }, 1000);
      }
      setCandidateKeys([]);
      setCandidateValues([]);
    }
  });

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
