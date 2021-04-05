/* A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1] */

// PEDAC
// INPUT 
// array of numbers
//
// OUTPUT
// number
//
// PROBLEM
// a boomerang is an array of three digits in which the first and last element is the same and the middle digit is different
// doesn't matter if the middle digit is greater or lesser than the other two digits
// need to count how many boomerangs there are in the input array
// the same number can be used in multiple boomerangs
//
// RULES
// boomerang array length must be three
// first and last digit must be the same
// middle digit must be different
// if all three numbers are the same, this is not a boomerang
// one number can be part of multiple boomerangs
//
// EXAMPLES
//
// DATA STRUCTURE
// split input array into sub arrays with a length of 3
//
// ALGORITHM
// create sub arrays
// need to iterate over the input substring and return subarrays containing elements starting at the current element and slicing three elements forward
// return 2d array containing subarrays
//
//
// return boolean - true if subarray is a boomerang
// input will be subarry containing three elements
// test if element 0 is equal to element at index 2 and not equal to element at index 1

function createSubArrays(arr) {
  let slicedArray = [];

  arr.forEach((_, idx) => {
    slicedArray.push(arr.slice(idx, (idx + 3)));
  })

  return slicedArray.filter(subArr => subArr.length === 3);
}

function isABoomerang(subarr) {
  return subarr[0] === subarr[2] && subarr[0] !== subarr[1];
}

function countBoomerangs(arr) {
  let boomerangArrays = createSubArrays(arr);

  return boomerangArrays.filter(isABoomerang).length;
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) //➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) //➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) //➞ 0
