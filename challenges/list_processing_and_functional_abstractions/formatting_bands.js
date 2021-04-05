// We have the following Array of information for some popular bands:
//
// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

let bands = [
  {name: 'sunset rubdown', country: 'UK', active: false},
  {name: 'women', country: 'Germany', active: false},
  {name: 'a silver mt. zion', country: 'Spain', active: true},
];

function processBands(data) {
  data.map(dataObj => {
    canadianBands(dataObj);
    capitalizeBandNames(dataObj);
    removeDots(dataObj);
  })
  return data;
}

function canadianBands(obj) {
  obj.country = 'Canada';
}

function capitalizeBandNames(obj) {
  let name = obj.name.split(' ');
  obj.name = name.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function removeDots(obj) {
  obj.name = obj.name.replace('.', '');
}

processBands(bands);

// should return:
/*[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]*/
