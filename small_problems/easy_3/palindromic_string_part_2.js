// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

function reverseString(str) {
  let arr = str.split('');

  return arr.reverse().join('');
}

function cleanStr(str) {
  return str.toLowerCase().match(/\w/g).join('');
}

function isRealPalindrome(str) {
  let cleanedString = cleanStr(str);

  return cleanedString === reverseString(cleanedString);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
