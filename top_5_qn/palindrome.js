// An integer is a palindrome when it reads the same forward and backwards.

// Eg: input 121 = Output true
//      input 10 = Output false

/*
  First we're converting the number to string so that we can reverse it, 
  and then we're splitting it so that it will become an array 
  so that we can use the reverse method and then we're joining it 

  */
const isPalindromeMethod1 = (num) =>
  num === +num.toString().split('').reverse().join('');
console.log(isPalindromeMethod1(121));
console.log(isPalindromeMethod1(10));

// Second Solution to make it even more effective

const isPalindromeMethod2 = (num) =>
  num < 0 ? false : num === +num.toString().split('').reverse().join('');
console.log(isPalindromeMethod2(121));
console.log(isPalindromeMethod2(10));
