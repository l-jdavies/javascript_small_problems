/* In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise. */

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

function signedIntegerToString(integer) {
  if (integer > 0) {
    return '+' + integerToString(integer);
  } else if (integer < 0) {
    return '-' + integerToString(-integer);
  } else {
    return integerToString(integer);
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
