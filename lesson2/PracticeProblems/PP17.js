// Write a function that takes no arguments and returns a string that contains a UUID.

// Solution should look similar to this:
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'  => 8-4-4-4-12 pattern

//Input: none
//Output: String (random UUID)

// Rules:
/*
- Each UUID consists of 32 hexadecimal characters
  => the digits 0-9 and the letters a-f (as strings)
- value is broken down into 5 sections
  => 8-4-4-4-12 characters
- number is randomized

//Data Structures:
Arrays

//Algorithm:
Pre: Create an empty array for complete UUID. *
1. Create an array of all necessary strings *
  => digits 0-9 and the letters a-f as strings *
    - TOTAL: 16 characters *
2. create 5 nested empty arrays for UUID  *
  2.1.  first = length 8
        second = length 4
        third = length 4
        fourth = length 4
        fifth = length 12
LOOP:
3. get a random integer between (including) 0 - 16 *
  3.1. find array element with index at random integer. *
  3.2. push element to first UUID-Arr with selected element. *
  3.3. repeat until arr length === 8 *
4. refer to 3. for all the other arrays. *
 4.1. end at indicated length from 2.1. *
5. push all UUID parts to the complete UUID arr 
6. turn into string with seperator "-" (join)
7. return string
*/

function getUUID() {
  const COMPLETE_UUID = [[1, 2, 3, 4, 5, 6, 7, 8], 
    [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];
  const PARTS_OF_UUID = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const MAX_NUM = PARTS_OF_UUID.length;

  let arrUUID = COMPLETE_UUID.map(nestedArr => {
    return nestedArr.map(elem => {
      let randomNum = Math.floor(Math.random() * MAX_NUM);
      let randomElement = PARTS_OF_UUID[randomNum];
      return elem = randomElement;
    });
  });

  return arrUUID.join("-").replace(/,/g, "");
}

console.log(getUUID());