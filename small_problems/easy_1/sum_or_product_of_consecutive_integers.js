/* Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

let readSync = require('readline-sync');
console.log('Enter an integer greater than 0: ');
let integer = readSync.prompt();
console.log('Enter "s" to compute the sum or "p" to compute the product.');
let process = readSync.prompt();

if (process === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${productIntegers()}`);
} else if (process === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sumIntegers()}`);
} else {
  console.log('Invalid input!');
}

function productIntegers() {
  let sum = 1;
  for (let count = 2; count <= integer; count++) {
    sum *= count;
  }
  return sum;
}

function sumIntegers() {
  let sum = 1;
  for (let count = 2; count <= integer; count++) {
    sum += count;
  }
  return sum;
}
