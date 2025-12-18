// Last updated: 12/18/2025, 11:21:24 PM
1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    let i = digits.length-1;
7        while(i!==-1){
8    if(digits[i]!==9){
9        digits[i]=digits[i]+1;
10      break;
11    }else{
12            digits[i]=0;
13            i--;
14            }
15        }
16            if(i===-1){
17                digits.unshift(1);
18                // digits.push(0);
19    }
20    return digits;
21};