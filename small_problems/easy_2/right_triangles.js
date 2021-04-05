/* Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right. */

function triangle(num) {
  for (let whitespaceCount = num - 1, starCount = 1; starCount <= num; whitespaceCount -= 1, starCount += 1) {
    console.log(printCharacter(' ', whitespaceCount) + printCharacter('*', starCount));
  }
}

function printCharacter(character, times) {
  let repeatStr = '';

  for (let count = 0; count < times; count++) {
    repeatStr += character;
  }
  return repeatStr;
}
