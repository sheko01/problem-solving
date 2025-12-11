// Last updated: 12/11/2025, 8:07:54 PM
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6const strStr = function(haystack, needle) {
7  if (needle === '') return 0; 
8  if (haystack.length < needle.length) {
9    return -1;
10  }
11  for (let i = 0; i < haystack.length; i++) {
12    let j;
13    for (j = 0; j < needle.length; j++) {
14      if (haystack[i + j] !== needle[j]) {
15        break;
16      }
17    }
18    if (j === needle.length) {
19      return i;
20    }
21  }
22
23  return -1;
24};