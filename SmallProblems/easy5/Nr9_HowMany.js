// Write a function that counts the number of occurrences of each element in a given array.
// Once counted, log each element alongside the number of occurrences. 
// Consider the words case sensitive e.g. ("suv" !== "SUV").

function countOccurences(vehicles) {
  let nonDuplicates = {};

  vehicles = vehicles.map(elem => elem.toLowerCase());

  vehicles.forEach(vehicle => nonDuplicates[vehicle] = (nonDuplicates[vehicle] + 1) || 1);

  Object.keys(nonDuplicates).forEach(key => console.log(`${key} => ${nonDuplicates[key]}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
suv => 2
motorcycle => 2