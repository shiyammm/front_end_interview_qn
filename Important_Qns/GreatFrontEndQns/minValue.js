const minBy = (array, iteratee) => {
  if (!array || !array.length) return undefined;

  let minElement = array[0];
  let minValue = iteratee(minElement);

  for (let i = 1; i < array.length; i++) {
    const value = iteratee(array[i]);
    if (value != null && value < minValue) {
      minElement = array[i];
      minValue = value;
    }
  }

  return minElement;
};

console.log(minBy([2, 3, 1, 4], (num) => num)); // Output: 1
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)); // Output: { n: 1 }
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // Output: undefined
