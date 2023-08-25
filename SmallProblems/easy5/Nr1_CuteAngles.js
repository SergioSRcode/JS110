// Write a function that takes a floating point number representing an angle between 0 and 360 degrees
// and returns a string representing that angle in degrees, minutes, and seconds. 

// Input: number
// Output: string

// Rules:
/*
- input represents an angle between 0 and 360 degrees

- output should represent the angle in "degrees", "minutes", and "seconds"
  - " ° " = degrees
    - degree = 60 minutes
    -if in single nums, display single nums.

  - " ' " = minutes
    - minutes = 60 seconds

  - ' " ' = seconds

- the symbol is attached to the end of the number
- if input num is an integer, mins+secs = 00'00"
- on 360 degree (input) =>
  - 1. output 360°00'00"
  - 2. output 0°00'00"


Example:

76.73 => 76° | .73 * 60 = 43.8 => 43' | .8 * 60 = 48"
=> 76°43'48"


Algorithm:

1. extract the degrees without decimals
2. extract the decimals
  - minutes = decimals * 60
3. extract minutes without decimals
4. extract the decimals
  - seconds = minutes * 60
5. print concatenated string
*/

function dms(num) {
  let degree = num.toFixed(0);
  let minutes = (num % 1) * 60;
  let seconds = (minutes % 1) * 60;

  if (num === 360) return `${num}°00'00" or 0°00'00"`;
  if (Number.isInteger(num)) return `${num}°00'00"`;
  

  return `${degree}°${padZeroes(Math.floor(minutes))}'${padZeroes(Math.floor(seconds))}"`;
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(400));
console.log(dms(-1));
console.log(dms(-40));
console.log(dms(-420));