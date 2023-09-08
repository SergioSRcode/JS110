// Write a function that rotates an array by moving the first element to the end of the array. 
// Do not modify the original array.

//INPUT: array
//OUTPUT: different array

//RR:
/*
- if input is not array => return undefined
- if input is empty string => return empty string
- empty arr => empty arr /=> if arr.length <= 1
- input arr should not be mutated =>
  - create new arr

MM: ['a', 'b', 'c'] => "a" - ['b', 'c'] => ["b", "c", "a"];

DS: Array

Algorithm:
guard: if input !== arr => undefined
       if input === "" => ""
       if input.length <= 1 => input
1. create a copy of input array
2. extract first element from copy
3. push element to the end of copy.
4. return copy
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length <= 1) return arr;

  let arrCopy = arr.slice();
  arrCopy.push(arrCopy.shift());
  // return array.slice(1).concat(array[0]);

  return arrCopy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]