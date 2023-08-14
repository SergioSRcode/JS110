// Write a program that solicits six numbers from the user and logs 
//a message that describes whether the sixth number appears among the first five numbers.

//INPUT: 6 nums
//GOAL: find sixth num in other nums
//OUTPUT: string

//RULES
/*
- Input has to be a number
- when printing the arr of the first 5 nums
  - no space between comma
- num can appear more than once


DATA STRUCTURE:
Array

ALGORITHM:

1. Ask user for a number
  1.1. save number
2. repeat 1st until you have 6 nums
3. iterate over nums 1-5
  3.1. check if num 6 is included in nums 1-5
  => if true, print: num appears in num 1-5
  => if false, print: num doesn't appear in num 1-5
*/

const RL_SYNC = require("readline-sync");

function getNum(i, ending) {
  i === 6 ? console.log(`Enter the last number:`) : console.log(`Enter the ${i + ending} number:`);
  let num = RL_SYNC.question();

  return num;
  }

function check101() {
  let arr = [];
  let lastElement;

  for (let i = 1; i <= 6; i++) {
    
   if (i === 1) {
    arr.push(getNum(i, "st"));
   } else if (i === 2) {
    arr.push(getNum(i, "nd"));
   } else if (i === 3) {
    arr.push(getNum(i, "rd"));
   } else {
    arr.push(getNum(i, "th"));
   }
  }

  lastElement = arr.pop();

  if (arr.some(num => num === lastElement)) {
    console.log(`The number ${lastElement} appears in ${arr}`);
  } else {
    console.log(`The number ${lastElement} does not appear in ${arr}`);
  }
}

check101();