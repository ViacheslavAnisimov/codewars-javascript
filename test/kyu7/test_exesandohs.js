const Test = require('@codewars/test-compat');

const XO = requare('../../src/kyu8/exesandohs').XO

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});