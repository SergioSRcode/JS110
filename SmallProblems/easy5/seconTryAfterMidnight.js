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

pre: initialize constants for magic nums
1. check if num is negative
  if true:
    => fullMinutes = mins % MINUTES PER DAY
    // if min is less than MPD => returns mins
    => fullMinutes + MPD
    // as fullMinutes is negative, this would be the same as 1440 - mins

2. if positive:
  => fullMinutes = mins % MPD

3. set hours: fullMinutes / Minutes per hour
  // dividing the allminutes number by 60 returns the hours.
  set minutes: fullMinutes % Minutes per hour
  // count up to 60/0. Anything above starts at 1 again.
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

function createTimeBoard(hours, minutes) {
  console.log(`${addZero(hours)}:${addZero(minutes)}`);
  return `${addZero(hours)}:${addZero(minutes)}`;
}

function timeOfDay(mins) {
  if (mins < 0) {
    mins = (mins % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    mins = mins % MINUTES_PER_DAY;
  }

  let hours = Math.floor(mins / MINUTES_PER_HOUR);
  let minutes = mins % MINUTES_PER_HOUR;

  return createTimeBoard(hours, minutes);
}

console.log(timeOfDay(-60) === "23:00");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");