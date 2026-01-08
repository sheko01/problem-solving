// Last updated: 1/8/2026, 8:59:22 PM
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
11 * @return {boolean}
12 */
13var isSymmetric = function (root) {
14  const traverse = (r1, r2) => {
15    if (!r1 && !r2) {
16      return true;
17    }
18    if (!r1 || !r2 || r1.val !== r2.val) {
19      return false;
20    }
21    return traverse(r1.left, r2.right) && traverse(r1.right, r2.left);
22  };
23
24  return traverse(root, root);
25};