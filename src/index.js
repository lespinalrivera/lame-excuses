var uniqueRandomArray = require('unique-random-array');
var lameExcuses = require('./lame-excuses.json');

module.exports = {
  all: lameExcuses,
  random: uniqueRandomArray(lameExcuses)
};
