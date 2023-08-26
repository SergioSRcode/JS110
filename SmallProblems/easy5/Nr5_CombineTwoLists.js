// Write a function that combines two arrays passed as arguments, 
// and returns a new array that contains all elements from both array arguments,
// with each element taken in alternation.
// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// INPUT: two Arrays
// OUTPUT: combined arr with elements in alternation

// RULES:
/*
- both input arrs are non-empty
- both input arrs have the same length
- new arr is comprised of:
  - element of 1. input arr
  - element of 2. input arr
  - element of 1. input arr
  - element of 2. input arr
  ...

// MENTAL MODEL:

Combine the two input arrays and add first a value from the first input arr, then from the second until
all values are transfered to the new arr.

// DATA STRUCTURE:
ARRAYS

// ALGORITHM
1. create an empty array.
2. iterate over both arrays
  2.1. push an element to the emtpy arr in alternation
  [1, 2, 3], [4, 5, 6] => [] => [1] => [1, 4] => [1, 4, 2] => [1, 4, 2, 5 ...]
3. return new arr
*/

function interleave(arr1, arr2) {
  let result = [];

  arr1.forEach((element, i) => result.push(element, arr2[i]));

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

