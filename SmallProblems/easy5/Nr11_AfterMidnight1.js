// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm).
// Your function should work with any integer input.

// INPUT: integer representing minutes
// OUTPUT: (hh:mm) of day => string

//RULES:
/*
- default time is "00:00"
- result should be in 24h format
- input can be positive or negative
  - positive => count minutes up (time after midnight)
  - negative => count minutes down (time before midnight)
- Don't use JS "Date" class methods!
- disregard daylight savings and standard time etc. 
- Input 0 => midnight => "00:00"
- 1440 minutes are one day => "00:00" of the next day
- it is possible to count up or down several days acc. to input
- input is always an integer and never empty

//MENTAL MODEL:

On a 24h clock, count up or down the minutes according to the input number and return the current time.

//DATA STRUCTURE:
none

//ALGORTIHM:

pre: set clock to 00:00
1. check whether input is positive or negative
2. If input is negative
  -> set clock to 24:00
  -> reduce clock by input minutes
  e.g. input is 5: 24:00 - 5 => 23:55
3. if input is positive
  -> add input to clock
  e.g. input is 5: 00:00 + 5 => 00:05
4. return time.

CLOCK:
hours: 00
minutes: 00

input: integer
output: integer

RULES:
- 1 hour has 60 minutes.
- 24 hours => 1 day => "00:00" midnight
- 1440 minutes => 1 day

Input 5 => 00:00 => 00:05 => return time
Input -5 => 24:00 => 23:55 => return time

DS:
Object

ALGORITHM:
1. create clock object
2. if input is above 60 => hours + 1 => set back minutes.

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(-60) === "23:00");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");