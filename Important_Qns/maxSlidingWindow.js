/* 
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1] */

const maxSlidingWindowNaive = (nums, k) => {
  let result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[j + i] > max) {
        max = nums[j + i];
      }
    }
    result.push(max);
  }
  return result;
};

// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

const maxSlidingWindow = (nums, k) => {
  let result = [];
  let dequeue = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue > 0 && dequeue[0] <= i - k) dequeue.shift();
    while (dequeue.length > 0 && dequeue[dequeue.length - 1] < nums[i]) {
      dequeue.pop();
    }
    dequeue.push(i);
    if (i >= k - 1) {
      result.push(nums[dequeue[0]]);
    }
  }
  return result;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

/* 
  Code Explanation:

  Step 1: Initialization

  Result: Initialize an empty array result to store the maximum values from each window.
  Deque: Initialize an empty deque (array) dequeue to keep track of the indices of elements.
  Step 2: Iteration and Deque Manipulation
  Iterate through each element in the array using a loop (for (let i = 0; i < nums.length; i++)).
  Iteration 1 (i = 0):

  Dequeue: Since there is no element in dequeue yet, add the current index 0 to dequeue.
  Result: Since i is less than k - 1 (2), no maximum value is added to result.
  Iteration 2 (i = 1):

  Dequeue: Remove elements from the back of the dequeue that are less than nums[i] (3), leaving dequeue empty. Then add the current index 1 to dequeue.
  Result: Since i is still less than k - 1 (2), no maximum value is added to result.
  Iteration 3 (i = 2):

  Dequeue: Remove elements from the back of dequeue that are less than nums[i] (-1). In this case, none are removed, and index 2 is added to dequeue.
  Result: Now, i is greater than or equal to k - 1 (2). Add nums[dequeue[0]] (which is 3) to result. The result array becomes [3].
  Iteration 4 (i = 3):

  Dequeue: Remove elements from the front of dequeue that are outside the current window (i - k), resulting in dequeue being empty. Add the current index 3 to dequeue.
  Result: Add nums[dequeue[0]] (which is 3) to result. The result array becomes [3, 3].
  Iteration 5 (i = 4):

  Dequeue: Add the current index 4 to dequeue. Since nums[i] (5) is greater than nums[dequeue[0]] (-3), remove elements from the back of dequeue until you reach the current element.
  Result: Add nums[dequeue[0]] (which is 5) to result. The result array becomes [3, 3, 5].
  Iteration 6 (i = 5):

  Dequeue: Add the current index 5 to dequeue. Since nums[i] (3) is less than nums[dequeue[0]] (5), nothing is removed from the back of dequeue.
  Result: Add nums[dequeue[0]] (which is 5) to result. The result array becomes [3, 3, 5, 5].
  Iteration 7 (i = 6):

  Dequeue: Add the current index 6 to dequeue. Since nums[i] (6) is greater than nums[dequeue[0]] (3), remove elements from the back of dequeue until you reach the current element.
  Result: Add nums[dequeue[0]] (which is 6) to result. The result array becomes [3, 3, 5, 5, 6].
  Iteration 8 (i = 7):

  Dequeue: Add the current index 7 to dequeue. Since nums[i] (7) is greater than nums[dequeue[0]] (6), remove elements from the back of dequeue.
  Result: Add nums[dequeue[0]] (which is 7) to result. The result array becomes [3, 3, 5, 5, 6, 7].
  Final Result
  The function returns the final result array, which is [3, 3, 5, 5, 6, 7], representing the maximum values in each sliding window.

*/
