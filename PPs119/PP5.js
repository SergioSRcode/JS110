// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

//INPUT: string
//OUTPUT: a string char

//RR:
/*
-return character that occurs least often
-if multiple chars have the same appearance rate, take the first one.
- case insensitive = A and a are considered the same
-spaces are regarded as chars

OBJ

MM: h: 1
    e: 1
    l: 3
    ...
    => check 


*/

function findLowestOccurringChar(obj) {
  let keys = Object.keys(obj);
  let lowestOccurance = 0;

  keys.forEach(key => {
    if (!lowestOccurance) lowestOccurance = obj[key];
    if (lowestOccurance > obj[key]) lowestOccurance = obj[key];
  });

  return keys.filter(key => obj[key] === lowestOccurance)[0];
}

function leastCommonChar(str) {
  let obj = {};

  let arrOfStr = str.split("");

  arrOfStr.forEach(char => {
    obj[char.toLowerCase()] = obj[char.toLowerCase()] + 1 || 1;
  });

  return findLowestOccurringChar(obj);
}


// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".