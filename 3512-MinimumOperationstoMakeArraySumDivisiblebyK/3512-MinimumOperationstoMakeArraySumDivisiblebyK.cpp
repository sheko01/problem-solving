// Last updated: 11/29/2025, 4:11:20 PM
1class Solution {
2public:
3    int minOperations(vector<int>& nums, int k) {
4        int sum = 0;
5        for (size_t i = 0; i < nums.size(); i++) {
6            sum += nums[i];
7        }
8        if (sum < k)
9            return sum;
10        if (sum % k == 0)
11            return 0;
12        else
13            return sum % k;
14    }
15};