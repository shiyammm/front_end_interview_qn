var removeDuplicates = function (nums) {
  let removeDuplicates = Array.from(new Set(nums));
  return removeDuplicates.length;
};

console.log(removeDuplicates([1, 1, 2]));

var removeDuplicatesMethod2 = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicatesMethod2([1, 1, 2]));
