const perfectRoots = requare('../../src/kyu8/numberwith3roots').perfectRoots

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(perfectRoots(256),true)
  Test.assertEquals(perfectRoots(1000),false)
  Test.assertEquals(perfectRoots(6561),true)
    });
  });