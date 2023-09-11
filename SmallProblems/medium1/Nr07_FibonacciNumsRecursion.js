// Write a recursive function that computes the nth Fibonacci number, 
// where nth is an argument passed to the function.

// [1, 1, 2, 3, 5, 8, ...]

//INPUT: number representing the index of Output in fibonacci sequense
//OUTPUT: number according to index (INPUT)

//Rules for recursion
/*
1. calls itself at least once
2. has an ending condition
3. return value of each recursion are used in each step

ALGO:
1. create arr => [1, 1]
2. while arr length < index
2. create a function to add values together (sum)
3. push return value of said function to the array.
4. return value of last index

usecase for fibonacci(index) => always has to carry the index
index is needed to find character in sequence
*/



function fibonacci(nth) {
  if (nth <= 2) return 1;

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765