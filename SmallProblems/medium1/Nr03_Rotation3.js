// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
// Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579.
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
// You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

//INPUT: number
//OUTPUT: rotated number

//RR:
/*
- rotate over input num for each single sub number within input (-1?)
  -rotate: value gets extracted and put to the end of arr.
- resulting num => "maximum rotation"

MM: run rotateRightmostDigits function while counter is less than the amount
    of single numbers within the input num, while the second argument of rotateRightmostDigits
    will be counted down within the loop.
*/

function rotateRightmostDigits(strNumber, rotator) {
  let reversedArrOfNum = strNumber.split("");
  reversedArrOfNum.push(reversedArrOfNum.splice(rotator, 1));

  return reversedArrOfNum.flat().join("");
}

function maxRotation(num) {
  let strOfNum = String(num);
  let maximumRotationNumber = strOfNum;

  for (let count = 0; count < strOfNum.length; count++) {
    maximumRotationNumber = rotateRightmostDigits(maximumRotationNumber, count);
  }

  return Number(maximumRotationNumber);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845