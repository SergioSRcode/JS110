// Write a function that returns a list of all palindromic substrings of a string. 
// That is, each substring must consist of a sequence of characters that reads the same forward and backward.
// The substrings in the returned list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// For the purpose of this exercise, you should consider all characters and pay attention to case; 
// that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, 
// assume that single characters are not palindromes.

//INPUT: string
//OUTPUT: array of all palindromic substrings

// RULES:
/*
- Palindrome:
  - any sequence of forward and backward matching characters
  - single characters are not considered a palindrome
- Output substrings should be sorted by order of appearance.
- duplicate substrings are considered seperate entities.



*/

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

function palindromes(str) {
  return substrings(str).filter(sub => {
    let subStrArr = sub.split("");

    if (sub.length <= 1) return false;
    
    return subStrArr.join("") === subStrArr.reverse().join("");
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]