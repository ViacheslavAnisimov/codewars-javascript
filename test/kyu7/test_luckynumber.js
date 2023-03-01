const Test = require('@codewars/test-compat');

const isLucky = requare('../../src/kyu8/luckynumber').isLucky

describe("Testing if number is lucky", function(){
  it("Basic testing", function() {
    Test.assertEquals(isLucky(1892376), true, "Wrong result for 1892376");
    Test.assertEquals(isLucky(189237), false, "Wrong result for 189237");
    Test.assertEquals(isLucky(1098), true, "Wrong result for 1098");
    Test.assertEquals(isLucky(22869), true, "Wrong result for 22869");
    Test.assertEquals(isLucky(0), true, "Wrong result for 0");
  });
});
