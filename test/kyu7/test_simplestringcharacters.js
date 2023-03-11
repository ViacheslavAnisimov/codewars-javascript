const { assert } = require('chai');

describe("Basic tests", function(){
  it("Example tests", () => {
    assert.sameOrderedMembers(solve(""),[0,0,0,0]);
    assert.sameOrderedMembers(solve("aAbBcC"),[3,3,0,0]);
    assert.sameOrderedMembers(solve("Codewars@codewars123.com"),[1,18,3,2]);
    assert.sameOrderedMembers(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
    assert.sameOrderedMembers(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
    assert.sameOrderedMembers(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
    assert.sameOrderedMembers(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
    assert.sameOrderedMembers(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
  });
});