// Write a function that takes an array of numbers and returns an array with the same number of elements,
// but with each element's value being the running total from the original array.

//INPUT: array of nums
//OUTPUT: array of nums

//RULES
/*
- Output array should have the same length as input arr
- each value will be a running total
  - running total: each value will be added to num the next in line
    e.g. input arr [2, 5, 13] => output arr [2, 7, 20]
- first num stays the same
- if only 1 num in arr => return arr as-is
- an empty arr will return an empty arr.
*/

/*
DATA STRUCTURE
Arrays

ALGORITHM:
Guard: if args arr length <= 1 *
  => return args arr

1. create new arr *
2. iterate over each element of the arg's array *
3. Push first num to new arr *
  - add first num to second num
    => push second num to new arr
  - add new second num to third num
    => push third num to new arr
  - ...
4. repeat 3. until length of new arr === arg arr *

*/

function runningTotal(arr) {
  let rTotals = [];

  if (arr.length <= 1) return arr;

  arr.reduce((acc, num) => {
    rTotals.push(acc + num);
    
    return acc + num;
    }, 0);

  return rTotals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []