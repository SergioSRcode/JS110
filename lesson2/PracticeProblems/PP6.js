// Given this previously seen family object, print the name, age, and gender of each family member:
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// solution
const keys = Object.keys(munsters);

for (let i = 0; i < keys.length; i++) {
  let currentKey = keys[i];
  
  let name = currentKey;
  let age = munsters[currentKey]["age"];
  let gender = munsters[currentKey]["gender"];

  console.log(`${name} is a ${age}-year-old ${gender}`);
}

// lS solution
/*
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});
 */