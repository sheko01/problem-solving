// Last updated: 12/23/2025, 10:42:12 PM
1class Solution {
2public:
3    int reverse(int x) {
4        int rev = 0;
5        while (x != 0) {
6            if (rev > INT_MAX / 10||rev<INT_MIN/10) {
7                return 0;
8            }
9            if (rev == 0) {
10                rev = (x % 10);
11                   x = x / 10;
12            } else {
13                rev *= 10;
14                rev += (x % 10);
15                x = x / 10;
16            }
17        }
18        return rev;
19    }
20};