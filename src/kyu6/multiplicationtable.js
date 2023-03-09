multiplicationTable = function (size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array[i] = [];
    for (let j = 0; j < size; j++) {
      array[i][j] = (i + 1) * (j + 1);
    }
  }
  return array;
};
