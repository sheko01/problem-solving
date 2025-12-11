// Last updated: 12/11/2025, 8:07:14 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5function removeDuplicates(nums) {
6    let j = 0;
7    for (let i = 1; i < nums.length; i++) {
8        if (nums[j] === nums[i]) {
9            nums[i] = '_';
10        } else {
11            j++;
12            if (j !== i) {
13                let b = nums[j];
14                nums[j] = nums[i];
15                nums[i] = '_';
16            }
17        }
18    }
19
20    console.log(nums);
21
22    return j + 1;
23}
24// console.log(removeDuplicates(nums));
25