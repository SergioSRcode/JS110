// The following code differs slightly from the last code. 
// What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);

//Answer:
/*
1. this time, the curly braces are omitted allowing implicit return
2. The product of num * num will be returned on each iteration
3. return value = [1, 4, 9]
*/