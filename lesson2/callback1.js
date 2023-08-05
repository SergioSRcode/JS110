[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// Map out a detailed breakdown for this example
/*

1. Action
  1. method call (map)
  2. callback
  3. element selection ([0])
  4. method call (console.log)

2. Performed on?
  1. outer layer of an array
  2. each element of the array (2)
  3. each sub array
  4. selected element

3. Side Effect
  1. none
  2. none
  3. none
  4. prints to the console

4. Return Value
  1. new array (same amount of elements as caller)
  2. the first element of each sub array (arr[0])
  3. the selected element from each sub array
  4. undefined

5. Is Return Value used?
  1. no
  2. yes, to get the values for the new array.
  3. yes, to print to the console and as the callbacks' return value
  4. no
*/
