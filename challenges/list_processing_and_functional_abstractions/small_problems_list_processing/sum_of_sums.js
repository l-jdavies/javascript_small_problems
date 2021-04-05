// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

function sumOfSums(arr) {
  let sums = [];

  arr.forEach(num => {
    let lastArrVal = sums[sums.length - 1] || 0;
    sums.push(num + lastArrVal);
  })

  return sums.reduce((accum, current) => accum + current);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
