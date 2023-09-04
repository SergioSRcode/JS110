// Write a function that takes a string and returns an object containing three properties:
// one representing the number of characters in the string that are lowercase letters,
// one representing the number of characters that are uppercase letters,
// and one representing the number of characters that are neither.

//INPUT: String
//OUTPUT: Object with three properties

//MENTAL MODEL: 'abCdef 123' => {lowercase: 5, uppercase: 1, neither: 4}

//ALGORITHM:
/*
1. create an object with three properties and 0 as value
2. convert string to arr.
3. iterate over arr
  3.1. for each lowercase char => object lowercase +1
  3.2. for each uppercase char => object uppercase +1
  3.3. for neither, add 1 to neither property

4. return object
*/

function charIsLetter(str) {
  return /[A-Za-z]/.test(str);
}

function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split("").forEach(char => {
    if (charIsLetter(char)) {
      if (char === char.toLowerCase()) {
        obj.lowercase += 1;
      } else {
        obj.uppercase += 1;
      }
    } else {
      obj.neither += 1;
    }
  });

  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

