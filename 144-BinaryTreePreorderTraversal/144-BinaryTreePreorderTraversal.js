// Last updated: 2/5/2026, 7:04:04 PM
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
13var preorderTraversal = function (root) {
14  let arr = [];
15  if(!root){
16    return [];
17  }
18  let queue = [root];
19  while (queue.length > 0) {
20    let currentNode = queue.shift();
21    arr.push(currentNode.val);
22    if (currentNode.right !== null) {
23      queue.unshift(currentNode.right);
24    }
25    if (currentNode.left !== null) {
26      queue.unshift(currentNode.left);
27    }
28  }
29  return arr;
30};