// Write a function that displays an 8-pointed star in an NxN grid, 
// where N is an odd integer that is supplied as an argument to the function.
// The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

//input: odd integer
//output: strings in form of an 8-pointed star

//RR:
/*
- 8-pointed star?
  - middle row always corresponds to the input integer
  - each row above and below, contains 3 stars
  - each row from the middle to the outside will have incremented white space
    between the stars:
    *** => * * * => *  *  * => *   *   * ...
  - uppermost and lowermost row has the same length as middle row
    - but still only three stars
  - has exactly 9 rows and 9 columns

MM: [*, null, null, *, null, null, *] => if 2nd element from top and bottom is null => cut
    [*, null, *, null, *] => if 2nd element from top and bottom is null => cut
    [*, *, *] => 2nd element from top and bottom is null? False => stop loop

    [*, *, *] => while arr length !== length of middle line => 
    add a 2nd element from top and bottom => null => [*, null, *, null, *]
    [*, null, *, null, *] => add a 2nd element from top and bottom
    [*, null, null, *, null, null, *] === length of mid row => stop loop

DS:
Arrays

Algorithm:
1. declare function for top rows
    [*, x, x, *, x, x, *] => if 2nd element from top and bottom is not * => cut
    [*, x, *, x, *] => if 2nd element from top and bottom is not * => cut
    [*, *, *] => 2nd element from top and bottom is not *? False => stop loop

2. declare function for bottom rows
    [*, *, *] => while arr length !== length of middle line => 
    add a 2nd element from top and bottom => x => [*, x, *, x, *]
    [*, x, *, x, *] => add a 2nd element from top and bottom
    [*, x, x, *, x, x, *] === length of mid row => stop loop

3. call function for top rows within "star" function
4. display middle row
5. call funciton for bottom rows within "star" function


[*, x, x, *, x, x, *] ?

1. declare an array and initialize it to a length of input num using x
2. reassign the first, middle and last element to *

bottom row?
return paddingCounter from top row
=> pass to bottom row to decrement paddingCounter within loop
*/

function initializeTopRow(num) {
  let topRow = [];

  while (topRow.length < num) {
    topRow.push("x");
  }

  topRow[0] = "*";
  topRow[Math.floor(topRow.length / 2)] = "*";
  topRow[topRow.length - 1] = "*";

  return topRow;
}

function displayTopRows(num) {
  let paddingCounter = 0;
  let upperRow = initializeTopRow(num);

  while (upperRow[1] !== "*") {
    console.log(" ".repeat(paddingCounter) + upperRow.join("").replace(/x/g, " "));
    
    upperRow.splice(1, 1);
    upperRow.splice(upperRow.length - 2, 1);
    paddingCounter++;
  }

  console.log(" ".repeat(paddingCounter) + upperRow.join("").replace(/x/g, " "));

  return paddingCounter;
}

function displayBottomRows(num, paddingCounter) {
  let bottomRow = ["*", "*", "*"];

  while (bottomRow.length <= num) {
    console.log(" ".repeat(paddingCounter) + bottomRow.join("").replace(/x/g, " "));

    bottomRow.splice(1, 0, "x");
    bottomRow.splice(bottomRow.length - 1, 0, "x");
    paddingCounter--;
  }
}

function star(num) {
  let paddingCounter = displayTopRows(num);
  console.log("*".repeat(num));
  displayBottomRows(num, paddingCounter);
}

star(7);
star(9);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
