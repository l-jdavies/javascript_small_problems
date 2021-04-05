/* A collection of spelling blocks has two letters per block, as shown in this list:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.
*/

// PEDAC
//
// INPUT
// string - upper or lower case
// assume only string characters
//
// OUTPUT
// boolean
//
// PROBLEM
// each letter of the alphabet is on a block, with two letters per block
// only one letter per block can be used
// each block can only be used once
// determine if the input string can be spelt using the blocks
// if it can, return true
// otherwise return false
// letters are case insensitive
//
// EXAMPLES
// console.log(isBlockWord('BATCH') === true);
// console.log(isBlockWord('BUTCH') === false);
// console.log(isBlockWord('jest') === true);
// console.log(isBlockWord('') === false);
// 
// DATA STRUCTURE
// store building blocks as nested arrays 
// each pair of letters per sub array
// keep input string as string
//
// ALGORITHM
// store the blocks as a nested array - `spellingBlocks`
// iterate over uppercase version of the input string (`str`)
// iterate by index
// for each character, determine if the character is present within a `spellingBlocks` sub array
//    - declare a variable (`characterIndex`)that will be used to store the index of a sub array containing the target letter, or null
//    - create helper function (findCharacterIndex)that determines if the character is present in `spellingBlocks`
//    - if character is present, `findCharacterIndex` will return a value which is the index of the subarray containing the character
//    - if character is not present `findCharacterIndex` will return null
//    - assign return value of `findCharacterIndex` to `characterIndex`
//
//    - if `characterIndex` is truthy, delete subarray from `spellingBlocks` (using `characterIndex` as index)
//    - if `characterIndex` is falsy, return false
//
//    - if iteration is completed without false being returned, then return true.
// 
// SET spellingBlocks = nested array of blocks (all letters uppercase)
// needs to be accessed by both functions

// START
// input to helper function will be single uppercase character
//
// WHILE (idx < spellingBlocks.length) 
//    IF (spellingBlocks[idx] includes input character) 
//      return idx;
// END
// 
// return null
// END
//
// START
// WHILE (idx < str.length) 
//  SET characterIndex = return value of findCharacterIndex(current character passed in as argument)
//  IF (characterIndex is truthy) 
//    DELETE spellingBlocks[characterIndex]
//  ELSE
//    RETURN false
// END
//
// return true
// END

let spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'],
['L', 'Y'], ['Z', 'M']];

function findCharacterIndex(letter) {
  for (let idx = 0; idx < spellingBlocks.length; idx++) {
    if (spellingBlocks[idx].includes(letter)) {
      return idx;
    }
  }
  return false;
}

function isBlockWord(str) {
  let characterIndex;

  for (let idx = 0; idx < str.length; idx++) {
    characterIndex = findCharacterIndex(str[idx].toUpperCase());

    if (characterIndex >= 0) {
      spellingBlocks[characterIndex] = [];
    } else {
      return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);
console.log(isBlockWord('') === false);

