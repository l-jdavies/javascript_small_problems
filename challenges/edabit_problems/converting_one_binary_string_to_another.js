/* Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4
Notes
Both binary strings will be of equal length.
Both binary strings will have an equal number of zeroes and ones.
A swap is switching two elements in a string (swaps do not have to be adjacent). */

// PEDAC
// PROBLEM
// count the number of differences between the two input strings
// half the number of differences - each swap changes two numbers
//
// EXAMPLES
//
// DATA STRUCTURE
// keep input as string 
//
// ALGORITHM

function minSwaps(str1, str2) {
  let countDifferences = 0;

  for (let idx = 0; idx < str1.length; idx++) {
    if (str1[idx] !== str2[idx]) {
      countDifferences += 1;
    }
  }
  return countDifferences / 2;
}

minSwaps("1100", "1001") //➞ 1

minSwaps("110011", "010111")// ➞ 1

minSwaps("10011001", "01100110")// ➞ 4

minSwaps('000111', '111000')
