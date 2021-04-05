/* A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the stack, and stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is transformed to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and MOD).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively. */

// PEDAC
// PROBLEM
//
// INPUT
// string containing multiple commands and number characters
//
// OUTPUT
// number, if print command is in input string
// no print - nothing returned or logged
//
// EXAMPLES
// see below
//
// DATA STRUCTURE
// use array to store stack values
// split intput string into array
//
// ALGORITHM
// create separate functions for each of the operations
// each operation will need to return the value to be stored in the register
// declare stack and register
// split input string into an array of strings
// iterate over string array
//    if current string is a number
//        reassign register to the string, converted into a number
//    invoke appropriate function based on string
//        pass in register and last stack element
//        assign return value from function to the register

function print(reg) {
  console.log(reg);
}

function push(reg, arr) {
  arr.push(reg);
}

function add(reg, val) {
  return reg + val;
}

function sub(reg, val) {
  return reg - val;
}

function mult(reg, val) {
  return reg * val;
}

function div(reg, val) {
  return Math.floor(reg / val);
}

function mod(reg, val) {
  return Math.floor(reg % val);
}

function minilang(str) {
  let stack = [];
  let register = 0;

  str.split(' ').forEach(command => {
    if (command.match(/\d/)) {
      register = Number(command);
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      register = add(register, stack.pop());
    } else if (command === 'SUB') {
      register = sub(register, stack.pop());
    } else if (command === 'MULT') {
      register = mult(register, stack.pop());
    } else if (command === 'DIV') {
      register = div(register, stack.pop())
    } else if (command === 'MOD') {
      register = mod(register, stack.pop());
    } else if (command === 'PRINT') {
      print(register);
    }
  })
}

//minilang('PRINT');
// 0

//minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
