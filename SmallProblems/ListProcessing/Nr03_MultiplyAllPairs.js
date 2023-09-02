// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number pairs 
// that exist between the two arrays. The returned array should be sorted in ascending numerical order.
// You may assume that neither argument will be an empty array.

//INPUT: two arrays of nums
//OUTPUT: new arr containing products of inputs

// [2, 4], [4, 3, 1, 2]
// 8, 6, 2, 4, 16, 12, 4, 8
// 2, 4, 4, 6, 8, 8, 12, 16

// ALGORITHM:
/*
Pre: empty array
1. iterate over first arr
  for each num
    - iterate over second arr
      => multiply each num of second arr with 1. num of 1. arr.
      [1, 4] = 1 arr
      [4, 3, 1] = 2 arr
      1 * 4
      1 * 3
      1 * 1
      4 * 4
      4 * 3
      4 * 1
2. push all products to empty arr.
3. sort arr in acending numerical order 
4. return arr.
*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(numArr1 => {
    arr2.forEach(numArr2 => result.push(numArr1 * numArr2));
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]