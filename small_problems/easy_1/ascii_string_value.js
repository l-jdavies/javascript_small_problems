/* Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.) */

function asciiValue(str) {
  let sumOfValue = 0;

  for (let idx = 0; idx < str.length; idx++) {
    sumOfValue += str.charCodeAt(idx);
  }
  return sumOfValue;
}
