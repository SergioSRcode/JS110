[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

// => [[[2, 3], [4, 5]], [6, 7]]


/*
Action
  1. method call (map) 
  2. callback
  3. method call (map2)
  4. callback
  5. conditional typeof elem === 'number'
    5.1. elem + 1
  6. conditional else => method call (map3)
  7. callback
    7.1. number + 1

performed on
  1. first layer of array
  2. each mid level array element
  3. each mid level array element
  4. each third layer element [1, 2], [3, 4], 5, 6
  5. [1, 2], [3, 4], 5, 6
    5.1. the elements 5, 6
  6. [1, 2], [3, 4]
  7. inner elements 1, 2, 3, 4
    7.1. 1, 2, 3, 4


side effects


return value
  1. [elem, elem]
  2. one element per iteration
  3. [elem] [elem]
  4. one element per iteration
  5. false, false, true, true // => 5, 6
    5.1. 6, 7
  6. two arrays
  7. each element transformed
    7.1. => 2, 3, 4, 5

is return value used?
  1. no
  2. yes, returned to map for transformation
  3. yes, returned to 1st maps' callback
  4. yes, returned to 2nd map
  5. yes, to perform following if expression
    5.1. yes, returned to 2nd map callback
  6. yes, returned to 2nd map callback
  7. yes returned to 3rd map
    7.1. yes, returned to 3rd map callback





*/