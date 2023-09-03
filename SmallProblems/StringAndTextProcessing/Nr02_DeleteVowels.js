// Write a function that takes an array of strings and returns an array 
// of the same string values, but with all vowels (a, e, i, o, u) removed.

//ALGORITHM:
/*
1. iterate over array strings
2. find vowels
3. replace vowels with ""
*/

function removeVowels(arr) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  
  return arr.map(str => {
    return str.split("").map(letter => {
      return VOWELS.includes(letter.toLowerCase()) ? "" : letter;
    }).join("");
  });
}
  

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]