// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

function staggeredCase(str) {
  let splitString = str.toLowerCase().split('');
  let transformToUpper = true;

  return splitString.map(character => {
    if (character.match(/[a-z]/g) && transformToUpper) {
      transformToUpper = false;
      return character.toUpperCase();
    } else if (character.match(/[a-z]/) && !transformToUpper) {
      transformToUpper = true;
      return character;
    } else {
      return character;
    }
  }).join('');

}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
