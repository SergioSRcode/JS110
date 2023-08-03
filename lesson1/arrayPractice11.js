// Create an object that expresses the frequency with which each letter occurs in this string:
// let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// input: string
// output: object with each letter as a key and their occurance as the value

// rules
/*
1. it is differentiated between upper and lower case letters.
2. each letter's first occurance will be a key
3. their total occurance will be the value
4. spaces should be omitted.
5. output is an object.
*/

// mental model
/*
Function takes one string argument and iterates over the input strings' letters.
then it creates a key for the output object for each individual letter. Then 
it iterates over the input strings' letters again to check the occurance of each letter.
Which will serve as the value of their corresponding keys.
*/

// Data structures
// arrays, objects

// algorithm
/*
1. Convert string to array (each letter serves as an element)
  - remove spaces
2. create empty object (output obj)
3. iterate over the array by sorting it
4. Iterate over it again
  - first element => first key of obj
5. check first element agains next element
  - if element === element => obj[element] += 1;
  - else create new key of obj
    => repeat
*/

let statement = "The Flintstones Rock";

let obj = {};

let getSortedArr = str => {
  str = str.split(" ").join("").split("");
  return str;
}

function getObjectKeyValues(sortedArray) {
  sortedArr.forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  })
}

let sortedArr = getSortedArr(statement);
getObjectKeyValues(sortedArr);

console.log(obj);