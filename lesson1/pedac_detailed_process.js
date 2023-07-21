/*

Imagine a sequence of consecutive even integers beginning with 2. The integers
are grouped in rows, with the first row containing one integer,
the second row two integers, the third row three integers, and so on.
Given an integer representing the number of a particular row,
return an integer representing the sum of all the integers in that row.

- Sequence of even integers
- Sequence begins with two
- Integers are consecutive
- Sequence is grouped into rows
- Each row is incrementally larger: 1, 2, 3, ...
- Row "number" equals the number of elements in the row
  - Row 1 has 1 element, row 2 has 2 elements, ...
- Input: a single integer
  - Indentifies a "row", which is a subset of a sequence of integers.
- Output: a single integer
  - The sum of the integers in the row identified by input integer

- Sequence:
2, 4, 6, 8, 10, 12, 14, 16, ...

2 --> 2
4, 6 --> 10
8, 10, 12 --> 30
14, 16, 18, 20 --> 68
...

- How do we create the structure?

**Examples**

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number: 4 --> sum of integers in row: 68

**Data Structure**

2 --> 2
4, 6 --> 10
8, 10, 12 --> 30
14, 16, 18, 20 --> 68
...

- Overall structure represents a sequence as a whole
- Individual rows within overall structure
- Individual rows in a set order in context of sequence
- Individual rows contain integers
- Can assume that integers are in a set order in the context of the sequence.

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ...
]

**Algorithm**

1. Create an empty "rows" array to contain all of the rows.
2. Create a "row" array and add it to the overall "rows" array.
3. Repeat step 2 until all the necessary rows have been created.
  - All rows have been created when the length of the "rows" arr is 
    equal to the input integer
4. Sum the final row.
5. Return the sum.


*Problem: Create a Row*


Rules: 
- Row is an array
- Array contains integers
- Integers are consecutive even numbers
- Integers in each row form a part of an overall larger sequence.
- Rows are of different lengths
- Input: information needed to create the output
  - the starting integer
  - length of the row
- Output: The row itself: [8, 10, 12]


Examples:
start: 2, length: 1 --> [2]
start: 4, length: 2 --> [4, 6]
start: 8, length: 3 --> [8, 10, 12]

Data structures:
- An array of integers

Algorithm:
1. Create an empty "row" array to contain the integers
2. Add the starting integer
3. increment starting integer by 2 to get the next integer in sequence.
4. repeat step 2 + 3 until array has reached the correct length
5. return the "row" array.

Start the loop
  - Add startInteger to row array
  - increment startInteger by 2
  - break out of loop if length of row arr equals rowLength.

Calculating starting integer for sumEvenNumberRow function:
Rule: First integer of row equal to last integer of preceding row + 2

Algorithm:
============
- Get the last row from the rows array
- Get the last integer of that row
- add 2 to the integer

*/

function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
    
  }
  return rows[rows.length - 1].reduce((acc, integer) => acc + integer, 0); // TODO: sum final row and return the sum
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;
}

// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]