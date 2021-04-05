/* Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null
Notes
All wines will be different prices, so there is no confusion in the ordering. */

// PEDAC
//
// INPUT
// array containing one or more objects
//
// OUTPUT
// name of a wine (object value)
//
// PROBLEM
// find which wine is the second cheapest
// return name of second cheapest wine
//
// RULES
// all wines will have different prices
// if input array only contains one object - return the name of the wine in that object
// if input is an empty array, return null
//
// EXAMPLES
//
// DATA STRUCTURE
// push the values from all of the objects to a nested array
//
// ALGORITHM
// iterate over each object in the input array
// return the values from each object
// push the value array to `arrayOfValues`
//
// sort the `arrayOfValues` in ascending order using the second element of each sub array (this will be the price)
// if arrayOfValues has a length of 1 (i.e) theres only one bottle of wine
//    the selectedWine is the element at index position 0 from the subarray at index position 0
// otherwise the selectedWine is the subarray at arrayOfValues.length - 2, and is the element at index position 0 of that subarray
// return selectedWine

function getAllValues(arr) {
  let returnArr = [];
  arr.forEach(ele => returnArr.push(Object.values(ele)));

  return returnArr;
}

function chosenWine(arr) {
  if (arr.length === 0) return null;

  let arrayOfValues = getAllValues(arr);
  if (arrayOfValues.length === 1) return arrayOfValues[0][0];

  arrayOfValues = arrayOfValues.sort((subarr1, subarr2) => subarr1[1] - subarr2[1]);
  let selectedWine = arrayOfValues[arrayOfValues.length - 2][0];
  return selectedWine;
}

chosenWine([
  {name: "Wine A", price: 8.99},
  {name: "Wine 32", price: 13.99},
  {name: "Wine 9", price: 10.99}
]) //➞ "Wine 9"

chosenWine([{name: "Wine A", price: 8.99}]) //➞ "Wine A"

chosenWine([]) //➞ null
