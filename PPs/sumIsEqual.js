/*
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers on the right of N.
If there is no index that would make this happen, return -1.

For example:

Lets say you are given the array [1, 2, 3, 4, 3, 2, 1];
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6. 
*/

//input: arr
//Output: number (index)

/*
MM: [1, 2, 3, 4, 3, 2, 1] => left to right => [1 + 2] => [3, 3 + 3] => [3, 6, 6 + 4]...
[3, 6, 10, 13, 15, 16] => iterate sums from right to left => check if current sum is included
*/

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0, i);
    let rightSide = arr.slice(i + 1);

    let leftSideSum = leftSide.reduce((acc, num) => acc + num, 0);
    let rightSideSum = rightSide.reduce((acc, num) => acc + num, 0);

    if (leftSideSum === rightSideSum) return i;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]));



// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
// console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);