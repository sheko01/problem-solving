// Last updated: 12/6/2025, 5:39:23 PM
1class Solution {
2public:
3    int countPartitions(vector<int>& nums) {
4        int counter = 0;
5        int lSum = 0;
6        int rSum = 0;
7
8        for (int i = 0; i < nums.size(); i++) {
9            lSum += nums[i];
10            if (i + 1 < nums.size()) {
11                for (int j = i + 1; j < nums.size(); j++) {
12                    rSum += nums[j];
13                }
14                if ((abs(lSum - rSum) % 2) == 0) {
15                    counter++;
16                }
17                rSum = 0;
18            }
19        }
20        return counter;
21    }
22};