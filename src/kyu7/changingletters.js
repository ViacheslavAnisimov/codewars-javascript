// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  return string.replaceAll('a', 'A').replaceAll('e', 'E').replaceAll('i', 'I').replaceAll('o', 'O').replaceAll('u', 'U');
}
