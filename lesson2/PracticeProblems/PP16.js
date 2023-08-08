// Given the following data structure, write some code that defines an object
// where the key is the first item in each subarray, and the value is the second.
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//input: Array
//Output: Object

//Rules
/*
- each nested arr with two values (all of them) should be turned
  into a key-value pair
  - the first item => key
  - the second item => value
- the inner most nested arrays are considered single items/value and won't
  be divided into key-value pairs. 
- the inner most nested data structures stay untouched.

//Data Structures:
Objects

//Algorithm:
1. create an empty object *
2. Iterate over each mid-nested array. *
3. Iterate over each element within mid-nested array. CUT
  3.1. set value with index 0 as the key within the obj
  3.2. set value with index 1 as the value within the obj
4. return object
*/

//CODE

function objOfArr(arr) {
  const obj = {};

  arr.forEach(nestedArr => {
   obj[nestedArr[0]] = nestedArr[1];
  });

  return obj;
}

console.log(objOfArr(arr));

// Alternative solution
// console.log(Object.fromEntries(arr));