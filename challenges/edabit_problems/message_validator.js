// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

/* In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true. */

/*Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true */

// PEDAC
// INPUT 
// string 
//
// OUTPUT
// boolean
//
// PROBLEM
// input string will contain number characters followed by letters
// split the string into numbers and characters
// if the number proceeding the characters equals the length of the characters, return true 
// otherwise return false
// if the input string is empty, return true
//
// RULES
// input string will only contain numbers and letters 
// if string is empty return true
//
// EXAMPLES
//
// DATA STRUCTURE
// use arrays to store split string
//
// ALGORITHM
// if input string is empty, return true
// split the string using regex so a number preceeding letters is stored as a separate element
// iterate over the elements to access each `numWithCharacters`
// split the element into digits and characters
// 'sum' the digits using string concatenation then transform into a number
// determine if the length of the characters equals the number
// return boolean
//
// IF input string is empty - return true
//
// SET numWithCharacters = split string into numbers proceeding alphabet characters
//
// ITERATE over numWithCharacters using for loop
// SET numbers = match the digit characters from current element string
//              sum the digits to get full number characters
//              transform into number
// SET letters = match all alphabet characters
// IF number !== length of letters array
//    return false
// END
//
// return true

function isAValidMessage(str) {
  if (str.length === 0) return true;
  let numWithCharacters = str.split(/([0-9]+[a-z]+)/gi).filter(character => character !== '');
  let numbers;
  let letters;

  for (let idx = 0; idx < numWithCharacters.length; idx++) {
    numbers = numWithCharacters[idx].match(/\d/g) || ['0'];
    numbers = numbers.reduce((accum, current) => accum + current);
    numbers = Number(numbers);

    letters = numWithCharacters[idx].match(/[a-z]/gi) || [];
    if (letters.length !== numbers) return false;
  }
  return true;
}

isAValidMessage("3hey5hello2hi") // true
isAValidMessage("4code13hellocodewars") // true
isAValidMessage("3hey5hello2hi5")  // false
isAValidMessage("1a2bb3ccc4dddd5eeeee") // true
isAValidMessage("") // true

