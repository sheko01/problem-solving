// Last updated: 1/8/2026, 8:59:08 PM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} p
11 * @param {TreeNode} q
12 * @return {boolean}
13 */
14var isSameTree = function (p, q) {
15
16    // if (!p && !q) {
17    //     return true; // Both nodes are null
18    // }
19    // if (!p || !q) {
20    //     return false; // One of the nodes is null
21    // }
22    // if (p.val !== q.val) {
23    //     return false; // Node values are different
24    // }
25    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
26
27
28    let x;
29    if (!p && !q) {
30      return (x = true);
31    }
32    if (!(p && q && p.val === q.val)) {
33      return (x = false);
34    }
35
36    x = isSameTree(p.left, q.left);
37    
38    if (x) {
39      x = isSameTree(p.right, q.right);
40    }
41
42    return x;
43  
44};
45
46