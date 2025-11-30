// Last updated: 11/30/2025, 10:30:52 PM
1class Solution {
2public:
3    int addDigits(int num) {
4
5        if (num % 9 == 0 && num != 0) {
6            return 9;
7        } 
8        
9            return num % 9;
10    };
11};