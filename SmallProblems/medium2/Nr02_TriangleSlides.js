// Write a function that takes the lengths of the three sides of a 
// triangle as arguments and returns one of the following four strings representing 
// the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

//INPUT: 3 numbers
//OUTPUT: string that classifies the triangle

//RR:
/*
- all three sites (input numbers) should make a triangle
  - Triangle:
    + All three sides are of equal length
    + two sides of equal length - third is different
    + All sides are of equal length

    - The length of the two shortest sides MUST be greater than
      the length of the longest side
    - lenght of all sides must be greater than 0.
- Triangles are classified as:
  + equilateral
  + isosceles
  + scalene
  + invalid

DATA STRUCTURE:
Array

ALGO:
1. turn args into array
2. sort arr in ascending order
3. if first num === second num === third num
  - return equilateral
   else if first num + second num > third num
  - return isosceles
   else if no nums are equal
  - return scalene
Guard: 
- if any num is 0, return invalid
- if shorter nums are less than longer num, return invalid
*/

function triangle(side1, side2, side3) {
  let sides = [...arguments].sort((a, b) => a - b);
  
  if (sides.includes(0) || ((sides[0] + sides[1]) < sides[2])) return "invalid";

    if (sides.every(num => num === sides[0])) {
      return "equilateral";
    } else if (sides.filter(num => num === sides[1]).length === 2) {
      return "isosceles";
    } else {
      return "scalene";
    }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
