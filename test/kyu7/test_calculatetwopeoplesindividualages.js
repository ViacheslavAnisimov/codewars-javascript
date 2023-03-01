const getAges = requare('../../src/kyu8/calculatetwopeoplesindividualages').getAges

describe('Calculating Individual Ages ', function(){
  it ("it returns 14,10 when passed 24,4", function(){
    Test.assertSimilar(getAges(24,4), [14,10]);
  });
it ("it returns null when passed 63,-14", function(){
    Test.assertSimilar(getAges(63,-14), null);
  });
});
