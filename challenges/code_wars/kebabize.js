// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
  let regex = /[A-za-z]/g;
  let lettersOnly = str.match(regex);
  let camelStr = '';

  lettersOnly.forEach(letter => {
    if (letter === letter.toUpperCase()) {
      camelStr += '-';
      camelStr += letter.toLowerCase();
    } else {
      camelStr += letter;
    }
  })

  while (camelStr.startsWith('-')) {
    camelStr = camelStr.slice(1);
  }
  return camelStr;
}

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
