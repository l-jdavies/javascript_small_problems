/* Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

Not all numbers are happy. If we started with 11, the sequence would be:

11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.

Given a positive whole number, you have to determine whether that number is happy or unhappy.

Examples
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false
Notes
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
The only numbers passed to your function will be positive whole numbers. */

// PEDAC
// INPUT
// number
//
// OUTPUT
// boolean 
//
// PROBLEM
// a happy number is a when the sum of each digit in the number squared eventually reaches the number 1
// a unhappy number will have 4 in the sequence
// return true if the input number is a happy number
// otherwise return false
//
// RULES
// if the sum of squares of digits reaches 1, return true
// if it reaches 4, return false
// input will be positive whole number
//
// EXAMPLES
// will input number always have two digits?
// will input always be single argument
// number will be postive - greater than 0
// no fractions
// no special values = NaN or Infinity
// do i need to validate input
// how to handle invalid input
//
// DATA STRUCTURE
// split number into array of digits
//
// ALGORTIHM
// helper function - split number into array of digits
// coerce number into string
// split the string
// map the array to coerces all string digits into numbers 
// return array of number digits

// main function
// assign return value of arrayOfDigits to variable digits
// declare variable sumOfDigits
// until sumOfDigits equals 1 or 4
//    assign sumOfDigits to the return value of the sum of all digits squared
//    reassign digits to the return value of arrayOfDigits with sumOfDigits passed in as an argument
// 
// determine if sumOfDigits equals 1
//    if true, return true
//    if false, return false

function arrayOfDigits(num) {
  return num.toString().split('').map(digit => Number(digit));
}

function happy(num) {
  let digits = arrayOfDigits(num);
  let sumOfDigits = 0;

  while (sumOfDigits !== 1 && sumOfDigits !== 4) {
    sumOfDigits = digits.reduce((accum, current) => accum + (current ** 2), 0);
    digits = arrayOfDigits(sumOfDigits);
  }

  return sumOfDigits === 1 ? true : false;
}

happy(203) //➞ true

happy(11) //➞ false

happy(107) //➞ false
