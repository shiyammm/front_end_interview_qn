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

// console.log(isPalindrome(121)); // Output: true

// Fibonaci
// F(n) = F(n-1) + F(n-2)

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// console.log(fibonacci(10));

// "hello" ===> "olleh"

const reverseString = (str) => {
  if (str === '') {
    return '';
  } else return reverseString(str.substr(1) + str.charAt(0));
};

console.log(reverseString('hello'));
