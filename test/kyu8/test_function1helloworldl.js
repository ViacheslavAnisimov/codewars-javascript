const assert = require("chai").assert;

const greet = requare('../../src/kyu8/function1helloworld').greet

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});