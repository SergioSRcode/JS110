// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

//Answer
/*
1. the map array method is called on the arr [1, 2, 3]
2. the callback function within the map method multiplies each element by itself
3. the product of each element would each be an element of the new array.
4. However the return keyword is missing and the use of curly baces omits implicit return.
5. As it is not definied, what will be returned, the return value for each
   iteration will be undefined.
6. Return value = [undefined, undefined, undefined]
*/