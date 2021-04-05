// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

function buyFruit(arr) {
  let list = [];

  arr.forEach(subarr => {
    let count = subarr[1];
    while (count > 0) {
      list.push(subarr[0]);
      count -= 1;
    }
  })

  return list;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
