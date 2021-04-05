/* In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number. */

const NUMBER_STRINGS = '0123456789'.split('');

function integerToString(integer) {
  let numString = '';

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);

    numString = NUMBER_STRINGS[remainder] + numString;
  } while (integer > 0);

  return numString;
}


integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
