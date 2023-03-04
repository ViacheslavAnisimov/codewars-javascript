const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("Noisy Cell Counts", function() {
  it("should not modify input array", function() {
    const data = [10,11,10];
    const actual = cleanedCounts(data);
    assert.deepEqual( actual, [10,11,11], `cleanedCounts [10,11,10]` );
    assert.deepEqual( data, [10,11,10], `input array was modified` );
  });
  it("example tests", function() {
    assert.deepEqual( cleanedCounts([1,1,2,2,1,2,2,2,2]), [1,1,2,2,2,2,2,2,2], `cleanedCounts [1,1,2,2,1,2,2,2,2]` );
    assert.deepEqual( cleanedCounts([2,1,2]), [2,2,2], `cleanedCounts [2,1,2]` );
    assert.deepEqual( cleanedCounts([4,4,4,4]), [4,4,4,4], `cleanedCounts [4,4,4,4]` );
    assert.deepEqual( cleanedCounts([5,5,6,5,5,5,5,6]), [5,5,6,6,6,6,6,6], `cleanedCounts [5,5,6,5,5,5,5,6]` );
  });
});