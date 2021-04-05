Read through the code shown below. What does it log to the console at lines 6 and 10?

```JavaScript
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
```

It will log `[1, 2, 3]` on both lines 9 and 13. `myOtherArray` is assigned to the value of `myArray`. On line 7 the `pop` method is invoked on `myArray` and this method is destructive. Given `myArray` and `myOtherArray` are the same objects, both variables reference an array containing the elements `1, 2, 3` when `console.log` is invoked on lines 8 and 9.

On line 11 `myArray` is reassigned to a new value. This means `myArray` and `myOtherArray` no longer reference the same object. The array object referenced by `myOtherArray` has not changed; therefore on line 13 `myOtherArray` logs the same values as it did on line 9.
