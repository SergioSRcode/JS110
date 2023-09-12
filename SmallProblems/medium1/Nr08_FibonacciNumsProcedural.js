function fibonacci(nth) {
  let fib1 = 1n;
  let fib2 = 1n;

  for (counter = 2; counter < nth; counter++) {
    let sum = fib1 + fib2;
    [fib1, fib2] = [fib2, sum];
  }

  return BigInt(fib2);
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050