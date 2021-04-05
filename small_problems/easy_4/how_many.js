// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

function countOccurrences(arr) {
  const ARR_COUNT = {}

  arr.forEach((element) => {
    if (!ARR_COUNT[element]) {
      ARR_COUNT[element] = 1;
    } else {
      ARR_COUNT[element] += 1;
    }
  })

  for (let count in ARR_COUNT) {
    console.log(`${count} => ${ARR_COUNT[count]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
