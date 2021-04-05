// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.


function concat(...moreArrays) {
  let concatArr = [];

  for (let arrIndex = 0; arrIndex < moreArrays.length; arrIndex++)
    if (Array.isArray(moreArrays[arrIndex])) {
      concatArr = concatArr.concat(moreArrays[arrIndex]);
    } else {
      concatArr.push(moreArrays[arrIndex]);
    }

  return concatArr;
}
