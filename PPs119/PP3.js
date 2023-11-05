// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:



// The tests above should print "true".

//input: string
//output: string

//rr:
/*
- same amount of chars should be returned
- on every second word - convert 4th char to uppercase
- the other characters stay unchanged (e.g. if word length is less than 4)


DS:
arrays

MM: 'It is a long established' => ["It", "is", "a", "long", "established"] => count words : if odd =>
check if word has length of 4 chars ? turn 4th char to uppercase : continue;


Algorithm:

1. turn string to array.
2. iterate over array
  2.1. forEach odd word:
    - if length is >= 4 => turn every 4th char to uppercase
    - else => continue
3. turn arr to string and return
*/

function toWeirdCase(str) {
  let arr = str.split(" ");

  return arr.map((word, idx) => {
    if (idx % 2 !== 0) {
      let arrOfWord = word.split("");

      return arrOfWord.map((char, charIdx) => {
        return (charIdx + 1) % 4 === 0 ? char = char.toUpperCase() : char;
      }).join("");
    } else {
      return word;
    }
  }).join(" ");
}

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');