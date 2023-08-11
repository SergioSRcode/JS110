// Problem: Add an "or" in front of the last possible choice
//E.g. "Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9"

// input: arr of nums, delimiter, word to add ("or")
// output concatenated arr with chars divided by delimiter and last char by word.

// RULES:
/*
- function takes 3 args
- an empty arr returns an empty string
- single chars are not concatenated with an delimiter
- if arr contains only 2 elements, they are delimited by "word" only! (no delimiter)
  - last two chars => never delimiter but "word" instead
  - else delimiter but no "word"

D&A:
Pre: if arr is empty, return empty str.
1. check if length of the arr > 2
  1.1. if false & length === 2
    => use word as seperator
  1.2. if true
    => use delimiter up to element before the last one
    => add "word" in front of last element

*/

//CODE

function joinOr(arr, delimiter = ", ", seperatorWord = "or") {
  let squaresAvailable;
  let lastElement;

  if (arr.length === 0) return "";
  if (arr.length === 1) return String(arr[0]);

  if (arr.length === 2) return arr.join(" " + seperatorWord + " ");

  lastElement = seperatorWord + " " + arr.pop();
  arr.push(lastElement);

  squaresAvailable = arr.join(delimiter);

  return squaresAvailable;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"