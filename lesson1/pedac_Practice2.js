// input: array (of strings)
// output: new array (sorted by highest amount of adjacent consonants)

/*
RULES:
============
  Explicit:
    - input arr can contain several strings.
      - adjacent consonents:
        - next to each other in same word or
        - divided by space from adj. words.
    - the new arr should be sorted.
    - if two numbers are equal, order in relation to each other should be retained.
      - e.g. Hello, Jonni --> Hello, Jonni
  
  Implicit:
    - don't mutate original arr
    - a string (within the arr) can contain multiple or single words
    - new arr should be sorted in decending order
    - the new arr should contain the same values as the input str.
    - strings can have no adjacent consonant
    - if there is no adj. consonant, order remains unchanged:
      - even if string contains 1 or more consonants that are non-adjacent
        => 1 consonant === 0 consonants

  Questions:
    - Do strings always contain multiple words?
      - no
    - Can strings contain a single word?
      - yes
    - Can strings be empty?
      => not clarified by tests /-> here: no
    - Is it possible for a string to contain no adjacent consonants?
      - yes
    - What is meant by "a space between two consonants in adjacent words"?
      - "hellow Peter"
    - Should the strings be sorted in ascending or descending order?
      => decending
    - Is case important?
      => not clarified by tests /-> here: no

MENTAL MODEL:
=================
  function takes arr argument containing words. Iterate over each letter of each string within the arr
  and check whether the current letter is a consonant. Get the highest amount of consonants of
  each word within the array and sort the strings in decending order.
  Return the new arr.


TEST CASES:
==================

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']


DATA STRUCTURE:
=================

array


ALGORITHM:
=============

0. Mental Model:  
  function takes arr argument containing words. Iterate over each letter of each string within the arr
  and check whether the current letter is a consonant. Get the highest amount of consonants of
  each word within the array and sort the strings in decending order.
  Return the new arr.

1. create a function that takes an arr of strings as argument
  1.1. create a new arr with all the elements of the original one.

2. Iterate over each letter of each string within the arr
  and check whether the current letter is a consonant
  2.1. two iterators are needed, one to keep track of the current element
  and one that iterates over each letter of said element.
  2.2. If the current letter is a consonant, check whether the next is one too.
    - repeat as often as possible.
    - store amount once condition is false
    - keep checking for the length of the word
    - update consec. amount of consonants if current is > old one.
    - go to next word/element

3. Get the highest amount of consonants of
  each word within the array
  - Iteration over amount of consonants and words.

4. sort the strings/words in decending order
  - sort array
  - reverse array

5. return new arr.


3. Get the highest amount of consonants of each word within the array:
=======================================================================
input: a string
output: an integer representing a count of the highest number of adjacent consonants in the string

Test cases:
console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0

ALGORITHM:
==============
# - Remove the spaces from the input string 
# - Initialize a count to zero
# - Initialize a temp string to an empty string
#  - Initialize a Variable with an array of all vowels
- Iterate through the input string. For each letter:
 # - If the letter is a consonant, concatenate it to the temp string
  - If the letter is a vowel:
    - If the temp string has a length greater than 1 AND the temp string has a length 
      greater than the current count, set the count to the length of the temp string
    - Reset the temp string to an empty string
- keep iteration going for the length of input string.
- Return the count

*/

function sortStringsByConsonants(strings){

  let sortedStrings = strings.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedStrings;
}

function countMaxAdjacentConsonants(str) {
  let count = 0;
  let tempStr = "";
  const VOWELS = ["a", "e", "i", "o", "u"];
  str = str.replace(/ /g, "").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (!VOWELS.includes(str[i])) {
      tempStr += str[i];
      if (tempStr.length > 1 && tempStr.length > count) { count = tempStr.length }
    } else {
      if ((tempStr.length > 1) && (tempStr.length > count)) {
        count = tempStr.length;
        tempStr = "";
        }
    }
  }

  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']



/*
1. create a function that takes an arr of strings as argument
  1.1. create a new arr with all the elements of the original one.

2. Iterate over each letter of each string within the arr
  and check whether the current letter is a consonant
  2.1. two iterators are needed, one to keep track of the current element
  and one that iterates over each letter of said element.
  2.2. If the current letter is a consonant, check whether the next is one too.
    - repeat as often as possible.
    - store amount once condition is false
    - keep checking for the length of the word
    - update consec. amount of consonants if current is > old one.
    - go to next word/element
*/