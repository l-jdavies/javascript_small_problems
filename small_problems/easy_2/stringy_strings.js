/* Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer. */

function stringy(num) {
  let stringBits = '1';

  while (stringBits.length < num) {
    if (stringBits[stringBits.length - 1] === '1') {
      stringBits += '0';
    } else {
      stringBits += '1';
    }
  }
  return stringBits;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
