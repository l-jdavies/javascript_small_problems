// Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// line 6 will evaluate to true so line 7 will log 'Hello' to the console
// line 10 will evaluate to false so line 11 will not be executed
// line 14 will evaluate to true
// line 18, myOtherString will evaluate to false but myArray will evaluate to true so the 'or' operator will return true
