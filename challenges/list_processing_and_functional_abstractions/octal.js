// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.


function octalToDecimal(numberString) {
  let base = numberString.length;

  let octalDigits = numberString.split('').map(character => {
    base -= 1;
    return octalConversion(Number(character), base);
  })
  return octalDigits.reduce((accum, current) => accum + current);
}

function octalConversion(num, base) {
  return num * (Math.pow(8, base));
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
