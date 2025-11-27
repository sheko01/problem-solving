// Last updated: 11/27/2025, 4:56:17 PM
1class Solution {
2public:
3    vector<string> summaryRanges(vector<int>& nums) {
4        int i = 0, j = 0;
5        string s;
6        vector<string> str;
7        while (j < nums.size()) {
8
9            if ((j + 1 < nums.size()) && (nums[j] + 1 == nums[j + 1])) {
10
11                j++;
12            } else {
13                if (i == j) {
14                    s = to_string(nums[i]);
15                    str.push_back(s);
16                } else {
17                    s = to_string(nums[i]);
18                    s += "->";
19                    s += to_string(nums[j]);
20                    str.push_back(s);
21                    s = "";
22                }
23                j++;
24                i = j;
25            }
26        }
27        return str;
28    }
29};