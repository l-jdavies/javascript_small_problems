/* Mubashir needs your help to find out number of animals hidden in a given string txt.

You are provided with an array of animals given below:

animals = ["dog", "cat", "bat", "cock", "cow", "pig", 
"fox", "ant", "bird", "lion", "wolf", "deer", "bear", 
"frog", "hen", "mole", "duck", "goat"]
Rule : Return the maximum number of animal names. See below example:

txt="goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog" 
// Remaining string = "atcoe", 
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code", 
// no animal will be found during next time.
// count = 1 (wrong)*/

// PEDAC
// INPUT
// single string
//
// OUTPUT
// number
//
// PROBLEM
// return a count of how many animals (listed in the `animals` array) can be spelt using letters in the input string
// need to find the maximum number of animals that can be spelt
// each letter can only be used once
// RULES
//
// EXAMPLES
// countAnimals("goatcode") //➞ 2
// "dog","cat"

// countAnimals("cockdogwdufrbir")// ➞ 4
// "cow","duck","frog","bird"

// countAnimals("dogdogdogdogdog") //➞ 5
//
// edge cases
// will string always only contain letters, what about whitespaces?
// need to handle empty string?
// will input always be a string?
// how to handle invalid input?
// if no animals can be spelt - return 0?

// ALGORITHM



countAnimals("goatcode") //➞ 2
// "dog","cat"

countAnimals("cockdogwdufrbir")// ➞ 4
// "cow","duck","frog","bird"

countAnimals("dogdogdogdogdog") //➞ 5
