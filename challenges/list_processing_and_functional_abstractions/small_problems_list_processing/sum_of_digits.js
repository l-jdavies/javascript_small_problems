// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

function sum(num) {
  let arrDigits = String(num).split('').map(str => Number(str));
  return arrDigits.reduce((accum, current) => accum + current);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
