// Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.

function sumCommon(a1, a2, a3) {
  let allArrays = [a1, a2, a3];
  let longestArr = allArrays.sort((a, b) => a.length - b.length)[allArrays.length - 1];

  let commonValues = longestArr.filter(num => a1.includes(num) && a2.includes(num) && a3.includes(num));

  if (commonValues.length === 0) return 0;

  return commonValues.reduce((accum, current) => accum + current);
}

sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]) //➞ 5
// 2 & 3 are common in all 3 arrays.

sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) //➞ 7
// 2, 2 & 3 are common in all 3 arrays.

sumCommon([1], [1], [2])// ➞ 0
