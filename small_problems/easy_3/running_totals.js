// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

function runningTotal(arr) {
  const arrTotals = [];
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];
    arrTotals.push(sum);
  }

  return arrTotals;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
