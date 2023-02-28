const { assert } = require('chai');

const areaOrPerimeter = requare('../../src/kyu8/areaorperimeter').areaOrPerimeter

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(areaOrPerimeter(3,  3),  9);
    assert.strictEqual(areaOrPerimeter(6, 10), 32);
  });
});