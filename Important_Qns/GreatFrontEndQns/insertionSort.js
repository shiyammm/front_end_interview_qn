// Insertion Sort
/* Implement a function that performs an insertion sort. The function should take in an array of integers 
     and return an array with the integers sorted in ascending order. The input array is modified. */
const insertionSort = (arr) => arr.sort((a, b) => a - b);
console.log(insertionSort([9, 3, 6, 2, 1, 11]));

