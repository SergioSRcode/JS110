// Given the following data structure, sort the array so that the sub-arrays are 
// ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ];

//input: nested arr
// goal: sum of odd numbers from arr
//output: sorted nested arr

//Rules
/*
keep Datastructure intact
get the sum of only odd numbers, even numbers are ignored
subarrays should be sorted low => high // ascending order
subarrays should stay unchanged, only order is changed.

// Data Structure
arrays

// Algorithm
1. Copy current arr *
2. Iterate over each nested arr *
3. Iterate over each individual number *
  3.1. check if num is odd *
    - if true: collect *
    - else skip *
    - get sum of all odd nums *
4. Compare sum from all the nested arrs
  4.1. sort the nested arrs in ascending order within the outer arr.

*/
// CODE

function sortedOddArrs(arr) {
  return arr.sort((a, b) => {
    let sumOddNumsA = 0;
    let sumOddNumsB = 0;

    for (let i = 0; i < a.length; i++) {
      let currentNumA = a[i];
    
      if (currentNumA % 2 === 0) continue;
      
      sumOddNumsA += currentNumA;

    }
    for (let j = 0; j < b.length; j++) {
      let currentNumB = b[j];
      
      if (currentNumB % 2 === 0) continue;

      sumOddNumsB += currentNumB;
    }
    return sumOddNumsA - sumOddNumsB;
  });
}

console.log(sortedOddArrs(arr));

// LS solution
/*
arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});
*/