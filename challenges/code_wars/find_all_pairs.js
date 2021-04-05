// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

// PEDAC
// PROBLEM
// count the number of pairs of numbers in an array
// each pair can only be counted once
// if the array is empty or only contains one value, return 0
//
// DATA STRUCTURE
// use an object in which the number from the array is stored as a key and the value is the number of times that number appears in the array
//
// ALGORITHM
// iterate over the array and count how many times each number appears in the array
// keys will be the number from the array, values will be the count
// return all values from the object and assign to variable `values`
// determine the sum of all numbers stored in the `values` array and assign to variable `sum`
// divide `sum` in 2
// This number will need to be rounded down
//
// SET numberCount = object to store number/count of times number is present in array
//
// WHILE idx < length of array
//  IF numberCount[array[idx]] is present in numberCount, increment by 1; if not, assign value of 1
//
// SET values = array of values stored in numberCount

// SET sum = sum all numbers in `values`
//
// divide sum by 2
// round number down and return


function duplicates(arr) {
  if (arr.length < 2) {
    return 0;
  }

  let numberCount = {};

  arr.forEach(num => {
    numberCount[num] = numberCount[num] ? numberCount[num] + 1 : 1;
  })

  let valArr = Object.values(numberCount);
  let sum = valArr.reduce((accum, current) => {
    accum += Math.floor(current / 2);
    return accum;
  }, 0);

  return sum;
}



console.log(duplicates([1, 2, 5, 6, 5, 2]));
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
console.log(duplicates([1000, 1000]));
console.log(duplicates([]));
console.log(duplicates([54]));
