// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
input: one string
output: array of substrings!!!

Rules and Requirements:

Explicit:
  -all substrings withing the input strings that are palindromes are returned as a collection (array)
  -Palindromes are case sensitive

Implicit:
  -before returning the substring(s), they are store in an array.
  -letters of existing palindromes still count for other palindromes.
  -If the input contains no palindrome, return an empty array.
  -If the input is an empty string, return an empty array.

D&A:

Algorithm:
 - declare a result variable and initialize it to an empty array
 - create an array named substrArray that contains all of the
   substrings of the input string that are at least 2 characters long.
 - loop through the words in the substrArray array.
 - if the word is a palindrome, append it to the result array
 - return the result array
*/

// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array


