// Last updated: 2/5/2026, 7:04:18 PM
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
11 * @return {number[]}
12 */
13var postorderTraversal = function (root) {
14    if (!root) { return [] }
15    let arr = [];
16    let queue = [root];
17    while (queue.length > 0) {
18        let currentNode = queue.shift();
19        arr.unshift(currentNode.val);
20        if (currentNode.left !== null) {
21            queue.unshift(currentNode.left);
22        }
23        if (currentNode.right !== null) {
24            queue.unshift(currentNode.right);
25        }
26    }
27    return arr;
28};