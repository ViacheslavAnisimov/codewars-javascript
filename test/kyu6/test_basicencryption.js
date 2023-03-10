const Test = require('@codewars/test-compat');

describe("basic encryption", function() {

  it("basic tests", function() {
    Test.assertEquals(encrypt("", 1), "", "text = '', rule = 1");
    Test.assertEquals(encrypt("a", 1), "b", "text = 'a', rule = 1");
    Test.assertEquals(encrypt("please encrypt me", 2), "rngcug\"gpet{rv\"og", "text = 'please encrypt me', rule = 2");
  });
  
});
