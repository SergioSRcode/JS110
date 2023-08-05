let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
// 18, 7, 12
// [undefined, undefined] [undefined, undefined]
// undefined
// myArr => undefined

// Map out a detailed breakdown for this example
/*

1. Action
  1. method call (forEach)
  2. callback
  3. method call (map 1st iteration of forEach)
  4. method call (map 2nd iteration of forEach)
  5. callback
  6. conditional (num > 5)
  7. method call (console.log)

2. Performed on?
  1. outer layer of calling array  
  2. each sub array (elements of outer array)
  3. sub array (myArr[0])
  4. sub array (myArr[1])
  5. each element within the sub arrays
  6. each element within the sub arrays
  7. each element within the sub arrays

3. Side Effect
  1. none
  2. none
  3. none
  4. none
  5. none
  6. none
  7. prints to the console

4. Return Value
  1. undefined
  2. [undefined, undefined] ??
  3. [undefined, undefined]
  4. [undefined, undefined]
  5. undefined (console.log)
  6. boolean
  7. undefined

5. Is Return Value used?
  1. yes, stored in variable "myArr"
  2. no
  3. Yes, returned by the outer callback
  4. Yes, returned by the outer callback
  5. yes, used to transform the array
  6. Yes, evaluated by if
  7. explicitly returned to map

*/
