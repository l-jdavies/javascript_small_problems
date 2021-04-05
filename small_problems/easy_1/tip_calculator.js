/* Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers. */

let readSync = require('readline-sync');

console.log('What is the bill: ');
let bill = parseInt(readSync.prompt(), 10);
console.log('What is the tip percentage: ');
let tip = parseInt(readSync.prompt(), 10);

let tipAmount = (bill / 100) * tip;
let billTotal = tipAmount + bill;

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${billTotal}`);

