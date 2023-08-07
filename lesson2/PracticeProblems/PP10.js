// Perform the same transformation of sorting the subarrays we did in the previous exercise 
// with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(nestedArr => {
  if (typeof nestedArr[0] === "number") {
    return nestedArr.sort((a, b) => b - a);
  } else {
    return nestedArr.sort().reverse();
  }
})

console.log(newArr);