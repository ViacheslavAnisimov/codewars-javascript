const chai = require("chai");
const assert = chai.assert;

const solution = requare('../../src/kyu8/breakcamelcase').solution

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
    assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  });
});
