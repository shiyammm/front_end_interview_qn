const validAnagram = (s, t) => {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
};

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));

const validAnagram2 = (s, t) => {
};

console.log(validAnagram2('anagram', 'nagaram'));
console.log(validAnagram2('rat', 'car'));
