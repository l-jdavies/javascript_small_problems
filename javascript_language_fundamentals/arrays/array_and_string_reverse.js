/* In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

It should accept either a string or an array as an argument.
It should return a new string or array. */

function reverse(arg) {
  if (Array.isArray(arg)) {
    return reverseArr(arg);
  } else {
    return reverseStr(arg);
  }
}

function reverseArr(arr) {
  let reversedArr = [];

  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    reversedArr.push(arr[idx]);
  }
  return reversedArr;
}

function reverseStr(str) {
  return reverseArr(str.split('')).join('');
}
