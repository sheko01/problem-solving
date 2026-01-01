// Last updated: 1/1/2026, 10:33:32 PM
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
13//  let data;
14var inorderTraversal = function(root) {
15if(!root) return[];
16  let data=[];
17     function traverse(node){
18        if(!node)return;
19        if(node.left)
20         traverse(node.left);
21         data.push(node.val);
22         if(node.right)
23         traverse(node.right);
24     }
25     traverse(root);
26     return data;
27
28};
29
30