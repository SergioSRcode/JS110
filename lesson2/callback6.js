[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

/*
Action
  1. method call (map)
  2. callback
  3. method call (forEach)
  4. callback
  5. method call (filter)
  6. callback
  7. comparison element.length > 0

Performed on
  1. first layer of array
  2. each array/element of the first layer [[1], [2], [3], [4]], [['a'], ['b'], ['c']]
  3. each element on the mid layer of array [[1], [2], [3], [4]], [['a'], ['b'], ['c']]
  4. each element on the third layer of array [1], [2], [3], [4], ['a'], ['b'], ['c']
  5. each element on the third layer of array [1], [2], [3], [4], ['a'], ['b'], ['c']
  6. each inner element
  7. each inner element

Side Effect


Return Value
  1. Array containing two elements
  2. One element on each iteration
  3. undefined
  4. undefined
  5. new Array(s)
  6. boolean
  7. boolean

Is Return value used?
  1. no
  2. yes, passed to map for transformation
  3. yes, passed to the callback of map
  4. yes, passed to forEach method
  5. yes, passed to forEach callback
  6. yes, passed to filter method
  7. yes, passed to filter callback

*/