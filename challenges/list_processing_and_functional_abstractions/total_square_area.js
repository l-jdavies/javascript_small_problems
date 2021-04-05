// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(arr) {
  let arrAreas = arr.map(subArr => subArr[0] * subArr[1]);
  return arrAreas.reduce((accum, current) => accum + current);
}

totalArea(rectangles);    // 141

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(arr) {
  let rectangles = arr.filter(subArr => subArr[0] === subArr[1]);
  return totalArea(rectangles);
}

totalSquareArea(rectangles);    // 121
