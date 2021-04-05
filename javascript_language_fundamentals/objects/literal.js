// Identify the bug in the following code. Don't run the code until after you've tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a]; // this should be myObject['a']
myObject.a;
