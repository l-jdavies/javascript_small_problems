// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

function halvsies(arr) {
  let splitArr = [[], []];
  let idx = 0;

  if (arr.length % 2 === 0) {
    idx = arr.length / 2;
  } else {
    idx = arr.length / 2 + 1;
  }

  splitArr[0].push(arr.slice(0, idx));
  splitArr[1].push(arr.slice(idx));

  return splitArr;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
