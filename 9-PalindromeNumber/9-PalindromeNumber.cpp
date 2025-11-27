// Last updated: 11/27/2025, 4:50:39 PM
1class Solution {
2public:
3    bool isPalindrome(int x) {
4        long reversed = 0, original = x;
5        if (x < 0)
6            return false;
7        while (x != 0) {
8            long digit = x % 10;
9            reversed = reversed * 10 + digit;
10            x /= 10;
11        }
12        return reversed == original;
13    }
14};