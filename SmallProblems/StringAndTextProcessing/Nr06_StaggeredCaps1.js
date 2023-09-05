// Write a function that takes a string as an argument and 
// returns that string with a staggered capitalization scheme.
// Every other character, starting from the first, should be capitalized and
// should be followed by a lowercase or non-alphabetic character. 
// Non-alphabetic characters should not be changed, but should be counted as characters for 
// determining when to switch between upper and lower case.

//INPUT: string
//OUTPUT: string

//RULES:
// - Numbers are to be ignored, any other character counts (even spaces)
// - starting with first char => caps

//MM: ignore 77 all => IgNoRe 77 AlL

//ALGO:
/*
pre: create function to filter to check whether char is a number
1. turn string into an array
2. iterate over the array
  2.1. starting with first char:
    - turn every even char to upper case and every odd to lower case.
3. turn arr back to string
4. return string
*/

// function isNumber(char) {
//   return !Number.isNaN(Number(char));
// }

// function staggeredCase(str) {
//   let arr = str.split("");

//   for (let i = 0; i < arr.length; i++) {
//     let currentChar = arr[i];

//     if (isNumber(currentChar)) continue;

//     if (i % 2 === 0) {
//       arr[i] = currentChar.toUpperCase();
//     } else {
//       arr[i] = currentChar.toLowerCase();
//     }
//   }

//   return arr.join("");
// }

function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 444 nUmBeRs"