// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

function wordSizes(str) {
  let splitString = str.split(' ');
  let wordSizeCount = {};

  if (!str) {
    return wordSizeCount;
  }

  for (let idx = 0; idx < splitString.length; idx++) {
    let word = splitString[idx].match(/\w/g);
    let wordLength = String(word.length);

    if (!wordSizeCount[wordLength]) {
      wordSizeCount[wordLength] = 1;
    } else {
      wordSizeCount[wordLength] += 1;
    }
  }
  return wordSizeCount;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
