// Write a function that takes a string as an argument and returns an array 
// that contains every word from the string, 
// with each word followed by a space and the word's length. 
// If the argument is an empty string or if no argument is passed, 
// the function should return an empty array.
// You may assume that every pair of words in the string will be separated by a single space.

//INPUT: string
//OUTPUT: array

//RULES:
/*
- Output contains every word from input string
  - each word is followed by:
    + a space
    + the word's length
      - special characters count towards the length
      - length is part of the word element/item within the array
- if string is empty => return empty array
- if no arg is passed => return emtpy array


ALGO:
GUARD=> set default value of parameter to "". *
1. create empty array  "result" *
3. turn string into array
4. iterate over array
 4.1. push each word to "result"
    - add a space
    - add the length of word
5. return array.
*/
//SOLUTION ForEach
// function wordLength(str = "") {
//   const RESULT = [];

//   if (str === "") return RESULT;

//   str.split(" ").forEach(word => RESULT.push(word + " " + word.length));

//   return RESULT;
// }

function wordLength(str = "") {
  if (str === "") return [];

  return str.split(" ").map(word => word + " " + word.length);
}

console.log(wordLength('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLength('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLength("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLength('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLength(''));      // []
console.log(wordLength());        // []