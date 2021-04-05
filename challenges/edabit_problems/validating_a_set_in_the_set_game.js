/* In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
Examples
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property. */

// PEDAC
// INPUT
// array of three objects
//
// OUTPUT
// boolean
//
// PROBLEM
// each object contains the same set of keys
// a object is classed as a set if the values associated with the keys are the same or completely different for all four categories
//
// RULES
//
// EXAMPLES
//
// DATA STRUCTURE
// 
// ALGORITHM
// create helper function for each category
//
// helper isColourSet
// return true if all the same:
// (obj[0].color equal obj[1].color) and (obj[0].color equals obj[2].color) and (obj[1].color equals obj[2].color)

//
// return true if all different
// (obj[0].color doesnt equal obj[1].color) and (obj[0].color doesnt equals obj[2].color) and (obj[1].color doesnt equals obj[2].color)
//
// create same helper function for all categories

function isCategorySet(arr, category) {
  let allSame = (arr[0][category] === arr[1][category]) && (arr[0][category] === arr[2][category]) && (arr[1][category] === arr[2][category]);
  let allDifferent = (arr[0][category] !== arr[1][category]) && (arr[0][category] !== arr[2][category]) && (arr[1][category] !== arr[2][category]);

  return allSame || allDifferent;
}

function isSet(arr) {
  return isCategorySet(arr, 'color') && isCategorySet(arr, 'number') && isCategorySet(arr, 'shade') && isCategorySet(arr, 'shape');
}

isSet([
  {color: "green", number: 1, shade: "empty", shape: "squiggle"},
  {color: "green", number: 2, shade: "empty", shape: "diamond"},
  {color: "green", number: 3, shade: "empty", shape: "oval"}
]) //➞ true

isSet([
  {color: "purple", number: 1, shade: "full", shape: "oval"},
  {color: "green", number: 1, shade: "full", shape: "oval"},
  {color: "red", number: 1, shade: "full", shape: "oval"}
]) //➞ true

isSet([
  {color: "purple", number: 3, shade: "full", shape: "oval"},
  {color: "green", number: 1, shade: "full", shape: "oval"},
  {color: "red", number: 3, shade: "full", shape: "oval"}
])// ➞ false

