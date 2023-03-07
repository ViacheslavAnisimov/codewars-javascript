const Test = require('@codewars/test-compat');

describe("Example tests", function() {
  it("Fixed cases", function() {
    Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 5), 4);
    Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 0), 0);
    Test.assertSimilar(keepOrder([1, 1, 2, 2, 2], 2), 2);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 5), 4);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], -1), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 0), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 1), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 3), 2);
  });
});