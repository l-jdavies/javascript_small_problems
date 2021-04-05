// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

function leadingSubstrings(str) {
  let subStrings = [];
  let sliceEnd = 1;

  while (sliceEnd <= str.length) {
    subStrings.push(str.slice(0, sliceEnd));
    sliceEnd += 1;
  }
  return subStrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
