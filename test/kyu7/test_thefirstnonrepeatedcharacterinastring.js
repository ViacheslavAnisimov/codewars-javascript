const assert = require("chai").assert;

describe("Fixed tests", function() {
  it("Testing for test", () => assert.strictEqual(firstNonRepeated("test"), 'e'));
  it("Testing for teeter", () => assert.strictEqual(firstNonRepeated("teeter"), 'r'));
  it("Testing for 1122321235121222", () => assert.strictEqual(firstNonRepeated("1122321235121222"), '5'));
  it("Testing for rend", () => assert.strictEqual(firstNonRepeated("rend"), 'r'));
});