// BASIC MATCHING
// Write a regex that matches an uppercase K. Test it with these strings:
let upperK = /K/g;
'Kx'.match(upperK);
'BlacK'.match(upperK);
'kelly'.match(upperK);

// Write a regex that matches an uppercase or lowercase H. Test it with these strings:

let upperLowerH = /H/ig;
'Henry'.match(upperLowerH);
'perch'.match(upperLowerH);
'golf'.match(upperLowerH);

// Write a regex that matches the string dragon. Test it with these strings:

let dragon = /dragon/g;
'snapdragon'.match(dragon);
'bearded dragon'.match(dragon);
'dragoon'.match(dragon);

// Write a regex that matches any of the following fruits: banana, orange, apple, strawberry. The fruits may appear in other words. Test it with these strings:

let fruit = /banana|orange|apple|strawberry/g;
'banana'.match(fruit);
'orange'.match(fruit);
'pineapples'.match(fruit);
'strawberry'.match(fruit);
'raspberry'.match(fruit);
'grappler'.match(fruit);

// Write a regex that matches a comma or space. Test your regex with these strings:

let commaSpace = /,| /g
'This line has spaces'.match(commaSpace);
'This,line,has,commas,'.match(commaSpace);
'No-spaces-or-commas'.match(commaSpace);

// CHARACTER CLASS
// Write a regex that matches uppercase or lowercase Ks or a lowercase s. Test it with these strings:

let kOrS = /[Kks]/g
'Kitchen Kaboodle'.match(kOrS);
'Reds and blues'.match(kOrS);
'kitchen Servers'.match(kOrS);

// Write a regex that matches any of the strings cat, cot, cut, bat, bot, or but, regardless of case. Test it with this text:

let catMatching = /cat|cot|bat|bot|but/gi;

'My cats, Butterscotch and Pudding, like to sleep on my cot with me, but they cut my sleep short with acrobatics when breakfast time rolls around. I need a robotic cat feeder.'.match(catMatching);

// Base 20 digits include the decimal digits 0 through 9, and the letters A through J in upper or lowercase. Write a regex that matches base 20 digits. Test it with these strings:

let base20 = /[0-9a-j]/gi;
'0xDEADBEEF'.match(base20);
'1234.5678'.match(base20);
'Jamaica'.match(base20);
'plow ahead'.match(base20);

// Write a regex that matches any letter except x or X. Test it with these strings:

let noX = /[a-wyz]/gi;
'0x1234'.match(noX);
'Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.'.match(noX);
'The quick brown fox jumps over the lazy dog'.match(noX);
'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'.match(noX);

// Write a regex that matches any character that is not a letter. Test it with these strings:

let noLetters = /[^a-z]/gi
'0x1234abcd'.match(noLetters);
'1,000,000,000s and 1,000,000,000s.'.match(noLetters);
'THE quick BROWN fox JUMPS over THE lazy DOG!'.match(noLetters);

// CLASS SHORTCUTS
// Write a regex that matches any sequence of three characters delimited by whitespace characters. Test it with these strings:

let whiteSpace = /\s...\s/g
'reds and blues'.match(whiteSpace);
'the lazy cat sleeps'.match(whiteSpace);

// Write a regex that matches any sequence of three letters. Test it with these strings:

let threeLetters = /[a-z][a-z][a-z]/gi
'The red d0g chases the b1ack cat.'.match(threeLetters);
'a_b c_d'.match(threeLetters);
