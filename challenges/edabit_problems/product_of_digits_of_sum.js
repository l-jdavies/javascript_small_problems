/* Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
 */

function sumDigProd(...nums) {
  let sum = nums.reduce((accum, current) => accum + current);
  let digits = sum.toString().split('').map(digit => Number(digit));
  let reduced = sum;

  while (String(reduced).length > 1) {
    reduced = digits.reduce((accum, current) => accum * current);
    digits = reduced.toString().split('').map(digit => Number(digit));
  }
  return reduced;
}

sumDigProd(16, 28) //➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) //➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) //➞ 2
