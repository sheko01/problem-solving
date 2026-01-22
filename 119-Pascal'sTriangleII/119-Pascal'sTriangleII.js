// Last updated: 1/22/2026, 3:51:59 PM
1/**
2 * @param {number} rowIndex
3 * @return {number[]}
4 */
5var getRow = function (rowIndex) {
6  let row = new Array(rowIndex + 1);
7  row[0] = 1;
8
9  for (let i = 1; i <= rowIndex; i++) {
10    row[i] = row[i - 1] * (rowIndex - i + 1) / i;
11  }
12
13  return row;
14};
15