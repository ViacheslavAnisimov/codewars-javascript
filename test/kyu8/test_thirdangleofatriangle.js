const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const otherAngle = requare('../../src/kyu8/thirdangleofatriangle').otherAngle

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});