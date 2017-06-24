import uniqueRandomArray from 'unique-random-array';
import lameExcuses from './lame-excuses.json';
var getRandomItem = uniqueRandomArray(lameExcuses);

module.exports = {
  all: lameExcuses,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i =0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
