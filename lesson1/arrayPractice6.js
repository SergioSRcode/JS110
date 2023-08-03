// How does Array.prototype.fill work? 
// Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// Answer
/*
1. Array.prototype.fill is destrictive and mutates the caller
2. Array.prototype.fill replaces the values indicated by parameter 2 - 3 with
   the value of the first parameter
3. here it replaces all elements from index 1 - 5 with the number 1
4. the return value will be the modified array [1, 1, 1, 1, 1]
*/