// Write a function that takes a string argument consisting of a first name, a space, and a last name,
// and returns a new string consisting of the last name, a comma, a space, and the first name.

// step 1 => reverse
// step 2 => add comma to last name

function swapName(fullName) {
  let reversedNameArr = fullName.split(" ").reverse();
  reversedNameArr[0] = reversedNameArr[0].concat(",");

  return `${reversedNameArr.shift()} ${reversedNameArr.reverse().join(" ")}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"