import React, { useState, useEffect, useRef } from 'react';
//import tileArrayMaker from '../tileArrayMaker';
import utils from '../utils';

import Tile from './Tile';

const Game = (props) => {
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [candidateKeys, setCandidateKeys] = useState([]);
  const [candidateValues, setCandidateValues] = useState([]);

  const createTileArray = () => {
    if (props.type == 'string') {
      return utils.createStringPairs(props.noOfPairs);
    }
    if (props.type == 'num') {
      return utils.createNumPairs(props.noOfPairs);
    }
    //All tiles have the same value
    if (props.type == 'easy') {
      return utils.createEasyMode(props.noOfPairs);
    }
  };

  const tiles = useRef([...createTileArray(props.type, props.noOfPairs)]);

  const isAMatch = candidateValues[0] === candidateValues[1];

  const onTileClick = (key, value, status) => {
    console.log(value, tiles);
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

  useEffect(() => {
    if (candidateKeys.length == 2) {
      if (isAMatch) {
        console.log('match');
        const newMatchedTiles = matchedTiles.concat(candidateKeys);
        setMatchedTiles(newMatchedTiles);
      } else {
        console.log('match');
      }
      setCandidateKeys([]);
      setCandidateValues([]);
    }
  });

  const tileStatus = (tileKey) => {
    if (matchedTiles.includes(tileKey)) {
      return 'matched';
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
      <button onClick={() => console.log('matchedTiles', matchedTiles)}>
        matchedTiles
      </button>
      <button onClick={() => console.log('candidateKeys', candidateKeys)}>
        candidateKeys
      </button>
      <button onClick={() => onTileClick}>click</button>
      <button
        onClick={() =>
          console.log('candidateKeys length', candidateKeys.length)
        }
      >
        candidateKeyslength
      </button>
    </div>
  );
};

export default Game;
