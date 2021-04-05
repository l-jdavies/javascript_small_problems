// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

const person = {name: 'Victor'};
const otherPerson = {name: 'Victor'};

console.log(person === otherPerson);    // false -- expected: true

// Code is current testing object equality, not the value of `name` 
//
// refactor:

const person = {name: 'Victor'};
const otherPerson = {name: 'Victor'};

console.log(person.name === otherPerson.name);
