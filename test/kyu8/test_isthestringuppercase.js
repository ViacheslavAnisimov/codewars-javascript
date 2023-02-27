const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const isUpperCase = requare('../../src/kyu8/isthestringuppercase').isUpperCase

describe('Fixed Tests', () => {
  it("should work for the examples provided in the description", () => {
    assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
    assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
    assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
    assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
  });
  
  it("should also work for a few other basic tests", () => {
    assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
    assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
    assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
    assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
    assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
    assert.strictEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
    assert.strictEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
    assert.strictEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    assert.strictEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    assert.strictEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
    assert.strictEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
    assert.strictEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    assert.strictEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
    assert.strictEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
    assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
    assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
    assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
    assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
  });
});