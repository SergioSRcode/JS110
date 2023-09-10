//INPUT NUM (of digits)
//OUTPUT Index of first fibonacci with corresponding amount of digits

//RR:
/*
Fibonacci series:
- starts with 1, 1
- adds last two digits to get next digit.
  => 1, 1 -> 1 + 1 = 2 => 1, 1, 2 -> 1 + 2 = 3 => 1, 1, 2, 3 => 2 + 3 = 5 => 1, 1, 2, 3, 5...

- input number represents the amount of digits the output number should have
- output number should be first number with amount of digits
  corresponding to the input number.
  => if input === 2 => output will look for first number within the fibonacci sequence with two digits
  => 13
- Output will then determine the index of that number: 13 => 7

MM: Iterate over fibonacci sequence until the input digits are reached. 
    return index of reached number.
  
Data Structure:
array

ALGORTHIM:
1. initialize array with 1, 1
2. find last two digits of arr
  2.1 get sum of last two digits
  2.2. push sum to array.
  2.3. check if digit count === input number ? yes: return; no: continue
3. repeat No. 2 until condition is satisfied
4. return length of arr === index last element of arr.

*/

function findFibonacciIndexByLength(num) {
  const FIBONACCI = [1n, 1n];
  let currentDigits = 0n;

  while (num > currentDigits) {
    FIBONACCI.push(BigInt(FIBONACCI[FIBONACCI.length - 2]) +
                   BigInt(FIBONACCI[FIBONACCI.length - 1]));
    currentDigits = BigInt(String(FIBONACCI[FIBONACCI.length - 1]).length);
  }

  return BigInt(FIBONACCI.length);
}

console.log(findFibonacciIndexByLength(2n)); // === 7n;
console.log(findFibonacciIndexByLength(3n)) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) === 45n;
console.log(findFibonacciIndexByLength(16n)) === 74n;
console.log(findFibonacciIndexByLength(100n)) === 476n;
console.log(findFibonacciIndexByLength(1000n)) === 4782n;
console.log(findFibonacciIndexByLength(10000n)) === 47847n;