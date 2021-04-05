// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

function retirementAge() {
  let currentYear = new Date().getFullYear();
  let currentAge = parseInt(prompt('What is your age?'), 10);
  let retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

  let yearsLeft = retirementAge - currentAge;
  let retirementYear = currentYear + yearsLeft;

  console.log(`It is ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You have only ${yearsLeft} years of work to go!`);
}
