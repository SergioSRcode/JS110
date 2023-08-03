// What is the callback's return value in the following code? 
// Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// Answer:
/*
1. the array [1, 2, 3] invokes the every method.
  - the every method checks for truthiness 
  - all elements within the array must be truthy according to "criteria"
2. callback provides one parameter (one element each per iteration)
3. in the return statement, num is reassigned to num * 2
  - the callback's return value is the following: 1It = 2; 2It = 4; 3It = 6
  - every returns true as all return values of the callback are truthy.
*/