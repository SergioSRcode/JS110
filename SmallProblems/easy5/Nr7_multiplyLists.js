function multiplyList(arr1, arr2) {
  let result = [];

  arr1.forEach((num, i) => result.push(num * arr2[i]));

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]