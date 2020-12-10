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

export default createTileArray;
