const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(reverseLetter("krishan"),"nahsirk")

Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

Test.assertEquals(reverseLetter("ab23c"),"cba")

Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

})})