const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Solution", () => {
  it("test_with_simple_names", () => {
    assert.strictEqual(toUnderScore("ThisIsAUnitTest"), "This_Is_A_Unit_Test");
    assert.strictEqual(toUnderScore("ThisShouldBeSplittedCorrectIntoUnderscore"), "This_Should_Be_Splitted_Correct_Into_Underscore");    
  });
  
  it("test_with_numbers", () => {
    assert.strictEqual(toUnderScore("Calculate1Plus1Equals2"), "Calculate_1_Plus_1_Equals_2");
    assert.strictEqual(toUnderScore("Calculate15Plus5Equals20"), "Calculate_15_Plus_5_Equals_20");
    assert.strictEqual(toUnderScore("Calculate500DividedBy5Equals100"), "Calculate_500_Divided_By_5_Equals_100");
  });
  
   it("test_with_special_cases", () => {
    assert.strictEqual(toUnderScore("This_Is_Already_Splitted_Correct"), "This_Is_Already_Splitted_Correct");
    assert.strictEqual(toUnderScore("ThisIs_Not_SplittedCorrect"), "This_Is_Not_Splitted_Correct");
    assert.strictEqual(toUnderScore("_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_"), "_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_");
  });
});