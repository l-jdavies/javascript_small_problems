/* Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group. */

function combinations(...args) {
  noZeros = args.filter(num => num > 0);

  return noZeros.reduce((accum, current) => accum * current);
}

combinations(2, 3) //➞ 6

combinations(3, 7, 4) //➞ 84

combinations(2, 3, 4, 5) //➞ 120

combinations(0, 2, 3) // 6

combinations(2, 0, 3) // 6
