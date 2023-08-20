// Write a function that takes a string consisting of zero or more space separated words
// and returns an object that shows the number of words of different sizes.

// Modify the wordSizes function from the previous exercise to exclude non-letters 
// when determining word size. For instance, the word size of "it's" is 3, not 4.

function wordSizes(str) {
  let result = {};
  let arrOfStr = str.split(" ");
  let keys;
  let newArr = [];

  if (str === "") return result;

  for (let i = 0; i < arrOfStr.length; i++) {
    let currentWord = removeNonLetters(arrOfStr[i]);
    result[currentWord.length] = 0;
    newArr.push(currentWord);
  }

  keys = Object.keys(result);

  keys.forEach(key => {
    newArr.forEach(word => {
      if (Number(key) === word.length) {
        result[key] += 1;
      }
    });
  });

  return result;
}

function removeNonLetters(word) {
  let wordArr = word.split("");
  let filteredArr = wordArr.filter(char => isLetter(char));

  return filteredArr.join("");
}

function isLetter(char) {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
}

// console.log(removeNonLetters("Hello!"));

// function removeNonLetters(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (isLetter(string[idx])) {
//       result += string[idx];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}