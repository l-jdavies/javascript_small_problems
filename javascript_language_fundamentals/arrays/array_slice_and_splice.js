/* In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods according to the following specifications.

The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

Additional specifications:

slice:

The values of begin and end will always be integers greater than or equal to 0.
If the value of begin or end is greater than the length of the array, set it to equal the length.
splice:

The values of start and deleteCount will always be integers greater than or equal to 0.
If the value of start is greater than the length of the array, set it to equal the length.
If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
Takes optional arguments for elements to add to the array; denoted by the parameters element1 up to elementN. If no elements to add are provided, splice only removes elements from the array. */

function slice(arr, startIdx, endIdx) {
  if (startIdx > arr.length) {
    startIdx = arr.length - 1;
  } else if (endIdx > arr.length) {
    endIdx = arr.length - 1;
  }

  let slicedArr = [];

  for (; startIdx < endIdx; startIdx++) {
    slicedArr.push(arr[startIdx]);
  }
  return slicedArr;
}

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}
