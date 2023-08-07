// Given the following data structure write some code to return an array containing 
// the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// Input = object
// Goal = Get colors of fruits and sizes of vegetables
// Output = Array

// Rules
/*
- return value should be an array
- get colors only of the fruits
  - capitalized => Red
  - nested arrs with colors stay as arrays

- get sizes only of vegetables
  - uppercase => MEDIUM

- order remains unchanged


// Data Structures:
Arrays

// Algorithm:

1. Create Empty Array *
2. Iterate over Obj keys *
  2.1. create an array for each key with only the values *
  e.g. "grape" => [ 'fruit', [ 'red', 'green' ], 'small' ]
3. Iterate over values of nested arr
  3.1. if arr[0] === "fruit"
    => iterate over each element of arr[1] by creating a new arr 
      - push each element first letter => uppercase + rest to empty arr
  3.2. if arr[0] !== "fruit"
    => push uppercase version of arr[2] to empty arr
4. return arr

*/
// CODE

function CFruitsSVegies(obj) {
  const NEW_ARR = [];

  for (let key in obj) {
    let values = Object.values(obj[key]);
      
      if (values[0] === "fruit") {
        let colors = values[1].map(color => color[0].toUpperCase() + color.slice(1));
        
        NEW_ARR.push(colors);
        
      } else {
        NEW_ARR.push(values[2].toUpperCase());
      }
  }
  return NEW_ARR;
}

console.log(CFruitsSVegies(obj));

// LS solution
/*
 let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
}); 
 */