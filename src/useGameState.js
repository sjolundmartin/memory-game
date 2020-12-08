import { useState, useEffect, useRef } from 'react';
import utils from './utils';

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

const useGameState = (type, noOfPairs) => {
  //STATES
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [candidateKeys, setCandidateKeys] = useState([]);
  const [candidateValues, setCandidateValues] = useState([]);
  const [wrongPair, setWrongPair] = useState([]);
  const tiles = useRef([...createTileArray(type, noOfPairs)]);

  //Checks if there are two tiles selected and puts them in matchedTiles if they match. Then clears candidateValues and candidateKeys.
  //The function runs when onTileClick is finished.
  useEffect(() => {
    if (candidateKeys.length == 2) {
      if (isAMatch) {
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
  }, [candidateKeys, isAMatch, matchedTiles]);

  //Returns the comparison of two candidateValues as Boolean
  const isAMatch = candidateValues[0] === candidateValues[1];

  const setGameState = (newCandidateKeys, newCandidateValues) => {
    if (candidateKeys.length <= 1) {
      setCandidateKeys(newCandidateKeys);
      setCandidateValues(newCandidateValues);
    }
  };

  return {
    matchedTiles,
    candidateKeys,
    candidateValues,
    wrongPair,
    tiles,
    setGameState,
  };
};

export default useGameState;
