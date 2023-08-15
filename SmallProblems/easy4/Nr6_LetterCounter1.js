// Write a function that takes a string consisting of zero or more space separated words
// and returns an object that shows the number of words of different sizes.

//INPUT: string of words
//OUTPUT: object with nums of words of different sizes

//RULES:
/*
- find the number of words of different sizes
  => the keys are the size
  => values specify the occurance of respective size
- if string is empty, return empty obj
- Words consist of any sequence of non-space characters
*/

// DATA STRUCTURES:
// Arrays and Objects

//ALGORITHM:
/*
GUARD: If string === empty; return empty array. *

Pre: Create empty obj *
     Create arr. *
1. iterate over each word *
  1.1. determine length of each word *
    => create obj key of each length *
    => give each key a random filler value *
= Object with keys
2. iterate over keys and words simultaniously
  2.1. determine amount of words corresponding to key
  note: key needs to be a number

3. add the amount as respective value to the keys

*/

function wordSizes(str) {
  let result = {};
  let arrOfStr = str.split(" ");
  let keys;

  if (str === "") return result;

  for (let i = 0; i < arrOfStr.length; i++) {
    result[arrOfStr[i].length] = 0;
  }

  keys = Object.keys(result);

  keys.forEach(key => {
    arrOfStr.forEach(word => {
      if (Number(key) === word.length) {
        result[key] += 1;
      }
    });
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}