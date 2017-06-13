var expect = require('chai').expect;
var lameExcuses = require('./index');

describe('lame-excuses', function() {
  it('should work!', function() {
    expect(true).to.be.true;
  });
  describe('random', function() {
    it('should return a random item from lameExcuses.all', function() {
      var randomItem = lameExcuses.random();
      expect(lameExcuses.all).to.include(randomItem);
    });
  });
});
