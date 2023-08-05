[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

// [2, 4] => inner map
// [6, 8] => inner map
// explicit return to outer map [2,4] and [6, 8]
// return outer map => [[2, 4], [6, 8]]


/*
Action:
  1. method call (map)
  2. callback
  3. method call (map)
  4. callback

Perfomed on:
  1. outer layer of array
  2. each element within the outer array
  3. inner layer of array [1, 2] and [3, 4]
  4. each element within the inner array (1, 2) and (3, 4)

Side Effect
  1. none
  2. none
  3. none
  4. none

Return Value
  1. array with same amount of elements as caller
  2. each element for the new array
  3. transformed inner arrays 
  4. current element (num) * 2

Is return value used?
  1. no
  2. Yes, used by map for transformation of the array
  3. Yes, explicitly returned to the outer map method
  4. Yes, used to get the new element values for map
   



*/