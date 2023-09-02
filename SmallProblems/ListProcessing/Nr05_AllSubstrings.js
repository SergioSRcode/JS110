// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 

// This means that all substrings that start at index position 0 should come first,
// then all substrings that start at index position 1, and so on.

// Since multiple substrings will occur at each position, 
// return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

//INPUT: string
//OUTPUT: array of all inputs substrings

function leadingSubstrings(arr) {
  return arr.map((_, index) => arr.slice(0, index + 1).join(""));
}

function substrings(str) {
  let result = [];
  let strArr = str.split("");

  while (strArr.length > 0) {
    result.push(leadingSubstrings(strArr));
    strArr.shift();
  }

  return result.flat();
}

console.log(substrings('abcde'));