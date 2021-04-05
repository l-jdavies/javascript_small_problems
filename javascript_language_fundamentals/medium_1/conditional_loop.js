// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// The loop will get stuck in an infinite loop once `i % 3` is equal to `0`. This is because once `i` is logged to the console the value of `i` is not incremented. `i` is only incremented if `i` is not a multiple of 3.
//
// This can be fixed by incrementing `i` at each iteration:

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}

