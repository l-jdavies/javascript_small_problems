// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// It will log the same values that were assigned to array1 on line 3. Elements within an array are primitive and therefore cannot be mutated. The for loop on lines 10-13 reassigns elements within array1 but this doesn't affect array2.

