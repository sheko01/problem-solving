// Last updated: 1/15/2026, 9:15:37 PM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {number}
12 */
13var minDepth = function (root) {
14  if (!root) {
15    return 0;
16  }
17  const traverse = (root) => {
18    if (!root) {
19      return Infinity;
20    }
21    if (!root.left && !root.right) {
22      return 1;
23    }
24    const left = traverse(root.left);
25    const right = traverse(root.right);
26    return Math.min(left, right) + 1;
27  };
28
29  return traverse(root);
30};