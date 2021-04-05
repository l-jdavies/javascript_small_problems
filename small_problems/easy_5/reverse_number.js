// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

function reverseNumber(num) {
  let revNumArr = String(num).split('').reverse();
  let revNumStr = revNumArr.join('');

  return parseInt(revNumStr);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
