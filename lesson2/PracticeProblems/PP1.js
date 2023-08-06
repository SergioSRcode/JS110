// How would you order the following array of number strings 
// by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

let sortedarr = arr.slice().sort((a, b) => Number(b) - Number(a));
console.log(sortedarr);
console.log(arr);

// The Number() function is not necessary but recommended for clarity.
// The binary - operator implicitly coerces its operands to numbers