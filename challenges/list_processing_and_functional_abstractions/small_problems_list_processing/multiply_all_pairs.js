// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function findLongestArr(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else if (arr2.length > arr1.length) {
    return arr2;
  } else {
    return arr1;
  }
}

function findShortestArr(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return arr1;
  } else if (arr2.length < arr1.length) {
    return arr2;
  } else {
    return arr2;
  }
}


function multiplyAllPairs(arr1, arr2) {
  let longestArr = findLongestArr(arr1, arr2);
  let shortestArr = findShortestArr(arr1, arr2);
  let multiples = [];

  longestArr.forEach(num => {
    shortestArr.forEach(shortestNum => multiples.push(num * shortestNum));
  })

  return multiples.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
