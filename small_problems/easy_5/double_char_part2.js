// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(str) {
  const exclude = 'aeiouAEIOU0123456789 .,!-'.split('');
  let strArray = [];

  for (let idx = 0; idx < str.length; idx++) {
    if (exclude.includes(str[idx])) {
      strArray.push(str[idx]);
    } else {
      strArray.push(str[idx], str[idx]);
    }
  }
  return strArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
