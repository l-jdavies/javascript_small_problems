/* In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array. */

function unshift(arr, ...args) {
  for (let idx = 0; idx < args.length; idx++) {
    arr.splice(idx, 0, args[idx]);
  }

  return arr.length;
}

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let firstElement = arr[0];

  for (let idx = 0; idx < arr.length - 1; idx++) {
    arr[idx] = arr[idx + 1];
  }

  arr.length = arr.length - 1;
  return firstElement;
}
