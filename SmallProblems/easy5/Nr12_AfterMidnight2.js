//INPUT: string
//OUTPUT: number in MINUTES

// ALGORITHM:
/*
1. check if first index of hours is 0
  if true => remove 0
  - extract hours and minutes.
2. turn hours into a number
3. number * hours in MINUTES
4. for minutes, refer to points 1, 2, 3.
*/
const HOURS_IN_MINUTES = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_IN_MINUTES * HOURS_PER_DAY;

function afterMidnight(time) {
  let clock = {
    hours: [time[0], time[1]],
    minutes: [time[3], time[4]],
  };

  if (time === "00:00" || time === "24:00") return 0;
  if (clock.hours[0] === "0") clock.hours.shift();
  if (clock.minutes[0] === "0") clock.minutes.shift();

  clock.hours = Number(clock.hours.join(""));
  clock.minutes = Number(clock.minutes.join(""));

  let hoursInMinutes = clock.hours * HOURS_IN_MINUTES;

  return hoursInMinutes + clock.minutes;
}

function beforeMidnight(time) {
  let clock = {
    hours: [time[0], time[1]],
    minutes: [time[3], time[4]],
  };

  if (time === "00:00" || time === "24:00") return 0;
  if (clock.hours[0] === "0") clock.hours.shift();
  if (clock.minutes[0] === "0") clock.minutes.shift();

  clock.hours = Number(clock.hours.join(""));
  clock.minutes = Number(clock.minutes.join(""));

  let hoursInMinutes = clock.hours * HOURS_IN_MINUTES;
  let result = MINUTES_PER_DAY - (hoursInMinutes + clock.minutes);

  return result;
}

console.log(afterMidnight("00:00") === 0);  //true
console.log(beforeMidnight("00:00") === 0);   //true
console.log(afterMidnight("12:34") === 754);  //true
console.log(beforeMidnight("12:34") === 686);  //true
console.log(afterMidnight("24:00") === 0);  //true
console.log(beforeMidnight("24:00") === 0);  //true

/*
LS Solution

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
*/