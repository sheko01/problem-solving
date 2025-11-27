// Last updated: 11/27/2025, 4:56:37 PM
1class Solution {
2public:
3    int maxSumDivThree(vector<int>& nums) {
4        int sum = 0;
5        int sumReminder = 0;
6        for (const int& num : nums) {
7            sum += num;
8        }
9        if (sum % 3 == 0) {
10            return sum;
11        } else {
12            for (size_t i = 0; i < nums.size(); i++) {
13                if ((nums[i] % 3 == sum % 3)) {
14                    if ((nums[i] < sumReminder) || (sumReminder == 0))
15                        sumReminder = nums[i];
16                }
17
18                else {
19                    for (size_t j = i + 1; j < nums.size(); j++) {
20                        int reminder = nums[i] + nums[j];
21                        if (reminder % 3 == sum % 3) {
22                            if ((sumReminder == 0) ||
23                                (sumReminder > reminder)) {
24                                sumReminder = reminder;
25                            }
26                        }
27                    }
28                }
29            }
30            sum -= sumReminder;
31            if (sum % 3 != 0) {
32                sum = 0;
33            }
34        }
35        return sum;
36    }
37};