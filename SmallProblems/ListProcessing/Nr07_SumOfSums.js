// Write a function that takes an array of numbers and returns the sum of the sums 
// of each leading subsequence in that array. 
// Examine the examples to see what we mean. 
// You may assume that the array always contains at least one number.

//INPUT: Array of nums
//OUTPUT: number

function sumOfSums(arr) {
  let extractedNums = [];
  let result = 0;

  arr.forEach(num => {
    extractedNums.push(num);
    result += extractedNums.reduce((acc, number) => acc + number, 0);
  });

  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

