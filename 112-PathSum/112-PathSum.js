// Last updated: 1/15/2026, 9:15:49 PM
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
11 * @param {number} targetSum
12 * @return {boolean}
13 */
14var hasPathSum = function (root, targetSum) {
15    let sum = 0;
16    let flage = false;
17    const traverse = (root) => {
18        if (!root) {
19            return;
20        }
21        sum += root.val;
22        
23        if (!root.left && !root.right) {
24            if (sum === targetSum) {
25                flage = true;
26            }
27        }
28        traverse(root.left);
29        traverse(root.right);
30        sum -= root.val;
31
32    };
33    traverse(root);
34
35    return flage;
36};