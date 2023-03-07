const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(nerdify("Fund4m3nt41s"),"Fund4m3nt41s");
Test.assertEquals(nerdify("Seven"),"S3v3n");
Test.assertEquals(nerdify("Los Angeles"),"Los 4ng313s");
Test.assertEquals(nerdify("Seoijselawuue"),"S3oijs314wuu3");
  });
});