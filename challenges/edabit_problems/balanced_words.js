/* We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.

Examples
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
Notes
All words will be lowercase, and have a minimum of 2 characters.
Palindromic words will always be balanced. */

// PEDAC
// PROBLEM
// split input word into two equal sized halves
// if word has an odd length the middle character is ignored
// assign a value to each character in each word half
// return true if the sum of the values of each character in each half are equal
// otherwise return false
//
// RULES
// input will always be a lowercase string
// input will have a minimum of 2 characters
// EXAMPLES
//
// DATA STRUCTURE
// store each word half in a variable
// store value of each character in two arrays
// store alphabet in array
//
// ALGORITHM
// function firstWordHalf
// slice the word from index position 0 to the str length / 2, rounded down
// return the slice
//
// function secondWordHalf
// slice the word from index position (str.length / 2 - rounded down) to end of the string
// return the slice
//
// function wordValue(str)
// assign lowercase alphabet to a constant
// declare an empty array (valueArr)
// iterate over each character in the input string
// for each character find the index of the character in the alphabet array
// add one to the index and add it to valueArr
// return valueArr

function wordValue(str) {
  const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let valueArr = [];

  for (let idx = 0; idx < str.length; idx++) {
    valueArr.push(ALPHABET_ARRAY.indexOf(str[idx]) + 1);
  }

  return valueArr;
}

function firstWordHalf(str) {
  return str.slice(0, Math.floor(str.length / 2));
}

function secondWordHalf(str) {
  if (str.length % 2 === 0) {
    return str.slice(Math.floor(str.length / 2));
  } else {
    return str.slice(Math.ceil(str.length / 2));
  }
}

function balanced(str) {

  let firstStr = firstWordHalf(str);
  let secondStr = secondWordHalf(str);

  valueFirstHalf = wordValue(firstStr).reduce((accum, current) => accum + current);
  valueSecondHalf = wordValue(secondStr).reduce((accum, current) => accum + current);

  return valueFirstHalf === valueSecondHalf;
}


balanced("zips") //➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") //➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
