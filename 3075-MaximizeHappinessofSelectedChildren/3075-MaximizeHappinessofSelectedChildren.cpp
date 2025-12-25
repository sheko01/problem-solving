// Last updated: 12/25/2025, 3:02:54 PM
1class Solution {
2public:
3    long long maximumHappinessSum(vector<int>& happiness, int k) {
4        sort(happiness.begin(), happiness.end());
5        int dec = 0;
6        unsigned long sum = 0;
7        while (k > 0) {
8            if ((happiness.back() - dec) > 0) {
9                sum += (happiness.back() - dec);
10                happiness.pop_back();
11                dec++;
12                k--;
13            } else {
14                break;
15            }
16        }
17        return sum;
18    }
19};