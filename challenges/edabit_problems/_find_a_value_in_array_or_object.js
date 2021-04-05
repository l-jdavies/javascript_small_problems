/* According to the lodash documentation, _.find Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Arguments
collection (Array or Object): The collection to inspect.
[predicate=_.identity] function, object, array or string
[fromIndex=0] (number): The index to search from.
Recreate lodash's _.find using vanilla JavaScript.

The difference between lodash _.find and the JavaScript find method is that the JavaScript method can only be applied to arrays and can only receive a callback function like so: array.find(d => d.isTheBest). The lodash find method can be called on both arrays and objects and can receive a function, an object, or an array which it uses to perform the search.

Like so:

_.find(array, {isTheBest: true})

_.find(array, "isBest")

_.find(array, ["isBest", true])
Examples
var users = [
  { "user": "barney",  "age": 36, "active": true },
  { "user": "fred",    "age": 40, "active": false },
  { "user": "pebbles", "age": 1,  "active": true }
]

find(users, function(o) { return o.age < 40; }) ➞ object for "barney"

find(users, { "age": 1, "active": true }) ➞ object for "pebbles"

find(users, ["active", false]) ➞ object for "fred"

find(users, "active") ➞ object for "barney"
Notes
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here. */

// PEDAC
// INPUT
// two arguments - first is the collection to iterate over
// second could by a function, object or an array
//
// OUTPUT
// first element in the collection for which the second argument returns truthy for
//
// PROBLEM
// if the predicate is a function, return the first value in the input array for which the function returns a truthy value
// if the predicate is an object, return the first object in the input array that matches the key/value pairs from the predicate
// if the predicate is an array, the first element is the key and the second element is the value. Return the first object in the input array that matches this key/value pair
// if predicate is a string, the string is a key. Return first object for which the values associated with the key is truthy
//
// RULES
// need to account for four types of predicates
//
// EXAMPLES
//
// DATA STRUCTURE
// use arrays to store keys if predicate is an object
//
// ALGORITHM
// create different helper functions to handle different predicates
//
// functionPredicate
// assign predicate function to a variable
// iterate over each element in arr by index
// pass each element into the function
// if the return value of the function is truthy
//    return the element

// arrayPredicate
// first element is a key and the second is the value
// split the predicate into nested array, with two elements per subarray (key, value)
// filter the input arr to only return objects for which all of the nested array key/value pairs match the object
// return the first element from the filter result
//
// objectPredicate
// similar to arrayPredicate
// assign keys from object to array
// filter the input array to return objects for which all elements in the key array have matching values in the array object and predicate object
//
// stringPredicate
// filter array to return objects for which the value associated with the string as a key is truthy

function stringPredicate(arr, predicate) {
  return arr.filter(obj => !!obj[predicate])[0];
}

function objectPredicate(arr, predicate) {
  let predicateObjKeys = Object.keys(predicate);

  return arr.filter(obj => predicateObjKeys.every(key => obj[key] === predicate[key]))[0];
}


function arrayPredicate(arr, predicate) {
  let splitArr = splitIntoSubArrays(predicate);

  return arr.filter(obj => splitArr.every(subarr => obj[subarr[0]] === subarr[1]))[0];
}

function splitIntoSubArrays(arr) {
  let split = [];

  for (let start = 0, end = 2; end <= arr.length; start += 2, end += 2) {
    split.push(arr.slice(start, end));
  }
  return split;
}

function functionPredicate(arr, predicate) {
  let predicateFunction = predicate;

  for (let idx = 0; idx < arr.length; idx++) {
    if (predicateFunction(arr[idx])) {
      return arr[idx];
    }
  }
}

function find(arr, predicate) {
  if (typeof predicate === 'function') {
    return functionPredicate(arr, predicate);
  } else if (Array.isArray(predicate)) {
    return arrayPredicate(arr, predicate);
  } else if (typeof predicate === 'object') {
    return objectPredicate(arr, predicate);
  } else {
    return stringPredicate(arr, predicate);
  }
}



let users = [
  {"user": "barney", "age": 36, "active": true},
  {"user": "fred", "age": 40, "active": false},
  {"user": "pebbles", "age": 1, "active": true}
]

find(users, function (o) {return o.age < 40;}) //➞ object for "barney"

find(users, {"age": 1, "active": true}) //➞ object for "pebbles"

find(users, ["active", false]) //➞ object for "fred"

find(users, "active") //➞ object for "barney"
