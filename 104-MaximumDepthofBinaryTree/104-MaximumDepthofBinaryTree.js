// Last updated: 1/8/2026, 8:59:36 PM
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
13// var maxDepth = function (root) {
14//   let max = 0;
15//   let counter = 0;
16
17//   const traverse = (root, counter) => {
18//     if (!root) {
19//       return;
20//     }
21//     counter++;
22
23//     if (!root.left && !root.right) {
24//       max = Math.max(counter, max);
25
26//       return;
27//     }
28//     traverse(root.left, counter);
29//     traverse(root.right, counter);
30//   };
31
32//   traverse(root, counter);
33
34//   return max;
35// };
36var maxDepth = function (root) {
37  const traverse = (root) => {
38    if (!root) {
39      return 0;
40    }
41    const leftDepth = traverse(root.left);
42    const rightDepth = traverse(root.right);
43    return Math.max(leftDepth, rightDepth) + 1;
44  };
45  
46  return traverse(root);
47};
48