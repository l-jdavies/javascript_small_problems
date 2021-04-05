// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

function isBalanced(str) {
  let numberOfParentheses = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
      numberOfParentheses += 1;
    } else if (str[idx] === ')') {
      numberOfParentheses -= 1;
    }

    if (numberOfParentheses < 0) {
      return false;
    }
  }

  return numberOfParentheses === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
