// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
  stringArr = arr.join('');

  if (stringArr.includes('7')) {
    return 'Boom!'
  } else {
    return 'there is no 7 in the array'
  }
}
