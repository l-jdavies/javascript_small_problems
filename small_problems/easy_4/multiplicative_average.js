// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

function showMultiplicativeAverage(arr) {
  const reducer = (accumulator, currentVal) => accumulator * currentVal;
  let sum = arr.reduce(reducer);
  let average = sum / arr.length;

  return average.toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
