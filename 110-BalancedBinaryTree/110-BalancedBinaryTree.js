// Last updated: 1/15/2026, 9:15:25 PM
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
13var isBalanced = function (root) {
14  let flag = true;
15  if (!root) {
16    return true;
17  }
18  const traverse = (r) => {
19    if (!r) {
20      return 0;
21    }
22    // if(!flag){
23    //     return;
24    // }
25    const left = traverse(r.left);
26    const right = traverse(r.right);
27    let diff = Math.abs(left - right);
28    if (diff > 1) {
29      flag = false;
30    }
31    return Math.max(left, right) + 1;
32  };
33//   const left = traverse(root.left);
34//   const right = traverse(root.right);
35//   if (!flag) {
36//     return flag;
37//   }
38//   let diff = Math.abs(left - right);
39//   if (diff === 0 || diff === 1) {
40//     return true;
41//   } else {
42//     return false;
43//   }
44  const x = traverse(root);
45  return flag;
46};