// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

function reverseWords(str) {
  let splitStr = str.split(' ');
  splitStr = splitStr.map((arr) => arr.split(''));

  splitStr.forEach((arr) => {
    if (arr.length >= 5) {
      arr.reverse();
    }
  })

  splitStr = splitStr.map((arr) => arr.join(''));

  return splitStr.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
