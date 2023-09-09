//INPUT: String
//OUTPUT: number

//RR:
/*
- initial stack value = []
- initial register value = 0

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
*/


//PUSH
function copyRegisterToStack(register, stack) {
  stack.push(register);
}
//ADD
function addValueWithRegister(register, stack) {
  return register + stack.pop();
}
//SUB
function subtractValuefromRegister(register, stack) {
  return register - stack.pop();
}
//MULT
function multiplyValueWithRegister(register, stack) {
  return register * stack.pop();
}
//DIV
function divideValueWithRegister(register, stack) {
  return Math.floor(register / stack.pop());
}
//REMAINDER
function getRemainder(register, stack) {
  return register % stack.pop();
}
//POP
function removeValueFromStack(stack) {
  return stack.pop();
}
//PRINT
function printRegisteredValue(register) {
  console.log(register);
}

function minilang(str) {
  let arr = str.split(" ");
  let stack = [];
  let register = 0;

  arr.forEach(elem => {
    if (!Number.isNaN(Number(elem))) {
      register = Number(elem);
    }
    if (Number.isNaN(Number(elem)) && ![
      "PUSH", "ADD", "SUB", "MULT", "DIV", "REMAINDER", "POP", "PRINT"
    ].includes(elem)) console.log("Input is not defined within the language!");

    switch (elem) {
      case "PUSH":
        copyRegisterToStack(register, stack);
        break;
      case "ADD":
        register = addValueWithRegister(register, stack);
        break;
      case "SUB":
        register = subtractValuefromRegister(register, stack);
        break;
      case "MULT":
        register = multiplyValueWithRegister(register, stack);
        break;
      case "DIV":
        register = divideValueWithRegister(register, stack);
        break;
      case "REMAINDER":
        register = getRemainder(register, stack);
        break;
      case "POP":
        register = removeValueFromStack(stack);
        break;
      case "PRINT":
        printRegisteredValue(register);
        break;
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// [3, 4, 5] -> print 5; 
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH SIB');
// (nothing is printed because the `program` argument has no `PRINT` commands)