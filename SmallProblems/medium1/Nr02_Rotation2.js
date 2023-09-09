// Write a function that rotates the last count digits of a number.
// To perform the rotation, move the first of the digits that you want to 
// rotate to the end and shift the remaining digits to the left.

//INPUT: two numbers
//OUTPUT: first number rotated

// RR:
/*
- first argument serves as directive number 
- second argument indicates the number to be put to the end of the first arg
- arguments are integers
- if second argument is 1 => return first arg as-is.

MM: (735, 2) => 753
    735 => "735" => ["7", "3", "5"] -> rotate => ["5", "3", "7"]
    splicing element at index "arg2 - 1" => unshift spliced element to arr, rotate back.

    Turn first argument into an array of strings, rotate the array and cut out
    the number at index arg2 - 1. Rotate arr back and append cut out number to end of array. 
    Then turn arr to string and lastly to number.

DATASTRUCTURE:
Array

ALGORITHM:

1. turn arg1 to a string array
2. reverse array
3. cut out arr element at index num => arg2 - 1
  => push it to start of array (e.g. unshift)
4. reverse array back
5. turn arr back to string -> number
6. return
*/

function rotateRightmostDigits(num, rotator) {
  let reversedArrOfNum = String(num).split("").reverse();

  reversedArrOfNum.unshift(reversedArrOfNum.splice(rotator - 1, 1));

  return Number(reversedArrOfNum.flat().reverse().join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917