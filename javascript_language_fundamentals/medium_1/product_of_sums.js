// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// the variable `sum` in the `total` function should be assigned a value of `0` once declared. Currently `sum` initially has a value of `undefined` and the function is performing an addition operation between `undefined` and a number, which will evaluate to `NaN`.
//
// Also, the `total` function needs an explicit `return` statement on the last line. Currently, involing the `total` function will return `undefined`.
