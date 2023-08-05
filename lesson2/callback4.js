[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});



// => [ { c: 'cat', d: 'dog' } ]

// we have an array of objects, and we want to select all of the elements 
// where every key matches the first letter of the value.

/*
Action
  1. method call (filter)
  2. callback
  3. method call (Object.keys)
  4. method call (every)
  5. callback
  6. Selection (object[key][0])
  7. first letter of value === key

Action performed on
  1. first layer of array
  2. each object/element within the array
  3. each object/element of arr
  4. Array of keys of both objects/elements
  5. each element of the Array of keys
  6. current object on each iteration
  7. current object on each iteration


Side Effect
  1. none
  2. none
  3. none
  4. none
  5. none
  6. none
  7. none

Return value
  1. new Array (with filtered values)
  2. each object/element filtered 
  3. Array of keys of the current object/element
  4. boolean
  5. boolean
  6. first letter of each value
  7. boolean

Is return value used?
  1. no
  2. it is used by filter for Selection
  3. Yes, to call "every"
  4. Yes, it is explicitly returned to the filters callback
  5. Yes, it is used by every to see whether every returns true or false
  6. Yes, it is compared against the key argument
  7. Yes, serves as value for the callback during each iteration
*/