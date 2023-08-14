// Write a function that returns true if the string passed as an argument is a palindrome, 
// or false otherwise. A palindrome reads the same forwards and backwards.
// For this problem, the case matters and all characters matter.

// INPUT: String
// OUTPUT: Boolean

// EXAMPLES:
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// RULES:
/*
- case matters
- all characters matter
*/

//DATA STRUCTURE:
// Array

// ALGORITHM:
/*
1. get a collection of each character *
2. if collection's length is even *
  => get last half *
  => reverse *
  => turn both to strings and compare to first half*
3. if coll length is odd
  => cut out mid character
  => continue like 2nd.
4. return boolean
*/


function findMiddleChar(arr) {
  let firstHalfLength = Math.floor(arr.length / 2);
  let secondHalf = arr.splice(firstHalfLength);
  secondHalf.shift();
  return arr.concat(secondHalf);
}

function isPalindrome(str) {
  let arr = str.split("");
  let firstHalf;
  let secondHalf;

  if (arr.length % 2 !== 0) arr = findMiddleChar(arr);

    secondHalf = arr.splice(arr.length / 2);
    secondHalf = secondHalf.reverse().join("");
    firstHalf = arr.join("");
    return firstHalf === secondHalf;
}

// LS solution

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true