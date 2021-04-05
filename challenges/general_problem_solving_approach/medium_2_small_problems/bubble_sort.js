// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// PEDAC
// INPUT
// array of elements
//
// OUTPUT
// same array objected, sorted
//
// PROBLEM
// sort an array by passing accessing each element of the array and determining if the value of the current element is less than the value of the previous element
// if true, the current element is swapped with the previous element
// this process is completed until no swaps are made
// at that point, return the sorted array
//
// RULES
// original array object must be returned
// assume array contains at least two elements
// elements in array could be strings or numbers
//
// EXAMPLES
// 
// DATA STRUCTURE
// access array elements by index
//
// ALGORITHM
// create a separate function that performs the sorting
// function will return the sorted array or false if no sorting occurred
// bubbleSort function will continue to invoke the sorting function until it returns false
// then return sorted array

function sameArrContent(arr1, arr2) {
  for (let idx = 0; idx < arr1.length; idx++) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }
  return true;
}

function performSort(arr) {
  let originalArr = arr.slice();

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > arr[idx + 1]) {
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    }
  }

  if (sameArrContent(originalArr, arr)) {
    return false;
  } else {
    return arr;
  }
}

function bubbleSort(arr) {
  while (performSort(arr)) {

  }
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
