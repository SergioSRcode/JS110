// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:



// The tests above should each log "true".

//INPUT: arr of nums
//OUTPUT: number || null

// RR:
/*
- get minimum sum of 5 consec. nums:
  count start is possible from either position within the array.
- if arr.length is less than 5 => return null

MM: [1, 2, 3, 4, 5, -5] 
[] => slice char 0 - 5 => [1, 2, 3, 4, 5] => sum pushed to arr => [15] =>slice char 1 - 6 => [2, 3, 4, 5, -5] => push sum to arr [15, 9]
keep count of second argument of slice


Algo:

1. create empty arr
2. iterate over arg arr numbers
  2.1. copy 5 nums at a time and pass the sum to emtpy arr.
  2.2. keep iteration going until second arg is equal to length of the arr.
3. find smallest sum from within new arr.
*/

function minimumSum(arr) {
  if (arr.length < 5) return null;
  
  let sums = [];

  for (let i = 0; i < arr.length; i++) {
    let end = i + 5;
    sums.push(arr.slice(i, end));
    
    if (end === arr.length) break;
  }

  sums = sums.map(arr => {
    return arr.reduce((acc, num) => acc + num, 0);
  });

  return Math.min(...sums);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

