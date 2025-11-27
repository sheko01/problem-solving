// Last updated: 11/27/2025, 4:54:35 PM
1class Solution {
2public:
3    bool isPowerOfTwo(int n) {
4        if (n <1)
5            return false;
6        
7        double x = log2(n);
8        if (x * 10 == ((int)x * 10))
9            return true;
10        else
11            return false;
12    }
13};