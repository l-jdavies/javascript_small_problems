/* Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25, 36, 49).

For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.

Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.

Examples
squares(3, 9) ➞ 2

squares(17, 24) ➞ 0

squares(1, 1000000000) ➞ 31622
Notes
Your solution must solve each problem in 1 second or less. */

// from first input num to second input number determine how many numbers are square numbers
// count how many numbers are square numbers and return the count 
//
// use array to store square numbers
//
// declare currentNum variable and assign num1 as value
// loop until currentNum is greater than num2
// pass currentNum into helper function which returns true if currentNum is a square
// if true, push currentNum to the squareNumArr
// increment currentNum by 1
// return length of squareNumArr
//
// helper function - isASquare
// calculate square root of argument
// multiply it by itself
// if return value equals the argument and the square root is a whole number
// return true

function isASquare(num) {
  let squareRoot = Math.sqrt(num);
  let multiply = squareRoot * squareRoot;

  return multiply === num && Number.isInteger(squareRoot);
}


function squares(num1, num2) {
  let squareNumArr = [];

  for (let currentNum = num1; currentNum <= num2; currentNum++) {
    if (isASquare(currentNum)) {
      squareNumArr.push(currentNum);
    }
  }
  return squareNumArr.length;
}

squares(3, 9) //➞ 2

squares(17, 24) //➞ 0

squares(1, 1000000000) //➞ 31622
