const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const switchItUp = requare('../../src/kyu8/switchitup').switchItUp

describe("Basic Tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
    assert.strictEqual(switchItUp(5),"Five");
  });
});