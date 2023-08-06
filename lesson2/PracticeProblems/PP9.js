// Given the following data structure, return a new array with the same structure,
// but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- 
// in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if (a < b) return -1;
  })
});

console.log(newArr);
console.log(arr);

// lS solution
/*
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
*/