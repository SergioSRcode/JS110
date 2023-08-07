// Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, 
// but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// input: nested arr
// goal: inner numbers only multiples of 3
// output: nested array 

//R&R
/*
multiples of 3=
[3, 6, 9, 12, 15, 18, 21, 24, ...]

structure should stay identical


// Data structure
Arrays

// Algorithm
1. copy current array including subarrs
2. Iterate over each subarr
3. Iterate over each individual value of subarr
  3.1. filter all multiples of 3 to remain in arr

*/
// CODE

function multiplesOf3(arr) {
  return arr.map(nestedArr => {
    return nestedArr.filter(num => num % 3 === 0);
  })
}

console.log(multiplesOf3(arr));