// Input: number
//Output: array of numbers

//RR
/*
- Input Number signifies the number of rounds and amound of switches
- first round switches all light on
  second round toggles every other light => 2, 4 will be off
  third round toggles every third light => 3 will be off

MM: Incement the count by 1 for each round and toggle the lights according to the 
    index remainder of count.

DS:
Array, object

Algorithm:
1. create empty obj

(2. create a loop
  2.1. initialize obj => all lights off)

3. select lights according to round:
  3.1. loop over keys array
    - set round iterator = 1
    - loop over each key and 
        - toggle key index % round === 0
    - continue until end of arr
    - next round beginns.

*/

// (2. create a loop
//   2.1. initialize obj => all lights off)

function initializeObj(obj, switches) {
  for (let i = 1; i <= switches; i++) {
    obj[i] = false;
  }
}

function toggleLight(obj, key) {
  return obj[key] === false ? true : false;
}

function lightsOn(switches) {
  let obj = {};
  initializeObj(obj, switches);

  for (let round = 1; round <= switches; round++) {
    Object.keys(obj).forEach((key, i) => {
      if ((i + 1) % round === 0) obj[key] = toggleLight(obj, key);
    });
  }

  return Object.keys(obj).filter(key => obj[key] === true).map(num => Number(num)); 
}

console.log(lightsOn(5));
console.log(lightsOn(100));