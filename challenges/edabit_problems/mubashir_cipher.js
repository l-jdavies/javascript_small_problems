/* In Mubashir Cipher, encoding is done by simply replacing paired alphabets from the provided key.

Create a function that takes a string containing the message to be encoded with a fixed given 2D array of alphabets key.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

message = "edabit is amazing !"

mubashirCipher(message) ➞ "uqkgzf zv kckizlb !"
Step 1: Search alphabet in the given key and replace it with paired alphabet:

e = u
d = q
a = k
b = g
.
.
.
g = b
Step 2: Keep all characters (including spaces) other than alphabets in their original positions:

"uqkgzf zv kckizlb !"
See the below examples for a better understanding:

Examples
mubashirCipher("mubashir is not amazing") ➞ "cegkvxzy zv ljf kckizlb"

mubashirCipher("%$ &%") ➞ "%$ &%"

mubashirCipher("evgeny sh is amazing") ➞ "usbulr vx zv kckizlb" */

// PEDAC
// INPUT
// string and an alphabet array
//
// OUTPUT
// string
//
// PROBLEM
// each letter character in the input string is replaced with the other character contained in the same nested array as the original letter
// whitespaces are maintained
// special characters are included in the encrypted string unchanged
//
// RULES
// retain whitespaces and non-letter characters in encryptedStr
//
// EXAMPLES
// mubashirCipher("mubashir is not amazing") ➞ "cegkvxzy zv ljf kckizlb"
// mubashirCipher("%$ &%") ➞ "%$ &%"
// mubashirCipher("evgeny sh is amazing") ➞ "usbulr vx zv kckizlb"
//
// edge cases
// if input string includes number characters - retain in output string
// mubashirCipher('this 3string 7 end') 
// 'fxzv 3vfyzlb 7 ulq'
// mubashirCipher('i $contain !')
// 'z $mjnfkzl !'
// mubashirCipher('')
// ''
// assuming all input will be lowercase
//
// DATA STRUCTURE
// split input string into array
//
// ALGORITHM
// declare encrypted string
// iterate over each character in inputStr by index
// if character is not a letter
//    add to encryptedStr
// if character is a letter
//    pass into encryptLetter function
// 
// return encryptedStr


// declare encrypted variable 
// filter the keys array to return a subarray that contains the letter passed in as an argument
// if element at index 0 matches the argument letter
//    assign element at index 1 to encrypted variable
// otherwise assign the element at index 0 to encrypted 
// return encrypted

const key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

function encryptLetter(letter) {
  let encrypted = key.filter(sub => sub.includes(letter));
  encrypted = (encrypted[0][0] === letter) ? encrypted[0][1] : encrypted[0][0];
  return encrypted;
}

function mubashirCipher(str) {
  let encryptedStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx].match(/[a-z]/gi)) {
      encryptedStr += encryptLetter(str[idx]);
    } else {
      encryptedStr += str[idx];
    }
  }
  return encryptedStr;
}


mubashirCipher("mubashir is not amazing") // ➞ "cegkvxzy zv ljf kckizlb"
mubashirCipher("%$ &%") //➞ "%$ &%"
mubashirCipher("evgeny sh is amazing")// ➞ "usbulr vx zv kckizlb"
mubashirCipher('this 3string 7 end') // 'fxzv 3vfyzlb 7 ulq'
mubashirCipher('i $contain !') // 'z $mjnfkzl !'
mubashirCipher('') // ''


