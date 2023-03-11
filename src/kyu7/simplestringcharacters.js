//*********************************************************** */
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!

//*********************************************************** */

function solve(s) {
  arr = [];
  arr.push(s.replace(/[^A-Z]/g, "").length);
  arr.push(s.replace(/[^a-z]/g, "").length);
  arr.push(s.replace(/[^0-9]/g, "").length);
  arr.push(s.replace(/[A-Z0-9]/gi, "").length);
  return arr;
}
