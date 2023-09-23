//Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.

//input: odd integer
//output: string (four-pointed diamond)

//RR:
/*
- four-pointed diamond:
  - grid with a size of n x n
  - n => input (argument)
- input is always an odd integer!

- function should display a diamond with * representing a part of n
=> n = 1 => *
             *
=> n = 3 => ***
             *

- the widest line is always equal to input num


MM:
Multiply input by itself and display the resulting amount of * in a diamond shape.
n = 3; 3 * 3 = 9; Nr. of stars = 9; 
diamond(9);
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


Algorithm:


1. while input num is greater than 1 => input num decrement by 1
  - display middlerow with the same amount of stars as input.
  then => shrink star amount of 1. row by two stars and add those to the top and bottom of middle row.
*/

function firstHalf(num) {
  let divider = num / 2;
  let counter = 1;
  while (counter < num) {
    console.log(" ".repeat(divider) + "*".repeat(counter));
    counter += 2;
    divider--;
  }
}

function secondHalf(num) {
  let divider = 0;
  while (num >= 1) {
    console.log(" ".repeat(divider) + "*".repeat(num));
    num -= 2;
    divider++;
  }
}

function diamond(num) {
  firstHalf(num);
  secondHalf(num);
}



diamond(9);
diamond(3);
diamond(5);
diamond(7);