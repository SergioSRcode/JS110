// Write a function that takes a string as an argument and 
// returns that string with every lowercase letter changed to uppercase and 
// every uppercase letter changed to lowercase. 
// Leave all other characters unchanged.

//INPUT: string
//OUTPUT: string

//MM: "CamelCase" =>> cAMELcASE
// Iterate over each letter and turn it into its reversed case form.

//ALgorithm:
/*
pre. create a function to check if char is lowerCase
pre. create a function to check if char is upperCase
pre: create an arr of string
1. iterate over each char of input string 
2. for each char, turn into reversed case
3. turn arr back to str
4. return str
*/

function reverseCharCase(str) {
  return str === str.toUpperCase() ? str = str.toLowerCase() : str = str.toUpperCase();
}

function swapCase(str) {
  return str.split("").map(char => reverseCharCase(char)).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"