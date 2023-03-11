const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", function(){
  it("Should pass fixed tests", function(){
    assert.strictEqual(covfefe("coverage"),"covfefe");
    assert.strictEqual(covfefe("coverage coverage"),"covfefe covfefe");
    assert.strictEqual(covfefe("nothing"),"nothing covfefe");
    assert.strictEqual(covfefe("double space "),"double space  covfefe");
    assert.strictEqual(covfefe("covfefe"),"covfefe covfefe");
    assert.strictEqual(covfefe("erag"),"erag covfefe");
  });
});