//************************************************************* */
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
//************************************************************* */

let toCamelCase = (str) => replace(/_-(.)/g, (_, ch) => ch.toUpperCase())

function toCamelCase(str) {    
    return replace(/[_-](.)/g, (_, ch) => ch.toUpperCase);
  }

function toCamelCase(str) {
  let arr = str.split(/[_-]/g);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += arr[i];
    } else {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }
  return result;
}
