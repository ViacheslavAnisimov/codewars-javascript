const Test = require('@codewars/test-compat');

const multiplicationTable = requare('../../src/kyu8/multiplicationTable').multiplicationTable

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
  });
});