const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(bandNameGenerator('knife'), 'The Knife');
Test.assertEquals(bandNameGenerator('tart'), 'Tartart');
Test.assertEquals(bandNameGenerator('sandles'), 'Sandlesandles');
Test.assertEquals(bandNameGenerator('bed'), 'The Bed');
  });
});