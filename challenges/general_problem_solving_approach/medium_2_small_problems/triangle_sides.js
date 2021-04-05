/* A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'. */


// PEDAC
// INPUT
// three numbers
//
// OUTPUT
// string
//
// PROBLEM
// rules for a valid triangle:
// sum of two smallest numbers must be greater than the largest number
// all numbers must be greater than 0
//
// if valid triangle return triangle type:
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
//
// EXAMPLES
//
// DATA STRUCTURE
// store numbers in array to determine the largest number
//
// ALGORITHM
// determine if valid triangle
// store input numbers in an array
// return false if any element is less than 1
// sort the array in ascending order
// pop the last element
// determine if the sum of the previous elements is greater than popped element

function isValidTriangle(num1, num2, num3) {
  let arr = [num1, num2, num3].sort((a, b) => a - b);
  if (arr.some(num => num < 1)) return false;

  let largestNum = arr.pop();
  let sumOfSmallest = arr.reduce((accum, current) => accum + current);

  if (sumOfSmallest < largestNum) {
    return false;
  }

  return true;
}


function triangle(num1, num2, num3) {
  if (!isValidTriangle(num1, num2, num3)) {
    return 'invalid';
  }

  if ((num1 === num2) && (num1 === num3) && (num3 === num2)) {
    return 'equilateral';
  } else if (num1 === num2 || num1 === num3 || num3 === num2) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


