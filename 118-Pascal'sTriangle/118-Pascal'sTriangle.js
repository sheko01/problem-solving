// Last updated: 1/15/2026, 9:16:01 PM
1/**
2 * @param {number} numRows
3 * @return {number[][]}
4 */
5var generate = function (numRows) {
6  let arr = [[1]];
7  let i = 0;
8
9  while (i < numRows-1) {
10    let a = arr[i];
11    // console.log(a);
12    let z = [1];
13    for (let y = 0; y < a.length - 1; y++) {
14      z.push(a[y] + a[y + 1]);
15    }
16    z.push(1);
17    arr.push(z);
18    i++;
19  }
20  return arr;
21};