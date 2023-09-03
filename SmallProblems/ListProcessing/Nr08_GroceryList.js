// Write a function that takes a grocery list in a two-dimensional 
// array and returns a one-dimensional array. 
// Each element in the grocery list contains a fruit name and a 
// number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times equal to its desired quantity.

function buyFruit(arr) {
  let fruits = [];
 
  for (let i = 0; i < arr.length; i++) {
    while (arr[i][1] > 0) {
      fruits.push(arr[i][0]);
      arr[i][1]--;
    }
  }
  
  return fruits
}

// function buyFruit(arr) {
//   let result = [];

  
// }

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"])