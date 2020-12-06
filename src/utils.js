const utils = {
  //Creates and returns a list of (pairs) number of integer pairs between 0 and 100
  createNumPairs: (pairs) => {
    let memArray = [];
    for (var i = 0; i < pairs; i++) {
      var temp = Math.floor(Math.random() * 101);
      memArray.push(temp);
      memArray.push(temp);
    }
    return shuffle(memArray);
  },

  //Creates and returns a list of (pairs) number of string pairs between 0 and 100
  createStringPairs: (pairs) => {
    let memArray = [];
    var tempArray = shuffle(words);
    for (var i = 0; i < pairs; i++) {
      memArray.push(tempArray[i]);
      memArray.push(tempArray[i]);
    }

    return shuffle(memArray);
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
