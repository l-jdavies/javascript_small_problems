// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

function swapCase(str) {
  return str.split('').map(character => {
    if (character.match(/[a-z]/g)) {
      return character.toUpperCase();
    } else if (character.match(/[A-Z]/g)) {
      return character.toLowerCase();
    } else {
      return character;
    }
  }).join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
