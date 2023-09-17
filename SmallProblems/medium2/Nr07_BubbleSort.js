// Write a function that takes an array as an argument and sorts that array 
// using the bubble sort algorithm described above. The sorting should be done 
// "in-place" — that is, the function should mutate the array. 
// You may assume that the array contains at least two elements.

//INPUT: Arr
//OUTPUT: sorted arr

//RR:
/*
- arr should be mutated
- arr contains at least two elements
- use Bubble Sort
  - iterates over an array
  - compares all consecutive element
  - if 2nd is less than 1st => swap
  - after iteration, start again until no changes are made
    during an iteration => stop 
- don't use the sort function

ALGO:
0. declare swap var and init => 0;
1. iterate over arr
  1.1. compare each consecutive value
  1.2. if 2nd > 1st element => swap
  1.3. for each swap => swap += 1
  1.4. check if swap var is truthy
    - yes? go back to 1.
    - no? break out of the loop
2. return arr.
*/

function bubbleSort(arr) {
  let NumOfSwaps = 0;

 do {
  NumOfSwaps = 0;

  arr.forEach((elem, i) => {
    let secondElem = arr[i + 1];

    if (elem > secondElem) {
      arr.splice(arr.indexOf(elem), 2, secondElem, elem);
      NumOfSwaps += 1;
    }
  });
 } while (NumOfSwaps);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


