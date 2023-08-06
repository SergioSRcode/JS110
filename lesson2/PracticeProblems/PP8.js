// Using the forEach method, write some code to output all vowels from the strings in the arrays. 
// Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// input object
// output strings (vowels)

//rules: only use the forEach method

// DS: Array

// Algo:
/*
1. iterate over each key *
2. select each element within the array value *
  2.1. select each letter from string *
3. select all vowels from each letter *
4. print each letter *
*/
let objArr = Object.keys(obj);

objArr.forEach(key => {
  obj[key].forEach(str => {
    let arrOfLetters = str.split("");
    arrOfLetters.forEach(letter => {
      if ("aeiou".includes(letter)) {
        console.log(letter);
      }
    })
  })
});