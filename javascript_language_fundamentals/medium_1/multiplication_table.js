// The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. Read through the code shown below. Will it produce the expected result? Why or why not?

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1: return `  ${stringNumber}`;
    case 2: return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// The multiplication table only includes numbers 1 - 9, not 1 - 10. This is because in the first `for` loop the conditional statement causes the `for` loop to terminate when the parameter `i` is not less than `10`. This can be fixed by changing the conditional statement to `i <= 10`.
