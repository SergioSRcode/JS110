// Given an unordered array and the information that exactly one value in the array occurs twice
// (every other value occurs exactly once), determine which value occurs twice.
// Write a function that will find and return the duplicate value that is in the array.

//INPUT: Array
//OUTPUT: Integer num

//RULES:
/*
- Input arr contains only integers
- only 1 integer occurs twice
- find the duplicate and return it.
- don't mutate the input array!  // Selfmade rule

//MENTAL MODEL:

Look through the input array of integers and find the only duplicate.

// DATA STRUCTURE:
Array

//ALGORITHM:

1. create a copy of input arr *
2. sort the new arr *
3. iterate over arr *
  3.1. check wether adjacent value === current value
    if true => return value
    else continue;
*/
// CODE 

function findDub(arr) {
  let copyOfArr = arr.slice().sort((a, b) => a - b);
  
  for (let i = 0; i < copyOfArr.length; i++) {
    if (copyOfArr[i] !== copyOfArr[i + 1]) continue;
    
    return copyOfArr[i];
  }
}

console.log(findDub([1, 5, 3, 1]));                                // 1
console.log(findDub([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73