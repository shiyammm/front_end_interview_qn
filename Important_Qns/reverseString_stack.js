// Given an input string s, reverse the order of words and remove if there is any extra whitespace.
// Input : "the sky is blue" -----> Output: "blue is sky the"
// Input : " Hello   World " -----> Output: "World Hello"

// Using stack method
const reverseString = (s) => {
  const splitString = s.split(' ');

  const stack = [];
  for (let string of splitString) {
    stack.push(string);
  }
  let finalString = '';
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finalString += ' ' + current;
    }
  }
  return finalString.trim();
};
console.log(reverseString('the sky is blue'));
