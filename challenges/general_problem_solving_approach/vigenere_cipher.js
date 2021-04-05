// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. 
//
// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// PEDAC
// PROBLEM
// INPUT
// string and keyword
//
// OUTPUT
// encryped string
// 
// rules:
// retain same case as input string
// retain same non alphabet characters as input string
// case of keyword is irrelevant
//
// Encrypt each character of the input string using the caesar cipher
// the key input for the caesar cipher comes from the index position of each letter in a keyword
// when one letter in the input string has bee encrypted, move to the next character in the keyword to find the next key
// do not move to the next character of the keyword if the character in the input string is non alphabet
// when the length of the keyword is less than the length of the input string, start back at the first character of the keyword
// return the encryped string
//
// EXAMPLES
//
// DATA STRUCTURE
// use an array to store the index values of the keyword
// build a new string as the return value
//
// ALGORITHM
// create an array of index values based on the keyword
// create an array that is the same length as the input string
// each element is the index of the letter in an alphabet array

function createKeyArray(keyword, size) {
  let numOfRepeats = Math.round(size / keyword.length);
  const ALPHA_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return keyword.toLowerCase().repeat(numOfRepeats).split('').map(letter => ALPHA_ARRAY.indexOf(letter));
}

// declare variable keyIndex = 0
// declare empty string, encryptedStr
// iterate over each character in the input string
// determine if character is an alphabet character
// if true
//    pass character into caesar cipher along with the number in the key array, accessed by index
//    add return value to encryptedStr
//    increment keyIndex
//  if false
//    add character to encryptedStr
// 
// return encryptedStr

function encryptLetter(letter, key) {
  const ALPHA_ARR = 'abcdefghijklmnopqrstuvwxyz'.split('');
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

function vigCipher(plaintext, keyword) {
  let keyArray = createKeyArray(keyword, plaintext.length);
  let encryptedStr = '';
  let keyIndex = 0;

  plaintext.split('').forEach(character => {
    if (character.match(/[a-z]/i)) {
      encryptedStr += caesarEncrypt(character, keyArray[keyIndex]);
      keyIndex += 1;
    } else {
      encryptedStr += character;
    }
  })

  return encryptedStr;
}


let txt = "Pineapples don't go on pizzas!"
console.log(vigCipher(txt, 'meat'))


