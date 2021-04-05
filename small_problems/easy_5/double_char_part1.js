// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


function repeater(str) {
  let strArray = [];

  for (let idx = 0; idx < str.length; idx++) {
    strArray.push(str[idx], str[idx]);
  }

  return strArray.join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
