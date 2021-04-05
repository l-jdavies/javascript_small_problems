// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
// 3
console.log(Object.keys(array).length);
// 4

array[-2] = 'Watermelon';
console.log(array.length);
// 3
console.log(Object.keys(array).length);
// 5

// The built in Array property, `length` only counts elements within an array, not objects
