const assert = require("chai").assert;

const zeroFuel = requare('../../src/kyu8/willyoumakeit').zeroFuel

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});