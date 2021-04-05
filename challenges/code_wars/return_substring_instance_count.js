// Complete the solution so that it returns the number of times the search_text is found within the full_text.

function solution(fullText, searchText) {
  let searchIdx = fullText.indexOf(searchText);

  if (searchIdx === -1) {
    return 0;
  }

  let count = 0;
  while (searchIdx > -1) {
    searchIdx = fullText.indexOf(searchText, (searchIdx + 1));
    count += 1;
  }

  return count;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')); // should return 1
