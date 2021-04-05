// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

function leadingSubstrings(str) {
  let subStrings = [];
  let sliceEnd = 1;

  while (sliceEnd <= str.length) {
    subStrings.push(str.slice(0, sliceEnd));
    sliceEnd += 1;
  }
  return subStrings;
}

function substrings(str) {
  let allSubStrings = [];
  let sliceStart = 0;

  while (sliceStart <= str.length) {
    allSubStrings = allSubStrings.concat(leadingSubstrings(str.slice(sliceStart)));
    sliceStart += 1;
  }
  return allSubStrings;
}

function isPalindrome(word) {
  let forward = word.split('');
  let reverse = word.split('').reverse();

  if (forward.length !== reverse.length) {
    return false;
  }

  for (let idx = 0; idx < forward.length; idx++) {
    if (forward[idx] !== reverse[idx]) {
      return false;
    }
  }
  return true;
}

function palindromes(str) {
  let allPalindromes = substrings(str).filter(word => isPalindrome(word));

  return allPalindromes.filter(pali => pali.length > 1);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
/*[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]*/

palindromes('knitting cassettes');
// returns
/*[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]*/
