/* The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string. */

// PEDAC
// INPUT: number as a string
// may contain non-numeric characters, if so ignore
// OUTPUT: boolean
// true if number is valid per Luhn formula
// false if not valid
//
// iterate over numeric characters in string from left to right
// double every second digit
//    if result >= 10
//        substract 9 from the result
//  sum the doubled digits
//  if sum of digits modulo 10 equals 0
//      number is valid, return true
//  else
//      number is not valid, return false
//
//  EXAMPLES
//  console.log(validLuhn('1111') === false);
//  console.log(validLuhn('8763') === true);
//  console.log(validLuhn('2323 2005 7766 3554') === true);
//  console.log(validLuhn('') === false);
//  console.log(validLuhn('asdcvfg') === false);
//  console.log(validLuhn('8fsfds76sdfd3') === true);
//  console.log(validLuhn('   2323 2005 7766 3554!! ') === true);
//
//  DATA STRUCTURE
//  split input string into array of numeric characters
//
//  ALGORITHM
//  match all numeric characters in input string
//  return value will be an array - assign to numberArray variable
//  if result of matching numeric characters is null, assign empty array to numberArray
//  if numberArray length === 0
//      return false
//  reverse the numberArray
//  map numberArray, passing in the current element and index of current element
//  if index is odd
//      double the digit
//  else
//      return the digit
//
//  
//  reduce the numberArray
//  if reduce value % 10 === 0
//      return true
//  else
//      return false
//
// START
// SET numberArray = all numeric characters OR []
// IF numberArray length === 0 THEN return false
//
// reverse numberArray
// convert all numeric strings into numbers
//
// iterate over numberArray (num, idx)
// IF idx is odd
//    return doubleDigit(num)
// ELSE
//    return num
// 
// SET sumArr = sum all values in array
// 
// IF sumArr modulo 10 === 0
//    return true
// ELSE
//    return false

function validLuhn(str) {
  let numberArray = str.match(/\d/g) || [];

  if (numberArray.length === 0) {
    return false;
  }

  numberArray = numberArray.reverse().map(num => Number(num));
  doubledArray = doubleOddDigits(numberArray);

  let doubledArraySum = doubledArray.reduce((accum, current) => accum + current);

  if (doubledArraySum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function doubleOddDigits(arr) {
  let doubled = arr.map((num, idx) => {
    if (idx % 2 === 0) {
      return num;
    } else {
      return num * 2;
    }
  });

  return doubled.map(num => {
    if (num >= 10) {
      return num - 9;
    } else {
      return num;
    }
  });
}


console.log(validLuhn('1111') === false);
console.log(validLuhn('8763') === true);
console.log(validLuhn('2323 2005 7766 3554') === true);
console.log(validLuhn('') === false);
console.log(validLuhn('asdcvfg') === false);
console.log(validLuhn('8fsfds76sdfd3') === true);
console.log(validLuhn('   2323 2005 7766 3554!! ') === true);


