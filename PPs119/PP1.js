// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:



//input: array of numbers
//output: array of numbers

//RR:
/*
- for each number, count all smaller nums
- each individual num should only be counted once
- if arr only contains 1 num => return 0

MM: [8, 1, 2, 2, 3] => [8, 1, 2, 2, 3] filter out doubs.
for each num of orig arr => iterate over all nums of filtered arr. => pass all values to a new arr.

Algo:
1. create copy of arg arr
2. create new empty arr "result" and filter so only one of each value remains
3. create count var
4. for each num of orig arr:
  4.1. check whether nums of filtered arr are less than current num
  4.2. if true count++
5. return new arr with count values


*/

function smallerNumbersThanCurrent(arr) {
  let filteredArr = [];

  arr.slice().forEach(num => {
    if (!filteredArr.includes(num)) filteredArr.push(num);
  });

  return arr.map(num => {
    let count = 0;
    for (let i = 0; i < filteredArr.length; i++) {
      if (num > filteredArr[i]) count += 1;
    }

    return count;
  });
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]