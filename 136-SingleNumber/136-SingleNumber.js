// Last updated: 1/22/2026, 3:52:41 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function (nums) {
6    //   let obj = {};
7    //   for (let i = 0; i < nums.length; i++) {
8    //     if (obj[nums[i]]) {
9    //       obj[nums[i]] = obj[nums[i]] + 1;
10    //     } else {
11    //       obj[nums[i]] = 1;
12    //     }
13    //   }
14    //   let arr = Object.keys(obj);
15    //   for (let i = 0; i < arr.length; i++) {
16    //     if (obj[arr[i]] === 1) {
17
18    //       return arr[i] * 1;
19    //     }
20    //   }
21//  var singleNumber = function(nums) {
22    let xor = nums[0];
23    for (let i = 1; i < nums.length; i++) {
24        xor ^= nums[i];
25    }
26    return xor;
27};
28
29// };