// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.


function rotateRightmostDigits(num, rotate) {
  let splitStringNum = String(num).split('');
  let idx = splitStringNum.length - rotate;
  let rotatedDigit = splitStringNum[idx];

  delete splitStringNum[idx];
  splitStringNum.push(rotatedDigit);
  return Number(splitStringNum.join(''));
}

function maxRotation(num) {
  let rotatedNum = String(num);

  for (let position = rotatedNum.length; position > 1; position -= 1) {
    rotatedNum = String(rotateRightmostDigits(Number(rotatedNum), position))
  }
  return Number(rotatedNum);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

