// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

function computeMaleAge(obj) {
  let keys = Object.keys(obj);
  // let sumOfAge = 0;

  // return keys.reduce((acc, key) => {
  //   if (obj[key]["gender"] === "male") {
  //     return acc + obj[key]["age"];
  //   } else {
  //     return acc + 0;
  //   }
  // }, 0);

 return keys.filter(key => obj[key]["gender"] === "male")
            .reduce((acc, key) =>  acc + obj[key]["age"], 0);

  // keys.forEach(key => {
  //   if (obj[key]["gender"] === "male") {
  //     sumOfAge += obj[key]["age"];
  //   }
  // });

  // return sumOfAge;
}

console.log(computeMaleAge(munsters));