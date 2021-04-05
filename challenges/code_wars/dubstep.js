/* Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space. */

function songDecoder(str) {
  let splitArr = str.split('WUB');

  return splitArr.filter(ele => ele !== '').join(' ');
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
//  =>  WE ARE THE CHAMPIONS MY FRIEND
songDecoder("AWUBBWUBC") === "A B C";
songDecoder("AWUBWUBWUBBWUBWUBWUBC") === "A B C";
songDecoder("WUBAWUBBWUBCWUB") === "A B C";
