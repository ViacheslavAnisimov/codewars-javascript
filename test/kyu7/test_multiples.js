const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('multiples', () => {
  it('fixed tests', () => {
    assert.strictEqual(multiple(30), "BangBoom")
    assert.strictEqual(multiple(3), "Bang")
    assert.strictEqual(multiple(98),"Miss")
    assert.strictEqual(multiple(65),"Boom")
    assert.strictEqual(multiple(23),"Miss")
    assert.strictEqual(multiple(15),"BangBoom")
  })
})