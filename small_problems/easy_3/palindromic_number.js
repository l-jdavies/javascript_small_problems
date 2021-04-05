// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

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

function isPalindromicNumber(num) {
  return isRealPalindrome(String(num));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
