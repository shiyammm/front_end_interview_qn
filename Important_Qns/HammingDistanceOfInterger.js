/*
    Hamming Distance

    The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

    Given two integers x and y, return the Hamming distance between them.

    Example 1:

    Input: x = 1, y = 4
    Output: 2
    Explanation:
    1   (0 0 0 1)
    4   (0 1 0 0)
        ↑   ↑
    The above arrows point to positions where the corresponding bits are different.
    Example 2:

    Input: x = 3, y = 1
    Output: 1

*/

const HammingDistanceOfInteger = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);

  const maxLength = Math.max(x.length, y.length);

  x = x.padStart(maxLength, 0);
  y = y.padStart(maxLength, 0);

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(HammingDistanceOfInteger(93, 73));
