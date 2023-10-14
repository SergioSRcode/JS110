// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = Object.values(ages).sort((a, b) => a - b)[0];

console.log(minAge);

// result with for loop

// let values = Object.values(ages);
// let minAge = values[0];

// for (let i = 0; i < values.length; i++) {
//   if (minAge > values[i]) minAge = values[i];
// }

// console.log(minAge);