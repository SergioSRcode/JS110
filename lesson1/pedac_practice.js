/*
Problem:
==============
You have a number of building blocks that can be used to build a valid structure. 
There are certain rules about what determines the validity of a structure:

Write a program that, given the number for a specific amount of cubes, 
calculates the number of blocks left over after building the tallest possible valid structure.


Understanding the Problem:
=============================

Input: number (for a specific amount of cubes)
Goal: Build the tallest possible structure with cubes / blocks * input number
Output: number (of leftover blocks)

Explicit rules that determine validity of a structure:
==================
- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks



Implicit rules:
==================
- Layer number correlates with blocks in a layer
  - Layer number x Layer number = number of blocks in layer
- No leftovers when input === 0.

Questions:
===========
- Can we add more blocks to a layer than is necessary to support the layer above and
  that layer still be valid?
  => No, it must be the exact number, else => leftover.
- Will there always be left-over blocks?
  => No, only when requirements are not met.
- what is a valid structure?
  => One that adheres strictly to the rules. Leftovers are not part of the structure.
- what is defined as a leftover block?
  => when requirements are not met, blocks that don't meet the requirements are considered
    leftover blocks.
- When no input given, should we assume the input is 0?


   ____
 /___ /|
|    | |
|____|/ 
    ____ ____
  /___ /____/|
 /____/____/|| 
|    |    | |/
|____|____|/ 



Test cases:
=================
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true


Data Structure:
==================

- Perhaps nested arrays representing the structure?
  - Each subarray could represend a layer

[
  [x],
  [x, x, x, x],
  [x, x, x, x, x, x, x, x, x],
  ...
]


Algorithm (high-level):
===========================
Input: number (for a specific amount of cubes)
Goal: Build the tallest possible structure with cubes / blocks * input number
Output: number (of leftover blocks)

1. Get a number input
1.1. Get the first square value that's greater than input number
      - starting from 1 = 1, 2 = 4, 3 = 9 ...

1.2. Create nested arrays from the iteration each counting up to the next highest square number 
      up to including the square number calculated in 1.1.
      => [[0], [1], [1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9], [...]];


2. check if input is a square value 
  => arr[i][arr[i].length - 1] === input
  - if true => no leftovers
3. if input is not a square value
  - get layer number of first occurance
4. calculate input - previous square value to get the leftover value.
5. return leftover value

*/

// Code with intend

function getHighestSquareNum(num) {
  const layer0 = 0;
  let currentLayer = layer0;
  let cubesPossibleOnLayer = currentLayer * currentLayer;

  while (cubesPossibleOnLayer < num) {
    currentLayer += 1;
    cubesPossibleOnLayer = currentLayer * currentLayer;
  }

  return cubesPossibleOnLayer
}

function leftoverCubes(num) {
  const cubesPossibleOnLayer = getHighestSquareNum(num);
  const layerStructure = [];
  let layerSum;

  for (let i = 0; i < cubesPossibleOnLayer; i++) {
    let lastLayer = Math.sqrt(i);

    if (lastLayer % 2 === 0) continue; 

    layerStructure.push(i);
  }

  layerSum = layerStructure.reduce((acc, num) => acc + num, 0);

  if (layerSum === num) return 0;

  return cubesPossibleOnLayer - layerStructure[layerStructure.length - 1];

}

function calculateLeftoverBlocks(num) {
  const leftOver = leftoverCubes(num);

  return leftOver;
}

leftoverCubes(4);

console.log(calculateLeftoverBlocks(0)); // 0
console.log(calculateLeftoverBlocks(1)); // 0
console.log(calculateLeftoverBlocks(2)); // 1
console.log(calculateLeftoverBlocks(4)); // 3
console.log(calculateLeftoverBlocks(5)); // 0
console.log(calculateLeftoverBlocks(6)); // 1
console.log(calculateLeftoverBlocks(14)); // 0


// getSquareNum(0);  // => 0, 0, 0
// getSquareNum(1);  // => 1, 1, 1
// getSquareNum(2);  // => 2, 2, 4
// getSquareNum(4);  // => 4, 2, 4
// getSquareNum(5);  // => 5, 3, 9