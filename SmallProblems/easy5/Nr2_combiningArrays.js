//Combine two arrays and avoid any duplicates even if there were
// dublicates in the original arr

function union(arr1, arr2) {
  newArr = arr1.concat(arr2);
  result = [];
  
  newArr.forEach(num => {
    if (!result.includes(num)) result.push(num);
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]