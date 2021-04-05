// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// PEDAC
// PROBLEM
// input:
// number
//
// output:
// array of numbers
// number represents switches in 'on' position
//
// input number represents the number of switches
// also represents the number of passes through the switches
// each time the switches are passed through, if the switch number is divisible by x, the switch is toggled
// x starts a 1 and ends when x === input number
// x is incremented by one after each pass
// when x === input number, return an array containing the number of switches in the 'on' position
//
// EXAMPLES
// console.log(lightsOn(5) === [1, 4])
// console.log(lightsOn(100) === [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
//
// edge cases
// assume input always positive integer
// console.log(lightsOn(0) === [])
// console.log(lightsOn(1) === [1])
//
// DATA STRUCTURE
// use an object to store the light number as a key and a value will be boolean (true - on; false - off)
//
// ALGORITHM
// declare an object of switches (switchObj)
// loop from 1 to inputNum
//    current number is the key, all values set to false
// 
// retrieve keys from switchObj and assign to variable `switchKeys`
//
// loop
//    count starts at 1; break when count === inputNum
//    iterate over switchKeys
//        if key, converted to a number, is divisible by count
//          toggle the value associated with the key
// end
//
// declare empty array (`onSwitches`)
// iterate over switchKeys
// use individual key to access each value of switchObj
// if value is true
//    add key to onSwitches
// 
// convert onSwitches elements from strings to numbers
// return onSwitches 
//
// createSwitchObj function
// pass in input number
// START
// SET keyCount = 1
// SET obj = {}
// WHILE keyCount is less than or equal to inputNum
//    obj[keyCount] = false
// END
//
// RETURN obj

function createSwitchObj(num) {
  let obj = {};
  let keyCount = 1;

  while (keyCount <= num) {
    obj[keyCount] = false;
    keyCount += 1;
  }

  return obj;
}

// function findOnSwitches
// obj and array of key passed in
// SET returnArr = []
//
// iterate over array of keys
// if obj[key] === true
//    add key to returnArr
// 
// RETURN returnArr

function findOnSwitches(obj, arr) {
  let returnArr = [];

  arr.forEach(key => {
    if (obj[key]) {
      returnArr.push(key);
    }
  })

  return returnArr.map(num => Number(num));
}

// START
// SET switchObj = return value of createSwitchObj(n)
// SET switchKeys = retrieve keys from switchObj
// SET count = 1
//
// WHILE (count is less than or equal to n)
//    iterate over switchKeys, access each key
//    if the key convert to a number is evenly divisible by count
//        toggle the value associated with the key
//
//    increment count by 1
// END
//
// onSwitches = findOnSwitches
// RETURN onSwitches
// END

function lightsOn(switches) {
  let switchObj = createSwitchObj(switches);
  const SWITCH_KEYS = Object.keys(switchObj);
  let count = 1;

  while (count <= switches) {
    SWITCH_KEYS.forEach(key => {
      if (Number(key) % count === 0) {
        switchObj[key] = !switchObj[key];
      }
    })

    count += 1;
  }

  let onSwitches = findOnSwitches(switchObj, SWITCH_KEYS);
  return onSwitches;
}

console.log(lightsOn(5)) //=== [1, 4])
console.log(lightsOn(100)) //=== [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
//
// edge cases
// assume input always positive integer
console.log(lightsOn(0)) //=== [])
console.log(lightsOn(1)) //=== [1])


// lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
