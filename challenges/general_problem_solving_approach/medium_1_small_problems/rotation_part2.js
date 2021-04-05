// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

function rotateRightmostDigits(num, rotate) {
  let splitStringNum = String(num).split('');
  let idx = splitStringNum.length - rotate;
  let rotatedDigit = splitStringNum[idx];

  delete splitStringNum[idx];
  splitStringNum.push(rotatedDigit);
  return Number(splitStringNum.join(''));
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
