// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
//
// PEDAC
// PROBLEM
// INPUT
// number
// positive and odd
//
// OUTPUT
// string composed of whitespaces and *
//
// print to the console a four pointed diamond composed of a string with whitespaces and *
// size of the diamond will depend on the input number
// input number represents total number of lines 
// plus the number of * at the widest part of the diamond
//
// EXAMPLES
// see below
//
// ALGORITHM
// declare starCount variable to store the number of * that should be printed
// starCount starts a 1 and increments by 2 until starCount equals the input number
// once starCount equals input number it needs to decrement by 2 until it equals 1
//
// * needs to be padded by whitespace on the left and right
// declare whiteSpaces variable to store number of ' ' that should be printed
// number of whiteSpaces is the input number - starCount / 2
//
// will split into two functions - topHalf and bottomHalf
//
// topHalf
// pass in input number as argument
// START
// SET starCount = 1;
// SET whiteSpaces = (input - starCount) / 2
//
// WHILE starCount <= input
//    PRINT  ' '.repeat(whiteSpaces) + '*'.repeat(starCount) + ' '.repeat(whiteSpaces)
//    starCount increment by 2
//    whiteSpaces decrement by 2
// END

function topHalfDiamond(num) {
  let starCount = 1;
  let whiteSpaces = (num - starCount) / 2;

  while (starCount <= num) {
    console.log(`${' '.repeat(whiteSpaces)}${'*'.repeat(starCount)}${' '.repeat(whiteSpaces)}`);
    starCount += 2;
    whiteSpaces -= 1;
  }
}

function bottomHalfDiamond(num) {
  let starCount = num - 2;
  let whiteSpaces = (num - starCount) / 2;

  while (starCount >= 1) {
    console.log(`${' '.repeat(whiteSpaces)}${'*'.repeat(starCount)}${' '.repeat(whiteSpaces)}`);
    starCount -= 2;
    whiteSpaces += 1;
  }
}

function diamond(num) {
  topHalfDiamond(num);
  bottomHalfDiamond(num);
}

diamond(1);
diamond(3);
diamond(9);


