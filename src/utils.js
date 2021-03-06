//Array construction
const utils = {
  //Creates and returns a list of (pairs) number of unique integer pairs between 0 and 100
  createNumPairs: (pairs) => {
    let memArray = [];
    for (var i = 0; i < pairs; i++) {
      var uniqueNumFound = false;
      while (!uniqueNumFound) {
        var temp = Math.floor(Math.random() * 17);
        if (!memArray.includes(temp)) {
          memArray.push(temp);
          memArray.push(temp);
          uniqueNumFound = true;
        }
      }
    }

    return shuffle(memArray);
  },

  //Creates and returns a list of (pairs) number of unique string pairs between 0 and 100
  createStringPairs: (pairs) => {
    let memArray = [];
    var tempArray = shuffle(words);
    for (var i = 0; i < pairs; i++) {
      memArray.push(tempArray[i]);
      memArray.push(tempArray[i]);
    }

    return shuffle(memArray);
  },
  //Returns a list of (pairs-1) number of identical string pairs
  createEasyMode: (pairs) => {
    return [...Array((pairs - 1) * 2).fill('easy'), ...['a', 'a']];
  },
};

//Randomly shuffles an array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const words = [
  'cat',
  'dog',
  'giraffe',
  'car',
  'hat',
  'house',
  'ball',
  'pants',
  'candy',
  'hamster',
  'trouser',
  'computer',
  'pencil',
  'telephone',
  'headset',
  'cable',
  'mouse',
  'keyboard',
  'remote',
  'television',
  'lamp',
  'shirt',
  'bed',
  'pillow',
  'jersey',
  'pasta',
  'window',
  'keys',
];

export default utils;
