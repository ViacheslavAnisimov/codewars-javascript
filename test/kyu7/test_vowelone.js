const { assert } = require('chai');

describe( "vowelOne" , () => {
  it( "Sample tests", () => {
   assert.strictEqual( vowelOne( "vowelOne" ), "01010101" );
   assert.strictEqual( vowelOne( "123, arou" ), "000001011" );
  })
})