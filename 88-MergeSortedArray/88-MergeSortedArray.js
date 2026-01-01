// Last updated: 1/1/2026, 10:33:18 PM
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function (nums1, m, nums2, n) {
9  for (let i = 0; i < n; i++) {
10    nums1[i + m] = nums2[i];
11  }
12
13  return nums1.sort((a, b) => a - b);
14};