// Write a function named myOwnEvery that's similar to the Array.prototype.every method. It should take an array and a function as arguments, and return true if every element passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx++) {
    if (!func(array[idx])) {
      return false;
    }
  }
  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
