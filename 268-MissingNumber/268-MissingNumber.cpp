// Last updated: 12/5/2025, 3:13:21 PM
1class Solution {
2public:
3    int missingNumber(vector<int>& nums) {
4        int x = ((nums.size())*(nums.size() + 1)) / 2;
5        for (size_t i = 0; i < nums.size(); i++) {
6            x -= nums[i];
7        }
8        return x;
9    }
10};