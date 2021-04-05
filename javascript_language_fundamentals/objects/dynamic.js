// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

/* LS solution:
 * Was the result what you expected? The tricky parts here are the names of the properties, the variable name, and, of course, the fact that you can use an expression to create and access properties. The difference between lines 11 and 12, although they may look the same, is that on line 11, the value of prop2 (the string '456') is used as the key. This line does not log undefined because a property with the name of '456' and a value of '678' was added to myObject on line 9 using the prop2 variable. On line 12, when the 'prop2' (string literal) property of myObject is accessed, the value logged ('456') is different from the value assigned on line 3 ('234') because this property was reassigned on line 8. */
