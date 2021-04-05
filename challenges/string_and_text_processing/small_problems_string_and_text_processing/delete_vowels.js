// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

function removeVowels(arr) {
  let vowelsRemoved = arr.map(str => str.split(''))
    .map(subArr => subArr.filter(character => character.match(/[^aeiou]/gi)));
  return vowelsRemoved.map(subArr => subArr.join(''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
