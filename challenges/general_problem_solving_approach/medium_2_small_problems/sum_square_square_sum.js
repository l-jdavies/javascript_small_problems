// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

function arrayOfIntegers(num) {
  let arr = [];

  for (let number = 0; number <= num; number++) {
    arr.push(number);
  }

  return arr;
}

function sumSquareDifference(num) {
  let allPositiveIntegers = arrayOfIntegers(num);
  let squareOfSum = allPositiveIntegers.reduce((accum, current) => accum + current) ** 2;
  let sumOfSquares = allPositiveIntegers.reduce((accum, current) => {
    return accum + (current ** 2);
  }, 0)

  return squareOfSum - sumOfSquares;
}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
