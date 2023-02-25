function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
    let result = 1;
    for (let i = 1; i <= power; i++) {
      result *= number;
    }
    return result;
  }