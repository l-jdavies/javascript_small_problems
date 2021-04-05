// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

function swap(str) {
  let splitStr = str.split(' ');
  splitStr = splitStr.map(element => element.split(''));
  let swapedCharacters = [];

  for (let idx = 0; idx < splitStr.length; idx++) {
    swapedCharacters.push(switchCharacters(splitStr[idx]).join(''));
  }

  return swapedCharacters.join(' ');
}

function switchCharacters(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
