/* The conjugations for all Spanish regular verbs can be built by using the three forms for verbs ending in -ar, -er and -ir.

Create a function that takes a verb as string, and returns a string with the six person/number combinations (like in the examples). Watch out for verbs ending in -ir (check the notes). Try programming the construction rather than forming structures with arrays.

Examples
espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:

...	Singular	Plural
1st person	yo -o	nosotros -imos
2nd person	tú -es	vosotros -ís
3rd person	él -e	ellos -en
Notes
This is for European Spanish, so the second person plural is vosotros pasais, not ustedes pasan
We're only using regular Spanish verbs. So no yo conozco, tú conoces, etc.
Pay attention to the accent marks! Feel free to copy them from the test page if you want. */

function endsWithAr(str) {
  let trimmed = str.slice(0, str.length - 2);
  return `Yo ${trimmed}o, tú ${trimmed}as, él ${trimmed}a, nosotros ${trimmed}amos, vosotros ${trimmed}áis, ellos ${trimmed}an.`
}

function endsWithIr(str) {
  let trimmed = str.slice(0, str.length - 2);
  return `Yo ${trimmed}o, tú ${trimmed}es, él ${trimmed}e, nosotros ${trimmed}imos, vosotros ${trimmed}ís, ellos ${trimmed}en.`
}

function endsWithEr(str) {
  let trimmed = str.slice(0, str.length - 2);
  return `Yo ${trimmed}o, tú ${trimmed}es, él ${trimmed}e, nosotros ${trimmed}emos, vosotros ${trimmed}éis, ellos ${trimmed}en.`
}


function espVerb(str) {
  if (str.endsWith('ar')) {
    return endsWithAr(str);
  } else if (str.endsWith('ir')) {
    return endsWithIr(str);
  } else if (str.endsWith('er')) {
    return endsWithEr(str);
  } else {
    'You haven\'t ended a regular verb!'
  }
}

console.log(espVerb("pasar") === "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan.")

console.log(espVerb("unir") === "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen.")

console.log(espVerb("correr") === "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren.")
