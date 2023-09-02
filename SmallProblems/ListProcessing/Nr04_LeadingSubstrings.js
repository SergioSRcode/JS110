// Write a function that takes a string argument and returns a list of substrings of that string.
// Each substring should begin with the first letter of the word, 
// and the list should be ordered from shortest to longest.

//INPUT: string
//OUTPUT: array of substrings of input

// ALGORITHM:
/*
1. create new empty arr
2. iterate over input string
  => turn string to arr to facilitate iteration
  => push each char + last char to empty string
3. sort new arr from shortest to longes (ascending numerical order)
*/

// Result with forEach
function leadingSubstrings(str) {
  const RESULT = [];

  str.split("").forEach((_, index) => RESULT.push(str.slice(0, index + 1)));

  return RESULT;
}

// Result with map
function leadingSubstrings(str) {
  return str.split("").map((_, index) => str.slice(0, index + 1));
}

// Result with reduce
function leadingSubstrings(str) {
  const RESULT = []

  str.split("").reduce((acc, char) => {
    RESULT.push(acc += char);
    return acc;
  }, "");

  return RESULT;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]