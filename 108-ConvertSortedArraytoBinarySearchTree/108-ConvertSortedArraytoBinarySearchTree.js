// Last updated: 1/8/2026, 8:59:45 PM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} nums
11 * @return {TreeNode}
12 */
13var sortedArrayToBST = function (nums) {
14  if (nums.length === 0 || nums[0] === null) return null;
15  function bst(nums, p, q) {
16    if (p > q) {
17      return null;
18    }
19    let mid = Math.floor((p + q) / 2);
20    let node = new TreeNode(nums[mid]);
21    node.left = bst(nums, p, mid - 1);
22    node.right = bst(nums, mid + 1, q);
23
24    return node;
25  }
26
27  return bst(nums, 0, nums.length - 1);
28};