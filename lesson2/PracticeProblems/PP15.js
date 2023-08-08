// Given the following data structure, write some code to return an array which 
// contains only the objects where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

//Input: array of objects
//Goal: find all even numbers
//Output: array of objects with even numbers

// Algorithm
/*
1. iterate over each object key in order to
1.1. get an array of all keys
3. iterate over each subarray value
  - check if all values within the subarray are even
    - if true => ok
    - else delete key-value pair
*/

//CODE

// function oddObjects(arr) {
//   let newArr = arr.map(obj => {
//     let currentObj = {};
//     let keys = Object.keys(obj);
    
//     keys.forEach(valueArr => {
//       if (obj[valueArr].every(currentNum => currentNum % 2 === 0)) {
//         currentObj[valueArr] = obj[valueArr];
//       } 
//     });
//     return currentObj;
//   });
//   newArr.shift();  // last resort ;)
//   return newArr;
// }

// console.log(oddObjects(arr));
// console.log(arr);

let newArr = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

console.log(newArr);


