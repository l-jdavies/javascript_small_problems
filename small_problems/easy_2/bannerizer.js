// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(str) {
  const HORIZONTAL_LINE = `+${repeatAction('-', str.length + 1)}+`;
  const BLANK_LINE = `|${repeatAction(' ', str.length + 1)}|`;

  console.log(HORIZONTAL_LINE);
  console.log(BLANK_LINE);
  console.log(`| ${str} |`);
  console.log(BLANK_LINE);
  console.log(HORIZONTAL_LINE);
}

function repeatAction(character, num) {
  let repeatStr = '';

  for (let count = 0; count <= num; count++) {
    repeatStr += character;
  }
  return repeatStr;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
