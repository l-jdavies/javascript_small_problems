// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let regex = /[a-z]/g
  let strArr = string.toLowerCase().match(regex).sort();

  let uniqLetters = new Set(strArr);
  uniqLetters = Array.from(uniqLetters);


  let flag = true;
  ALPHA.forEach(letter => {
    if (letter !== uniqLetters[ALPHA.indexOf(letter)]) {
      flag = false;
    }
  })
  return flag;
}

console.log(isPangram("This is not a pangram."));
