const chai = require("chai");
const assert = chai.assert;

function dotest(a, b, c, expected) {
    assert.approximately(heron(a, b, c), expected, 0.01, `With a = ${a}, b = ${b}, c = ${c}`);
}

describe("Solution", function() {
  it("Fixed tests", function() {
    dotest(3, 4, 5, 6);
    dotest(6, 8, 10, 24);
  });
});
