// Create a function that concatenates n input arrays, where n is variable.
// Arrays should be concatenated in order of the arguments.

function concat(...args) {
  return args.reduce((accum, current) => accum.concat(current));
}

concat([1, 2, 3], [4, 5], [6, 7]) //=== [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) //=== [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) //=== [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) //=== [4, 4, 4, 4, 4]

