// Write a function that takes an array as an argument and 
// returns an array that contains two elements, each of which is an array.
// Put the first half of the original array elements in the first element of the return value,
// and put the second half in the second element.
// If the original array contains an odd number of elements, 
// place the middle element in the first half array.

//INPUT: Array
//OUTPUT: Array with 2 subarrays/elements

//RULES: 
/*
- Output arr:
  - Output arr is a different arr from input arr => no manipulation
  - always has two subarrays/elements
    - first subarr:
        * first half elements of Input arr
    - second subarr:
        * second half elements of Input arr
- If the length of input arr => odd
  - The middle element goes to the end of the first subarr.

- If Input arr contains only 1 element => 
  -> first subarr gets the element
  -> second subarr = empty array

- If the input arr contains no elements
  => return two empty arrays within the outer arr.

// MENTAL MODEL:

[1, 2, 3, 4, 5] => [], [] => [1, 2, 3], [4, 5] => return [ [1, 2, 3], [4, 5] ]

Pass first half of elements from input to first subarr and the remaining elements to the second subarr.
Pass these two arrays to a new array and return it.


//DATA STRUCTURES:
Object, Array

//ALGORITHM
1. Create an object with two key-value pairs *
  - firstarr: []
  - secondarr: []
2. Create empty array= result *

3. Find length of input arr *
  - if even: divide length by 2
  - if odd: find index of center element
4. iterate over Inpute arr *
  4.1. pass first half of elements to Object.firstarr *
  4.2. pass second half of elements to Object.secondarr *
5. pass arrays from object to result arr. *
6. return arr.

*/
//CODE

function initializeSubArrays() {
  let objectOfSubArrays = {
    firstArr: [],
    secondArr: [],
  }

  return objectOfSubArrays;
}

function createFirstHalf(objectOfSubArrays, lengthOfInputArr, arr) {
  if (lengthOfInputArr % 2 === 0) {
    for (let i = 0; i < lengthOfInputArr / 2; i++) {
      objectOfSubArrays.firstArr.push(arr[i]);
    }
  } else if (lengthOfInputArr % 2 !== 0) {
    let indexOfCenterElement = Math.ceil(arr.length / 2);
    
    for (let i = 0; i < indexOfCenterElement; i++) {
      objectOfSubArrays.firstArr.push(arr[i]);
    }
  }
}

function createSecondHalf(objectOfSubArrays, lengthOfInputArr, arr) {
  if (lengthOfInputArr % 2 === 0) {
    for (let i = lengthOfInputArr / 2; i < arr.length; i++) {
      objectOfSubArrays.secondArr.push(arr[i]);
    }
  } else if (lengthOfInputArr % 2 !== 0) {
    let indexOfCenterElement = Math.ceil(arr.length / 2);
    
    for (let i = indexOfCenterElement; i < arr.length; i++) {
      objectOfSubArrays.secondArr.push(arr[i]);
    }
  }
}

function halvsies(arr) {
  let objectOfSubArrays = initializeSubArrays();
  let result = [];
  let lengthOfInputArr = arr.length;

  createFirstHalf(objectOfSubArrays, lengthOfInputArr, arr);
  createSecondHalf(objectOfSubArrays, lengthOfInputArr, arr);
  
  result.push(objectOfSubArrays.firstArr, objectOfSubArrays.secondArr);
  
  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]