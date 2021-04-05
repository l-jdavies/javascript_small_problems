// Write a Function named anagram that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

function anagram(word, list) {
  return list.filter(arrWord => isAnAnagram(word, arrWord));
}

function isAnAnagram(word1, word2) {
  let word1LetterArr = word1.split('').sort();
  let word2LetterArr = word2.split('').sort();

  if (word1LetterArr.length !== word2LetterArr.length) {
    return false;
  }

  for (let idx = 0; idx < word1LetterArr.length; idx++) {
    if (word1LetterArr[idx] !== word2LetterArr[idx]) {
      return false;
    }
  }
  return true;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
