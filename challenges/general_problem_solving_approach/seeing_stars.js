// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// PEDAC
// PROBLEM
//
// INPUT
// odd number
//
// OUTPUT
// string of * and whitespaces
// 
// number will be odd and 7 or greater
// output an 8 pointed star
// each line of the star contains n number of characters
// each row has 3 spaced * and the inner whitespace decreases per row
// when the inner whitespace is zero
// the next row is n number of *
// then the reverse occurs 
// three stars with no inner whitespace
// inner whitespace increases until there is no outer whitespace
//
// EXAMPLES
// see below
//
// DATA STRUCTURE
// strings only 
//
// ALGORITHM:
// split the star into two parts - upper and lower star
//
// createUpperStar
// declare: 
//  innerWhiteSpace
//  outerWhiteSpace
// 
// outerWhiteSpace is initially 0
// innerWhiteSpace is (n - 3) / 2
// until innerWhiteSpace = 0
//    log ' ' repeated outerWhiteSpace times + '*' once + ' ' repeated innerWhiteSpace times + '*' + ' ' repeated innerWhiteSpace + '*' + ' ' repeated outerWhiteSpace
//    increment outerWhiteSpace by 1
//    decrement innerWhiteSpace by 1
// break the loop when innerWhiteSpace < 0
// print n number of '*'

function createUpperStar(num) {
  let innerWhiteSpace = (num - 3) / 2;
  let outerWhiteSpace = 0;

  let printInnerSpace;
  let printOuterSpace;

  while (innerWhiteSpace >= 0) {
    printOuterSpace = ' '.repeat(outerWhiteSpace);
    printInnerSpace = ' '.repeat(innerWhiteSpace);

    console.log(`${printOuterSpace}*${printInnerSpace}*${printInnerSpace}*${printOuterSpace}`);
    innerWhiteSpace -= 1;
    outerWhiteSpace += 1;
  }

  console.log('*'.repeat(num));
}

function createLowerStar(num) {
  let innerWhiteSpace = 0;
  let outerWhiteSpace = (num - 3) / 2;

  let printInnerSpace;
  let printOuterSpace;

  while (outerWhiteSpace >= 0) {
    printOuterSpace = ' '.repeat(outerWhiteSpace);
    printInnerSpace = ' '.repeat(innerWhiteSpace);

    console.log(`${printOuterSpace}*${printInnerSpace}*${printInnerSpace}*${printOuterSpace}`);
    innerWhiteSpace += 1;
    outerWhiteSpace -= 1;
  }
}

function star(num) {
  createUpperStar(num);
  createLowerStar(num);
}

star(7);
star(9);
