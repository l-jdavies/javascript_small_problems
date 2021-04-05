// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

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

substrings('abcde');

// returns
/*[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]*/
