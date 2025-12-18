// Last updated: 12/18/2025, 11:21:16 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    
7    const x=s.trim().split(' ');
8    const length=x[x.length-1]
9    // console.log(length.length)
10    return length.length
11};