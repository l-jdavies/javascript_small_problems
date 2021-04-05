// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

function centerOf(str) {
  let returnChar = [];
  let idx = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    returnChar.push(str[idx - 1], str[idx]);
  } else {
    returnChar.push(str[idx]);
  }

  return returnChar.join('');
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
