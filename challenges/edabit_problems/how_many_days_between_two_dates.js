/* Create a function that takes two dates and returns the number of days between the first and second date.

getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
*/

// PEDAC
//
// INPUT 
// two date objects
//
// OUTPUT
// number
//
// PROBLEM
// determine how many days there are between the two date objects passed in as input
//
// RULES
// if the dates are from different years, you ignore the year. i.e. return 3 rather than 368
//
// EXAMPLES
//
// DATA STRUCTURE
//
// ALGORITHM

function getDays(date1, date2) {
  const MILLISECONDS_PER_DAY = (1000 * 60 * 60 * 24);
  let timeDifference = 0;

  if (date1.getTime() > date2.getTime()) {
    timeDifference = date1.getTime() - date2.getTime();
  } else {
    timeDifference = date2.getTime() - date1.getTime();
  }

  return (timeDifference / MILLISECONDS_PER_DAY);
}


getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) //➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) //➞ 3
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) //➞ 10
