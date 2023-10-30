/*
Given an array of strings made only from lowercase letters, 
return an array of all characters that show up in all strings within the given array (including duplicates).
For example: If a character occurs 3 times in all strings but not 4 times, you need to include that
character three times in the final answer.
*/


//INPUT: array
//ouput: new array

//RR:
/*
- returned arr should contain all characters that occur on all arr elements
- douplicates should be counted as well
- strings are lowercase only


Algorithm:

Pre: create helper function comparing two values:
1. create "result" arr => []

2. iterate over each letter of first element within arr
  2.1. for each letter, iterate over each letter of the second element
  2.2. check on each iteration, if the letters match.
    - if yes, push letter of first element to "result"
    - turn current word of second element into a falsy value (=> this avoids double iteration for the dups)
    - stop the iteration for the current character (break)

3. return "result" to the main function;

4. create commonChars function
  4.1. declare result variable and initialize it to a falsy value
  4.2. Iterate over the array 
    - for each iteration:
      - initialize the first var to the first array element (in arr form)
      - initialize the second var to the current element to be iterated over (i)
      - reassign "result" on the first iteration to:
        - the return value of helper function, passing in the value of "first var" and "second var".
      - on all following iterations, reassign "result" to:
        - the return value of helper function, passing in helper function and "second var".

6. return "result"
*/

function commonBetweenTwo(word1, word2) {
  let result = [];

  word1.forEach(letter => {
    for (let i = 0; i < word2.length; i++) {
      let currentChar = word2[i];

      if (letter === currentChar) {
        result.push(letter);
        word2[i] = "";
        break;
      }
    }
    });

   return result;
}

function commonChars(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let first = arr[0].split("");
    let second = arr[i].split("");
    
    result = commonBetweenTwo(result || first, second);
  }

  return result;
}


console.log(commonChars(["a", "b"])); // []
console.log(commonChars(["aba", "bcaa"])); // ["b"]
console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"];
console.log(commonChars(["cool", "lock", "cook"])); // ["c", "o"]
console.log(commonChars(["hello", "goodbye", "booya", "random"])); // ["o"]
console.log(commonChars(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"])); // []