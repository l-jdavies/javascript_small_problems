// What will the following code snippets log?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// Logs `The total value is 15`


function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// Logs `The total value is NaN`. Due to hoisting `counter` and `rate` will both have a value of `undefined` when `String(counter * rate)` is called. The use of the `*` operator will cause an attempted coercion of `undefined` into a number before multiplication is performed. As `undefined` cannot be coerced into a Number, `NaN` will be returned by the `(counter * rate)` operation. This will be converted into a String by the `String` function.

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Logs `The total value is NaN`. This is because the value of the variable `counter` has been reassigned to the function `counter`. This has occurred because `counter` was declared with `var`.

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Logs `The total value is 15`. In this snippet the variable `counter` was declared with `let`, which prevents a function with the same name as the variable from being declared.
