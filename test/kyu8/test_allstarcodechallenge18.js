const { assert } = require('chai');

const strCount = requare('../../src/kyu8/allstarcodechallenge18').strCount

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});