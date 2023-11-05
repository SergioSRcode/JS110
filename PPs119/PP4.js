// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

//Input: array of integers
//Output: array of two integers

//RR:
/*
- nums don't need to be adjacent to each other
- if two pairs have the same distance, keep first pair

MM: [5, 25, 15, 11, 20] => [5, 11, 15, 20, 25] : iterate over array
check (b - a) => assign var to return value => check next value (b - a) => less than current val

ALGO:
PRE: create result empty var;
1. create difference var => initialize to empty
2. sort array
get value from subtraction => assign to difference
next iteration
compare subtraction to difference
if less, reassign difference
if greater, continue;

3. get first two values
*/

function getDifference(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
}

function closestNumbers(arr) {
  let difference = "";
  let result = [];

  arr.forEach(num => {
    for (let idx = 0; idx < arr.length; idx++) {
      if (num === arr[idx]) continue;
      
      difference = difference || getDifference(num, arr[idx]);
      result.push([num, arr[idx]]);

      if (difference > getDifference(num, arr[idx])) {
        difference = getDifference(num, arr[idx]);
        result.unshift([num, arr[idx]]);
      }
    }
  });

  return result[0];
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]