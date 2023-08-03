// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

// Answer
/*
1. we call the filter method on an array [1, 2, 3]
2. the callback function of the filter provides the "num" parameter
   which represents with each iteration each element of the calling array
3. The sorting criteria for filter ("hi") doesn't compare to the value of num.
4. But the criteria is still truthy.
5. Since it is truthy and no filtering criteria affects num, the return arr
   will have the same elements as the calling arr.

   [1, 2, 3]
*/