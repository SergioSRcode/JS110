// Write a function that takes a sentence string as an argument and returns that string with 
// every occurrence of a "number word"
// - 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' - 
// converted to its corresponding digit character.

//INPUT: string of words
//OUTPUT: string

//RR:
/*
- assume the input is never empty
- if input contains "number words"
  => convert to their digit character.
  five => 5
  one => 1
  ...
- the converted digits are/stay part of the string.
- if there are no "number words", return string as-is.

//MM: "call me at five one two" => ["call", "me", "at", "five", "one", "two"]
       => iterate -> if current element === "number word" => convert to digit.
       ["call", "me", "at", "5", "1", "2"] => "call me at 5 1 2"

Data Structure:
Arrays, Object

ALGORITHM for number Word to digit converter:
1. create an object:
  - key => number word - e.g. five
  - value => corresponding digit - e.g. "5"
  => continue from zero to nine.
2. return object.

ALGORITHM:
1. call object "num to digit converter",
2. iterate over object keys
3. current key is included in string sentence ?
    => yes? convert to digit
    => no? continue.
5. return string.
*/

function numWords() {
  let digitNums = {
    zero: "0",
    one : "1",
    two : "2",
    three : "3",
    four : "4",
    five : "5",
    six : "6",
    seven : "7",
    eight : "8",
    nine : "9",  
  }

  return digitNums;
}

// function wordToDigit(strSentence) {
//   let digitNums = convertNumberWordToDigit();

//   return strSentence.split(" ").map(word => {
//     if (word.includes(".")) {
//       word = word.replace(".", "");
//       if (Object.keys(digitNums).includes(word)) {
//         let filteredWord = digitNums[word];
//         return filteredWord + ".";
//       } else {
//         return word + ".";
//       }
//     }
//     if (Object.keys(digitNums).includes(word)) return digitNums[word];
//     return word;
//   }).join(" ");
// }

function wordToDigit(sentence) {
  let digitNums = numWords();
  Object.keys(digitNums).forEach(key => {
    if (sentence.includes(key)) sentence = sentence.replaceAll(key, digitNums[key]);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."