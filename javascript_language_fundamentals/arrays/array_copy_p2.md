In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

```JavaScript
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice(); // slice function returns new array containing original values

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
```

```JavaScript
let myArray = [1, 2, 3, 4];
const myOtherArray;

for (let idx = 0; idx < myArray.length; idx++) {
  myOtherArray.push(myArray[idx]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
```
