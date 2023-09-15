// Write a function that takes an integer as an argument and returns the next 
// featured number greater than the integer.
// Issue an error message if there is no next featured number.

//INPUT: num
//OUTPUT: num

//RR
/*
- featured num:
  - odd number thats a multiple of 7
  - all digits only occur once
- from input => get NEXT featured num in sequence
  - even if input num is a featured num

MM: Input 12: -> 7 => 14 (is even) => 21 (is odd; return).
    Compare the input number against multiples of 7 and return the first odd
    number with single occuring digits that is greater than input number.

Algorithm:

0.1. create function to find odd numbers
0.2. create function to check if digits occur more than once
0.3. extract 0.1 and 0.2 to new function "isValid"

1. declare multiples variable and initialize to 7
2. while arg num > multiples || multiples is invalid => multiples + 7
3. return multiples
*/

function numIsOdd(num) {
  return num % 2 !== 0;
}
// console.log(numIsOdd(20));
// console.log(numIsOdd(21));

function digitOccursOnce(num) {
  let arrOfNum = String(num).split("");
  let result;

  for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum.filter(number => arrOfNum[i] === number).length > 1) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
}

// console.log(digitOccursOnce(49));
// console.log(digitOccursOnce(98));
// console.log(digitOccursOnce(977));
// console.log(digitOccursOnce(113));

function isValid(num) {
  return numIsOdd(num) && digitOccursOnce(num) ? true : false;
}

// console.log(isValid(49)); // true
// console.log(isValid(98)); // false
// console.log(isValid(977)); // false
// console.log(isValid(113)); // false
// console.log(isValid(20)); // false
// console.log(isValid(21)); // true
// console.log(isValid(7)); // true

function featured(num) {
  let multiple = 7;

  if (num >= 9876543201) return "No number fulfills the requirements.";

  while ((num + 1) > multiple || !isValid(multiple)) {
    multiple += 7;
  }

  return multiple;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."