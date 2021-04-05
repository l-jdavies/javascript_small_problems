// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Because the `debugIt` function invokes the `logger` function, which logs the variable `status`. The variable `status` has a value of the string `debugging`.
