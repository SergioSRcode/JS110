//Input: string of words
//Output: string of words

/*
RULES

- only first and last letter of each word are to be swapped
- String:
  - can contain several words
  - contains at least one word
    - with at least one letter
  - contains only words and spaces.
- casing plays no role.
- if word contains only one letter => return letter

Mental model:

Swap first and last letter of each word unless word contains only one letter.

DATA STRUCTURE:
Array
'Abcde' -> ['Abcde'] -> 'A' <-> 'e' -> ['ebcdA']

ALGORITHM:

1. get array of words *
  - words => seperated by spaces
=> Guard: if word.length === 1 => return word/letter as-is *
2. iterate over each word
  2.1. find the first char
  2.1 find second char
3. swap first and second char
4. get string of arr
5. return str.


2. iterate over each word
  2.1. find the first char
  2.1 find second char
3. swap first and second char
input: word/string
output: word/string with 1. and last char switched

Mental Model: get first and last char of word and return new str with swapped chars.

DATA Structure:
Array

ALGORITHM:
1. get arr of word *
  -> each letter representing 1 element. *
2. declare "firstLetter" variable *
  2.1. assign first letter to var
3. declare "lastLetter" variable *
  3.1. assign last letter to var


4.  - last letter = "firstLetter"
4.1  - first letter = "lastLetter"
5. get str of arr.

*/

function swap(str) {
  let arrOfStr = str.split(" ");
  let swappedArr = arrOfStr.map(word => swapLettersOfWord(word));

  return swappedArr.join(" ");
}

function swapLettersOfWord(word) {
  if (word.length === 1) return word;
  
  let arrOfWord = word.split("");
  let firstLetter = arrOfWord[0];
  let lastLetter = arrOfWord[arrOfWord.length - 1];

  arrOfWord[0] = lastLetter;
  arrOfWord[arrOfWord.length - 1] = firstLetter;

  return arrOfWord.join("");
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));