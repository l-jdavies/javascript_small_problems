/* The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN. */

// PEDAC
// PROBLEM
// input will be an object in which the values are objects
// need to remove any values that are not numbers from the inner nested objects
// return new object
//
// EXAMPLES
//
// DATA STRUCTURE
// create new object to be returned
// assign keys from each layer of nested objects in an array
//
// ALGORITHM
// obtain all keys from first level of object and assign to array outerKeys
// iterate over outerKeys and obtain all keys from second level object and assign to innerKeys
// add outerKey to returnObj with a value of {}
// iterate over innerKeys to obtain the value associated with each [outerKey][innerKey]
// if the value coerced into a number does not return true for Number.isNaN
//    add to returnObj[outerkey][innerKey] = value coerced into a number
//
//  return returnObj

function findAndRemove(obj) {
  let allOuterKeys = Object.keys(obj);
  let filteredObj = {};

  allOuterKeys.forEach(outerKey => {
    let allInnerKeys = Object.keys(obj[outerKey]);
    filteredObj[outerKey] = {};

    allInnerKeys.forEach(innerKey => {
      let numberVal = Number(obj[outerKey][innerKey]);
      if (Number.isNaN(numberVal) === false) {
        filteredObj[outerKey][innerKey] = numberVal;
      }
    })
  })
  return filteredObj;
}

findAndRemove({
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
})
/*➞ {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  } */

findAndRemove({
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  },
})

/*➞ {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 550,
    },
    cellar: {
      bottle: 750,
    },
  } */


