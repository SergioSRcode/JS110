// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
Input: 1) array an of strings 2) integer 'k'
Output: string

Rules:
  - Output string consists of "k" amount of strings concatenated together
    - concatenated strings need to be adjacend
    - output str needs the be the single longest variation 

  - if arr length = 0 or k > arr length 
    or k <= 0 return "" => return an empty string 

MM: ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 2)

=> "dqqqaaabbboocccffuucccjjjkkkjyyyeehh"

ALGO:

1. {}
2. iterate over arr (i <= length - k)
  - slice(i, i + k) --> concatenate strs
    - obj[str] = str.length;
3. get arr of obj keys
4. sort arr in descending order
5. return first element.


*/

function longestConsec(arr, k) {
  const OBJ = {};

  if (arr.length === 0 || k > arr.length || k <= 0) return "";

  for (let i = 0; i <= arr.length - k; i++) {
    let key = arr.slice(i, i + k).join("");

    OBJ[key] = key.length;
  }

  return Object.keys(OBJ).sort((a, b) => b.length - a.length)[0];
}


// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
