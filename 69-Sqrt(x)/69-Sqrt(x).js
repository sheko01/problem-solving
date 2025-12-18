// Last updated: 12/18/2025, 11:22:24 PM
1/**
2 * @param {number} x
3 * @return {number}
4 */
5var mySqrt = function (x) {
6  if (x === 0) {
7    return 0;
8  }
9  if (x === 1) {
10    return 1;
11  }
12
13  function root(x, p, q) {
14    if (p > q) {
15      return q;
16    }
17    let mid = Math.floor((p + q) / 2);
18    if (mid * mid === x) {
19      return mid;
20    }
21    if (mid * mid > x) {
22      return root(x, p, mid - 1);
23    } else {
24      return root(x, mid + 1, q);
25    }
26  }
27
28  return root(x, 0, x);
29// return Math.floor(Math.sqrt(x));
30};
31