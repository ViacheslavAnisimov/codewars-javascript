const Test = require('@codewars/test-compat');

const solution = requare('../../src/kyu8/stringendswith').solution

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});