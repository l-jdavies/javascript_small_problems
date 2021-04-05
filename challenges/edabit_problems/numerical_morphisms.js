/* A number num, that elevated to the power of another number k "ends" with the same num, it's automorphic.
 * 5² = 25
// It's automorphic because "25" ends with "5"

5³  = 125
// It's automorphic because "125" ends with "5"

76⁴ = 33362176
// It's automorphic because "33362176" ends with "76"
//
// A number can have various powers that make it automorphic (i.e. look at number 5 in the above example). In this challenge, you have to verify if the given number is automorphic for each power from 2 up to 10.

Given a non-negative integer num, implement a function that returns the string:

"Polymorphic" if num is automorphic for every power from 2 up to 10.
"Quadrimorphic" if num is automorphic for only four powers (any from 2 up to 10).
"Dimorphic" if num is automorphic for only two powers (any from 2 up to 10).
"Enamorphic" if num is automorphic for only one power (any from 2 up to 10).
"Amorphic" if num is not automorphic for for any powers from 2 up to 10.
*/

// PEDAC
// INPUT 
// number
//
// OUTPUT
// string
//
// PROBLEM
// determine the power of the input number from one to 10
// determine if the end of the calculated number is the same as the input number
// count how many numbers are automorphic
// return a string based on the result
//
// RULES
// input will be non negative number
//
// EXAMPLES
//
// DATA STRUCTURE
// use strings to determine if number ends with input number
// store all powers in an array
// store all automorphic numbers in an array
//
// ALGORITHM
// loop through 2 to 10 (power)
// calculate inputNum ** power
// convert result to string
// if result ends in the same digits as the input number
//    add to `automorphicArray`
//
//  count length of automorphicArray
//  if length is 9
//    return polymorphic
//  if length is 4
//    return quadrimorphic
//  if length is 2
//      return dimorphic
//  if length is 1
//      return enamorphic
//  if length is 0
//      return amorphic

function generateAutomorphicNumbers(input) {
  let arr = [];
  let numberString = input.toString(10);

  for (let power = 2n; power <= 10; power++) {
    let powerResult = (input ** power).toString(10);

    if (powerResult.endsWith(numberString)) {
      arr.push(powerResult);
    }
  }
  return arr;
}
//

function powerMorphic(num) {
  let automorphicNums = generateAutomorphicNumbers(num);
  let count = automorphicNums.length;

  if (count === 9) {
    return 'Polymorphic';
  } else if (count === 4) {
    return 'Quadrimorphic'
  } else if (count === 2) {
    return 'Dimorphic'
  } else if (count === 1) {
    return 'Enamorphic'
  } else {
    return 'Amorphic'
  }
}
powerMorphic(5) //➞ "Polymorphic"
// From 2 up to 10, every power of 5 ends with 5

powerMorphic(21) //➞ "Enamorphic"
// 21⁶ = 85766121

powerMorphic(7) //➞ "Dimorphic"
// 7⁵ = 716807
// 7⁹ = 40353607

powerMorphic(4) //➞ "Quadrimorphic"
// 4³ = 64
// 4⁵ = 1024
// 4⁷ = 16384
// 4⁹ = 262144

powerMorphic(10) //➞ "Amorphic"
// There are no powers that make it automorphic

powerMorphic(0)
powerMorphic(105)

