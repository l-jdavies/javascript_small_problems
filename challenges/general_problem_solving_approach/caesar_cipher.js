// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.
//
// PEDAC
// PROBLEM
// INPUT
// string and number
//
// string may contain multiple words
// 
// OUTPUT
// single string
//
// RULES
// return string must maintain same case as input string
// if key value is greater than 26, it wraps back to the beginning of the alphabet
// non alphabet characters are included in the return string unchanged
//
// EXAMPLES
//
// DATA STRUCTURE
// use array of lower case alphabet letters and upper case alphabet letters to find the encrypted letter by index
//
// ALGORITHM
// declare an empty string (encryptedString)
//
// iterate over each character in the string
//    if character is uppercase
//        add uppercase encrypted letter to encryptedString
//    if character is lowercase
//        add lowercase encrypted letter to encryptedString
//    if character is not an alphabet character
//        add character to encryptedString
//
//  return encryptedString
//
//  how to find encrypted letter
//  pass lowercase letter into function
//  pass key value into function
//  declare array of lowercase alphabet letters (alphaArr)
//  find index of input letter in alphaArr
//  add key to the index
//  if index is > 25
//      subtract 25 from index
//
//  return value at index position in alphaArr

function encryptLetter(letter, key) {
  const ALPHA_ARR = 'abcdefghijklmnopqrstuvwxyx'.split('');
  let index = ALPHA_ARR.indexOf(letter) + key;

  if (index > 25) {
    index = index - 26;
  }

  return ALPHA_ARR[index];
}

function caesarEncrypt(str, num) {
  let encryptedStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx].match(/[A-Z]/)) {
      encryptedStr += encryptLetter(str[idx].toLowerCase(), num).toUpperCase();
    } else if (str[idx].match(/[a-z]/)) {
      encryptedStr += encryptLetter(str[idx], num);
    } else {
      encryptedStr += str[idx];
    }
  }
  return encryptedStr;
}


// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// empty string
caesarEncrypt(' ', 1);
