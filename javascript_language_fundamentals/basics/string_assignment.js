/* Take a look at the following code:

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);
What does this code log to the console? Think about it for a moment before continuing.

If you said that this code logged:

Alice Bob

you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

What does this code log? Can you explain these results? */

// The code will log `Bob Bob` because Strings are primitive types and are therefore immutable. 
