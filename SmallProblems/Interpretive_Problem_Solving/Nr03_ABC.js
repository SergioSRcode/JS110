// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks,
// false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// input: string
// output: boolean

// RR:
/*
given: a collection of spelling blocks

- a block:
  - contains two different letters

- input must be able to be spelled useing given blocks containing all letters
  - only one letter per block can be used
  - return true if possible
  - return false if not

- letters are case-insensitive

- each letter can only be used once

MM: Iterate over input strings letters and iterate over the boxes. Check whether current letter is included in a box. Then check the next letter;
    If letter is included in box and the other letter of current box is included in string, return false; else continue.

DS:
Array

Algorithm:

create block array.
0. transform all letters of str to uppercase (var upperStr)
1. declare an empty array called "result".
2. iterate over input strings letters 
3. iterate simultaneously over spelling blocks arr.
4. if current letter is included in spelling blocks arr and "characters" in spelling block are not included in "result"
  - push letter to "result"
5. after iteration -> turn result to string and compare to input string.
  - return true if it's equal; false otherwise
*/

const SPELLING_BLOCKS = [
  ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
  ["G", "T"], ["R", "E"], ["F", "S"], ["J", "W"], ["H", "U"],
  ["V", "I"], ["L", "Y"], ["Z", "M"]
]

function isBlockWord(str) {
  let upperStr = str.toUpperCase();
  let result = [];

  upperStr.split("").forEach(letter => {
    SPELLING_BLOCKS.forEach(block => {
      if (block.includes(letter) && !result.includes(block[0]) && !result.includes(block[1])) {
        result.push(letter);
      } 
    });
  });

  return result.join("") === upperStr ? true : false;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false