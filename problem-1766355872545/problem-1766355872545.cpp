// Last updated: 12/22/2025, 12:24:32 AM
1class Solution {
2public:
3    int findMin(vector<int>& nums) {
4        int left = 0;
5        int right = nums.size() - 1;
6        int mid;
7        while (left < right) {
8            mid = left + (right - left) / 2;
9
10            if (nums[mid] > nums[right]) {
11                left = mid + 1;
12            } 
13       
14                
15          else {
16 
17                right = mid ;
18            }
19        }
20        return nums[left];
21    }
22};