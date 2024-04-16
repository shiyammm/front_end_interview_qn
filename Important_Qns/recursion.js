// Factorial

// Eg: n = 5 --> 5*4*3*2*1

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// console.log(factorial(5));

// Create an array using range of numbers
// Input start , end

const rangeOfNumbers = (start, end) => {
  if (end < start) {
    return [];
  } else {
    const numbers = rangeOfNumbers(start, end - 1);
    numbers.push(end);
    return numbers;
  }
};
// console.log(rangeOfNumbers(0, 5));

// Given an integer x, return true if it's a palindrome and false otherwise
// Eg : 121 === > true

const isPalindrome = (x) => {
  const str = x.toString();
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
};

console.log(isPalindrome(121)); // Output: true
