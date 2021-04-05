// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//
// Return an empty array if the object is empty.

function toArray(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

toArray({a: 1, b: 2}) //➞ [["a", 1], ["b", 2]]

toArray({shrimp: 15, tots: 12}) //➞ [["shrimp", 15], ["tots", 12]]

toArray({}) //➞ []
