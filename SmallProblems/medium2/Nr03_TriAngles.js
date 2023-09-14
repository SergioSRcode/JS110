// Write a function that takes the three angles of a triangle as arguments and 
// returns one of the following four strings representing the 
// triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

//INPUT: 3 integers
//OUTPUT: string

//RR:
/*
- What classifies as triangle?
  + Right: One angle is exactly 90 degrees.
  + Acute: All three angles are less than 90 degrees.
  + Obtuse: One angle is greater than 90 degrees.

- what makes a triangle valid?
  - sum of all angles must be exactly 180 degrees.
  - every angle must be greater than 0 degrees

Algorithm:
0.1. create function sumIs180 that gets the sum of args and checks against 180
0.2. create function degreeIsZero to check if one arg is 0

1. if 0.1 and 0.2. are false
  => 1 arg === 90 (rest less) => "right"
  => all 3 args less than 90 => "acute"
  => one arg larger than 90 => "Obtuse"
*/

function sumIs180(angle1, angle2, angle3) {
  let angles = [...arguments];
  let sum = angles.reduce((acc, degree) => acc + degree, 0);

  return sum === 180;
}

function degreeIsZero(angle1, angle2, angle3) {
  return [...arguments].some(degree => degree === 0);
}

function degreeIs90(angle1, angle2, angle3) {
  return [...arguments].some(degree => degree === 90);
}

function degreeIsGreater90(angle1, angle2, angle3) {
  return [...arguments].some(degree => degree > 90);
}

function degreeIsLess90(angle1, angle2, angle3) {
  return [...arguments].every(degree => degree < 90);
}

function triangle(angle1, angle2, angle3) {
  if (!sumIs180(angle1, angle2, angle3) || 
      degreeIsZero(angle1, angle2, angle3)) return "invalid";

  if (degreeIs90(angle1, angle2, angle3)) return "right";
  if (degreeIsLess90(angle1, angle2, angle3)) return "acute";
  if (degreeIsGreater90(angle1, angle2, angle3)) return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"


// console.log(degreeIsZero(120, 50, 10));      // "obtuse"
// console.log(degreeIsZero(0, 90, 90));        // "invalid"

