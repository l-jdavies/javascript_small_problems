// Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

function wordSizes(str) {
  let splitString = str.split(' ');
  let wordSizeCount = {};

  if (!str) {
    return wordSizeCount;
  }

  for (let idx = 0; idx < splitString.length; idx++) {
    let wordLength = String(splitString[idx].length);

    if (!wordSizeCount[wordLength]) {
      wordSizeCount[wordLength] = 1;
    } else {
      wordSizeCount[wordLength] += 1;
    }
  }
  return wordSizeCount;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
