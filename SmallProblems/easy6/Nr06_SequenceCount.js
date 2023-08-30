// Create a function that takes two integers as arguments. 
// The first argument is a count, 
// and the second is the starting number of a sequence that your function will create.
// The function should return an array containing the same number of elements as the count argument.
// The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. 
// The starting number can be any integer. If the count is 0, the function should return an empty array.

//INPUT: two integers
//OUTPUT: array

//RULES:
/*
- first argument is a "count":
  - specifies the number of elements within the resulting arr
  - integer greater than or equal to 0
  - if 0 => return empty arr

- second argument is a "starting number":
  - the value of each element is a multiple of (including) starting num
  - any integer (positive or negative)

MENTAL MODEL: 
Return an array of multiples of the starting number (included) with the count
specifying the length of the array.

DATA TYPE:
array

ALGORITHM:

1. create empty array
2. -> edge: if count === 0 => return arr.
3. loop (let multiplier = 1; multiplier <= count)
  - push starting num * multiplier

4. if starting num is negative
6. return arr
*/

function sequence(count, firstNum) {
  let result = [];

  for (let multiplier = 1; multiplier <= count; multiplier++) {
    result.push(firstNum * multiplier);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []