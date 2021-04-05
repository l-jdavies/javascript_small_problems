/* 
 * In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

Examples
primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"
Notes
This definition of strong primes is not to be confused with strong primes as defined in cryptography, which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.
 */
// PEDAC
// INPUT
// number
//
// OUTPUT
// string
//
// PROBLEM
// balanced prime - prime number that when you deduct the previous prime number from the current prime number,
// the value is the same as when you deduct the current prime number from the next prime number
//
// strong prime - calculate the mean of the previous prime and next prime number
// prime is when the mean is greater than the current prime
//
// weak - calculate the mean of the previous prime and next prime number
// weak is when the current number is less than the mean
//
// RULES
// 
// EXAMPLES
//
// DATA STRUCTURE
// store prime numbers in an array
// calculate primes up to current number
// add the next prime
//
// ALGORITHM
// prime number is evenly divided only by 1 and itself
// helper function - findPreviousPrime
// to find the previous prime number
//    declare `previousPrime` and initialize with value of input num
//    pass previousPrime into function that returns true if argument is prime, otherwise returns false
//    keep decrementing previousPrime until isAPrime returns true
// return previousPrime
//
// helper function - isAPrime
// loop with a divisor variable declared and initialized with a value of 2
// until divisor === input num
// determine if input num % divisor equals 0
// if it does
//    return true
// otherwise return false
//
// increment divisor
//
// helper function - find next prime
// same as findPreviousPrime
// but declare variable nextPrime and initialize with input plus 1
// increment nextPrime per iteration
//
// helper function isBalanced
// arguments are previous prime, current prime and next prime
// if (current prime minus previous prime) is equal to (next prime minus current prime)
//   return true
//   otherwise return false
//
// helper isStrong
// declare average variable and assign value of previous plus next divided by 2
// if current is greater than average
// return true
// else false

function isBalanced(previous, current, next) {
  return (current - previous) === (next - current);
}

function isStrong(previous, current, next) {
  let average = (previous + next) / 2;
  return current > average;
}

function isAPrime(num) {
  let divisor = 2;
  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
}

function returnPreviousPrime(num) {
  let previousPrime = num - 1;

  while (!isAPrime(previousPrime)) {
    previousPrime -= 1;
  }
  return previousPrime;
}

function returnNextPrime(num) {
  let nextPrime = num + 1;

  while (!isAPrime(nextPrime)) {
    nextPrime += 1;
  }
  return nextPrime;
}

function primalStrength(num) {
  let previousPrime = returnPreviousPrime(num);
  let nextPrime = returnNextPrime(num);

  if (isBalanced(previousPrime, num, nextPrime)) {
    return 'Balanced';
  } else if (isStrong(previousPrime, num, nextPrime)) {
    return 'Strong';
  } else {
    return 'Weak';
  }
}

primalStrength(211) // ➞ "Balanced"

primalStrength(17)// ➞ "Strong"

primalStrength(19) //➞ "Weak
