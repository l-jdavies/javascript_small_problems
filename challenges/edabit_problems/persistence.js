/* The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative. */

// PEDAC
// PROBLEM
// create two functions - additivePersistence and multiplicativePersistence
// return a count of how many times all digits in the input number have to be summed/ multiplied
// in order for n to be a single digit number
//
// RULES
// the input number will never be negative
// it input number is already a single digit, return 0
//
// EXAMPLES
//
// DATA STRUCTURE
// will coerces input number into a string then split into array of digits
//
// ALGORITHM
// coerce input number into string
// split into array of digits (digits)
// coerce all digits into numbers
//
// declare a count variable with an initial value of 0
// declare a reducedValue variable with a value of 0
// while the reducedValue 
// while the length of reducedValue coerced into a string is greater than 1
// keep reassigning reducedValue to the value of the sum or multiplication of all digits in digits array
// for each time reduce is invoked, increment count by 1
// reassign digits to reducedValue coerced into a string, split into digits and coerced into numbers
//
// return count

function additivePersistence(num) {
  let digits = String(num).split('').map(digit => Number(digit));
  let count = 0;
  let reducedValue = num;

  while (String(reducedValue).length > 1) {
    reducedValue = digits.reduce((accum, current) => accum + current);
    digits = String(reducedValue).split('').map(digit => Number(digit));
    count += 1;
  }
  return count;
}

function multiplicativePersistence(num) {
  let digits = String(num).split('').map(digit => Number(digit));
  let count = 0;
  let reducedValue = num;

  while (String(reducedValue).length > 1) {
    reducedValue = digits.reduce((accum, current) => accum * current);
    digits = String(reducedValue).split('').map(digit => Number(digit));
    count += 1;
  }
  return count;
}


additivePersistence(1679583) //➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) //➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) //➞ 0
// Because 6 is already a single-digit integer.

multiplicativePersistence(77)// ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) //➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) //➞ 0
// Because 4 is already a single-digit integer.
