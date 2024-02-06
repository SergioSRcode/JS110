// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10

//INPUT: string
//OUTPUT: number

//RR:
/*
- empty string counts as anagram
- if no equal letters => remove all letters


MM: "aab", "a" --> get str with less letters = "a"; 
- "a" is included in other str ? Count + 1 : count stays
- iterate over all chars of shorter string.


1. CREATE array with strings as elements
2. CREATE count variable = 0;
2. SORT strings in ascending order according to their length
3. CHECK whether chars of string 1 are included in string 2
  yes? => Count + 1
4. Reduce both strings so they have a length of count
  - count removals
3. RETURN counted removals



COUNT REMOVALS - SHORTEN STRING:
- SET counter to Count 
- turn strings to arr (for easier iteration)
- iterate over length of the both strings/arrays:
  - while their length is greater than count => counter + 1
  - reduce length by 1;
- RETURN counter.
*/

function countSameChars(arr){
  let count = 0;

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[1].includes(arr[0][i])) count += 1;
  }

  return count;
}

function removedLetterCount(str, sameLettersCount) {
  let arrOfStr = str.split("");
  let removalCounter = 0;

  while (sameLettersCount < arrOfStr.length) {
    arrOfStr.pop();
    removalCounter += 1;
  }

  return removalCounter;
}

function anagramDifference(str1, str2) {
  let arr = [str1, str2];
  arr.sort();
  let count = countSameChars(arr);
  
  let removalCount = arr.map(str => removedLetterCount(str, count));
  

  return removalCount.reduce((acc, num) => acc + num);
}