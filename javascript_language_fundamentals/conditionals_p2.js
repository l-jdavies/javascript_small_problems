// One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}

// 1. condition1 and condition2 === true
// 2. condition1 === true, condition2 === false, else executed
// 3. condition1 === false, condition4 === true
// 4. condition1 === false, condition4 === false, condition5 === true
// 5. All conditions false - none of the branches executed
