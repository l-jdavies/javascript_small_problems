/* JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, sorting them in ascending order, but using a block you can sort the iterable in different ways.

Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

Examples
sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
Notes
The arrays can contain either positive or negative elements.
The arrays will only contain integers.
The arrays won't contain duplicate numbers.
This is a challenge to enhance your ability, using the sort built-in won't enhance your skills. */

// PEDAC
// 
// INPUT 
// array
//
// OUTPUT
// same array object
//
// PROBLEM
// return the input array object sorted in ascending order
//
// RULES
// array will only contain numbers
// numbers can be positive or negative
// array wont contain any duplicate values
// cant use the sort() function
//
// EXAMPLES
//
// DATA STRUCTURE
// reassign elements in the input array using index positions
//
// ALGORITHM
// function - perform sort
// create copy of input array
// iterate over input array by index
//    if the current element is greater than the element at the next index position, swap the elements
//
//  check if the arrCopy is the same as the input arr
//    if they are the same
//      return false
//    if different
//      return true
//
// create function to determine if two arrays have the same contents
//
//
function wasASortPerformed(arr) {
  let arrCopy = arr.slice();
  performSort(arr);

  return sameArrContents(arr, arrCopy) ? false : true

}

function performSort(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > arr[idx + 1]) {
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    }
  }
}

function sameArrContents(arr1, arr2) {
  for (let idx = 0; idx < arr1.length; idx++) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }
  return true;
}

function sortArray(arr) {
  while (wasASortPerformed(arr)) {

  }
  return arr;
}



sortArray([2, -5, 1, 4, 7, 8]) //➞[-5, 1, 2, 4, 7, 8]

sortArray([23, 15, 34, 17, -28]) //➞[-28, 15, 17, 23, 34]

sortArray([38, 57, 45, 18, 47, 39]) //➞[18, 38, 39, 45, 47, 57]
