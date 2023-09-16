// Write a function that computes the difference between the square of the sum 
// of the first count positive integers and the sum of the squares of the first count positive integers.

// INPUT: Number
// OUTPUT: number

// MM: Input 3 -> count up to 3 (1, 2, 3) -> get the sum (1 + 2 + 3) -> get the square of sum (**2)
//     (1 + 2 + 3)**2
//     get square of each individual num -> (1**2, 2**2, 3**2)
//     subtract (1 + 2 + 3)**2 - (1**2, 2**2, 3**2)

/*
Algorithm:

1. create an empty array
2. iterate until counter is === input
  2.1. push counter with each iteration to array

3. get the sum of arr elements 
4. get the square of the sum

5. get the sum of the square of arr elements
6. get the sum of squares

7. return square of sum - sum of squares
*/

function initializeArr(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}

function sumSquareDifference(num) {
  const ARR = initializeArr(num)

  let squareOfSum = ARR.reduce((acc, num) => acc + num, 0)**2;  
  let sumOfSquares = ARR.reduce((acc, num) => acc + (num**2), 0);

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150