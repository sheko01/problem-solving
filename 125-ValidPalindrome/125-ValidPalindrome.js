// Last updated: 1/22/2026, 3:52:29 PM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function (s) {
6  let phrase = s.toLowerCase();
7  phrase = phrase.split(/[^a-zA-Z0-9]/g).join("");
8  let j = phrase.length - 1;
9  let i = 0;
10  while (i < j) {
11    if (phrase[i] !== phrase[j]) {
12      return false;
13    }
14    i++;
15    j--;
16  }
17  return true;
18};