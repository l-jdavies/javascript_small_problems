// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.


function searchSixthNumber() {
  let firstFive = [];
  firstFive.push(prompt('Enter the 1st number: '));
  firstFive.push(prompt('Enter the 2nd number: '));
  firstFive.push(prompt('Enter the 3rd number: '));
  firstFive.push(prompt('Enter the 4th number: '));
  firstFive.push(prompt('Enter the 5th number: '));

  let lastNumber = prompt('Enter the last number: ');

  if (firstFive.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in [${firstFive.join(', ')}].`);
  } else {
    console.log(`The number ${lastNumber} does not appear in [${firstFive.join(', ')}].`);
  }
}
