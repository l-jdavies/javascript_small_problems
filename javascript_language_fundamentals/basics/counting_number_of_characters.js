// In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase. Go over the documentation for String to find an appropriate method to use.

let input = require('readline-sync');

console.log("Enter a phrase: ");
let str = input.prompt();

console.log(`There are ${str.length} characters in "${str}".`);
