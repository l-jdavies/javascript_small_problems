/* The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number. */


const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
};

function stringToNumbers(str) {
  let strArray = str.split('');
  let numbers = [];

  for (let idx = 0; idx < strArray.length; idx++) {
    numbers.push(DIGITS[strArray[idx]]);
  }

  return numbers;
}

function stringToInteger(str) {
  const numbers = stringToNumbers(str);
  let integer = 0;

  for (let idx = 0; idx < numbers.length; idx++) {
    integer = 10 * integer + numbers[idx];
  }
  return integer;
}

function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -stringToInteger(str.slice(1));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}


stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
