const Test = require('@codewars/test-compat');

const calculate = requare('../../src/kyu8/debugbasiccalculator').calculate

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(calculate(2,"+", 4), 6);
Test.assertEquals(calculate(6,"-", 1.5), 4.5);
Test.assertEquals(calculate(-4,"*", 8), -32);
Test.assertEquals(calculate(49,"/", -7), -7);
Test.assertEquals(calculate(8,"m", 2), null);
Test.assertEquals(calculate(4,"/",0), null);
  });
});
