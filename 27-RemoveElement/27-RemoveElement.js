// Last updated: 12/11/2025, 8:07:37 PM
1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6const removeElement = function(nums, val) {
7  let j = 0;
8  for (let i = 0; i < nums.length; i++) {
9    if (nums[i] !== val) {
10      nums[j] = nums[i];
11      j++;
12    }
13  }
14  nums.length = j;
15  console.log(nums);
16  return j;
17};