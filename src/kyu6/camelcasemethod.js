// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
  if (this.length === 1) {
    return this.toUpperCase()
  } else if (this.length > 1) {
    let words = this.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  return words.toString().replaceAll(",", "");
  }
  return "";
}
