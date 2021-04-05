/* Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character. */

function crunch(str) {
  let collapsedStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === collapsedStr[collapsedStr.length - 1]) {
      continue;
    } else {
      collapsedStr += str[idx];
    }
  }
  return collapsedStr;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
