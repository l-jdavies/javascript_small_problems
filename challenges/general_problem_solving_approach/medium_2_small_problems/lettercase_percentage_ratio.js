// Write a function that takes a string, and returns an object containing the following three properties:

//the percentage of characters in the string that are lowercase letters
//the percentage of characters that are uppercase letters
//the percentage of characters that are neither
//You may assume that the string will always contain at least one character.

// PEDAC
// INPUT
// single string
//
// OUTPUT
// object
// values are strings
//
// PROBLEM
// parse the input string and determine:
// number of lowercase characters
// number of uppercase characters
// number of characters that are not alphabet 
// return an object where the value is the percentage of characters in string that belong to each category
//
// EXAMPLES
// 
// DATA STRUCTURE
// object
//
// ALGORITHM
// determine full length of the string
// declare variables to store  count of uppercaseCharacters, lowercaseCharacters, otherCharacters
// iterate over the string by character
// determine if character is uppercase, lowercase or neither
// increment the appropriate variable
// calculate the percentage of characters in the string represented by each variable value
// convert result to a string an store in the object
// return the object

function letterPercentages(str) {
  let upperCaseCharacters = 0;
  let lowerCaseCharacters = 0;
  let otherCharacters = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx].match(/[a-z]/)) {
      lowerCaseCharacters += 1;
    } else if (str[idx].match(/[A-Z]/)) {
      upperCaseCharacters += 1;
    } else {
      otherCharacters += 1;
    }
  }

  return {
    lowercase: String(((lowerCaseCharacters / str.length) * 100).toFixed(2)),
    uppercase: String(((upperCaseCharacters / str.length) * 100).toFixed(2)),
    neither: String(((otherCharacters / str.length) * 100).toFixed(2)),
  }
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
