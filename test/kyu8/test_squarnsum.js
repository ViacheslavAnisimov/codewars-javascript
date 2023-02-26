const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const squareSum = requare('../../src/kyu8/squarnsum').squareSum

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});