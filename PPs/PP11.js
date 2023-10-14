// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

function letterCounter(str) {
  let obj = {};
  let arrOfStr = str.split("");

  arrOfStr.filter(letter => /[A-Za-z]/.test(letter)).forEach(letter => {
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  });

  return obj;
}

console.log(letterCounter(statement));