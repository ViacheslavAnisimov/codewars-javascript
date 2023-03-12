const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
    assert.strictEqual(shorter_reverse_longer("hello", "bau"), "bauollehbau");
    assert.strictEqual(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi");
  });
});