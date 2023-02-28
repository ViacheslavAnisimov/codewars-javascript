const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const getSum = requare('../../src/kyu8/beginnerseries3sumofnumbers').getSum

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1), -1);
    assert.strictEqual(getSum(0, 1),  1);
    assert.strictEqual(getSum(2, 2),  2);
  })
});