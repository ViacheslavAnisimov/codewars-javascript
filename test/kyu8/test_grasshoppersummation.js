const assert = require('chai').assert;

const summation = requare('../../src/kyu8/grasshoppersummation').summation

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})