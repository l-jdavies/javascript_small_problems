// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

function wordToDigit(str) {
  const wordDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let wordRegEx = /zero|one|two|three|four|five|six|seven|eight|nine/gi;

  return str.replace(wordRegEx, word => wordDigits.indexOf(word));
};

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('no numbers included')
// 'no numbers included'
wordToDigit('zero zero one...')
// '0 0 1'
wordToDigit('')
// ''
wordToDigit('  test spacing')
// '  test spacing'
