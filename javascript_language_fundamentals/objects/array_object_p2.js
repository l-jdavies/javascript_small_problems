// A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// It will return 10 because myArray[-2] will return the value associated with the key '-2' which is 5. The same applies to an index of -1. The array.length property will return 0 so the for loop will terminate once i evaluates to 0.
