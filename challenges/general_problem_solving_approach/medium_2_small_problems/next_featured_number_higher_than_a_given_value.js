/*A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. */

// PEDAC
// INPUT
// number
// OUTPUT
// number or error message
//
// PROBLEM
// find the first feature number greater than the input number
// a featured number is:
//    a multiple of 7
//    all of it digits only occur once
//  
// RULES
// highest possible number is 9876543201
//
// EXAMPLES
//
// DATA STRUCTURE
// use array to determine if number includes any digits more than once
//
// ALGORITHM
// function - is featured number
// if num % 7 !== 0
//    return false
// convert number to string and split into array of digits
// iterate over array, popping last element per iterating
// determine if the array includes the popped element
//    if true
//        return false
//    else
//        return true

function isAFeaturedNumber(num) {
  if (num % 7 !== 0 || num % 2 === 0) {
    return false;
  }

  let digitArray = String(num).split('');
  let currentDigit;

  while (digitArray.length > 0) {
    currentDigit = digitArray.pop();
    if (digitArray.includes(currentDigit)) {
      return false;
    }
  }
  return true;
}

function featured(num) {
  testNumber = num + 1;

  while (!isAFeaturedNumber(testNumber) && testNumber < 9876543201) {
    testNumber += 1;
  }

  return testNumber > 9876543201 ? "A featured number cannot be found." : testNumber
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543202); // Featured number cannot be found.
