/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).*/

const fibonacci = (num) => {
  let arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
};

console.log(fibonacci(10));





// Recursion Method.

const fibRecur = (n) => {
  if (n <= 1) return n;

  return fibRecur(n - 1) + fibRecur(n - 2);
};

console.log(fibRecur(10));
