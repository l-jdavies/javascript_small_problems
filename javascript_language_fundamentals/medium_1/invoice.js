// The invoiceTotal function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// Currently the function invoiceTotal will only perform an addition operation on the first four arguments passed into the function. The rest parameter can be used to enable any number of arguments to be passed in.
//

function invoiceTotal(...args) {
  let total = 0;

  for (let idx = 0; idx < args.length; idx++) {
    total += args[idx];
  }
  return total;
}
