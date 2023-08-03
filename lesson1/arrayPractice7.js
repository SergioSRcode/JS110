// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// Answer:
/*
1. array ['ant', 'bear'] calls map => new array
2. callback provides one parameter for each element per iteration
3. If statement runs, if length of elem is greater than 3 => elem
4. 1. elem === "ant"; "ant".length => 3; 3 !> 3 => implicitly returns undefined
5. 2. elem === "bear"; "bear".length => 4; 4 > 3 => "bear"
6. returned newArr => [undefined, "bear"];
*/