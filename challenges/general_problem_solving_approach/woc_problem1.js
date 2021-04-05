// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

//If the phone number is less than 10 digits, assume that it is a bad number.
//If the phone number is 10 digits, assume that it is good.
//If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
//If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//If the phone number is more than 11 digits, assume that it is a bad number.
//For bad numbers, just a return a string of 10 0s.
// 
//
// PEDAC
// PROBLEM
// remove all non-numeric characters from the input string
// count number of numeric characters
// if 10 digits
//    return numeric characters as string
// if 11 digits and first digit is 1
//    remove 1 and return remaining 10 digits
// if 11 digits and first character is not 1
//    return string of 10 '0'
// if > 11 digits
//    return string of 10 '0'
// if < 10 digits
//    return string of 10 '0'
// 
// if input number is 'good' return string should be formated as US domestic number
// i.e. (808) 444-8888
//
// INPUT
// string of digits and other characters
// could be any length
//
// OUTPUT
// string on 10 digits formatted as domestic number if good number
// string of 10 '0' if bad number
//
// EXAMPLES
// console.log(cleanPhoneNumber(('1234567899'))) === '(123) 456-7899'
// console.log(cleanPhoneNumber('12222222222')) === '(222) 222-2222'
// console.log(cleanPhoneNumber('22222222222')) === '0000000000'
// console.log(cleanPhoneNumber('2222222222222')) === '0000000000'
// console.log(cleanPhoneNumber('1111')) === '0000000000'
// console.log(cleanPhoneNumber('(111)1111-111')) = '(111) 111-1111'
// console.log(cleanPhoneNumber('aa1111')) === '0000000000'
// console.log(cleanPhoneNumber('a11111aa11111')) === '(111) 111-1111'
//
// DATA STRUCTURE
// remove non-numeric characters from string
// return array of numeric string characters
//
// ALGORITHM
// match all numeric characters from input string
// return as array of numberic characters
// determine length of character array
// if length is 10
//    return the array, joined into a string
// if length is 11
//    determine if first character is '1'
//      true: remove first character from array, return remaining char as string
//      false: return string of zeros
//  if length is > 11 or < 10
//      return string of zeros
// 
// START
// SET numberArray = use match to return an array of decimal characters
// SET badNumber = string of 10 '0'
//
// IF numberArray.length === 10
//    return numberArray joined as a string
// ELSE IF numberArray.length > 11 OR < 10
//    return badNumber
// ELSE IF numberArray.length === 11
//    return goodOrBadEleven(numberArray)
// ELSE
//    return badNumber
// END
//
// START
// SET badNumber = string of 10 '0'
//
// IF arr[0] === '1'
//    return arr.slice(1) joined as string
// ELSE
//    return badNumber
// END

function cleanPhoneNumber(str) {
  const BAD_NUMBER = '0000000000';
  let numberArray = str.match(/\d/g) || [];

  if (numberArray.length < 10 || numberArray > 11) {
    return BAD_NUMBER;
  } else if (numberArray.length === 10) {
    return formatPhoneNumber(numberArray.join(''));
  } else if (numberArray.length === 11) {
    return goodOrBadEleven(numberArray);
  } else {
    return BAD_NUMBER;
  }
}

function goodOrBadEleven(arr) {
  const BAD_NUMBER = '0000000000';

  if (arr[0] === '1') {
    return formatPhoneNumber(arr.slice(1).join(''));
  } else {
    return BAD_NUMBER;
  }
}

function formatPhoneNumber(str) {
  return `(${str.slice(0, 3)}) ${str.slice(3, 7)}-${str.slice(7)}`;
}

console.log(cleanPhoneNumber('1234567899') === '(123) 4567-899')
console.log(cleanPhoneNumber('12222222222') === '(222) 2222-222')
console.log(cleanPhoneNumber('22222222222') === '0000000000')
console.log(cleanPhoneNumber('2222222222222') === '0000000000')
console.log(cleanPhoneNumber('1111') === '0000000000')
console.log(cleanPhoneNumber('(111)1111-111') === '(111) 1111-111')
console.log(cleanPhoneNumber('aa1111') === '0000000000')
console.log(cleanPhoneNumber('a11111aa11111') === '(111) 1111-111')
console.log(cleanPhoneNumber('') === '0000000000')
console.log(cleanPhoneNumber('  a11111aa11  111') === '(111) 1111-111')


