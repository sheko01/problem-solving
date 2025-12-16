// Last updated: 12/17/2025, 12:07:09 AM
1// The API isBadVersion is defined for you.
2// bool isBadVersion(int version);
3
4class Solution {
5public:
6    int firstBadVersion(int n) {
7      int left = 1;
8        int right = n;
9        
10        while (left < right) {
11            int mid = left + (right - left) / 2;      
12            if (isBadVersion(mid)) {
13                right = mid;
14            } else {
15                left = mid + 1;
16            }
17        }
18        return left;
19    }
20    
21};