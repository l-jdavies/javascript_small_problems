// Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.

function reverse(string) {
  let splitWords = string.split(' ').reverse();
  return splitWords.map(word => word.split('').reverse().join('')).join(' ');
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"
