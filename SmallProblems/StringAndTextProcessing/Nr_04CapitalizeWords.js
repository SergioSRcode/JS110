// Write a function that takes a string as an argument and 
// returns that string with the first character of every word capitalized and 
// all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

//INPUT: String
//OUTPUT: String

//MM => "four hours" -> ["four", "hours"], "f" -> "F" + "our" -> "Four" => ["Four", "Hours"] => "Four Hours"

/*
1. turn every word within the string into an array element
2. iterate over elements
  2.1. for each element:
    - get first letter
    - turn first letter to uppercase
    - get remaining letters
    - turn them to lower case
    - reassign element to the concatenation of both
3. turn array back to string
4. return string
*/

function wordCap(str) {
  let arr = str.split(" ");

  return arr.map(word => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let remainingLetters = word.slice(1).toLowerCase();

    return word = firstLetter + remainingLetters;
  }).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'