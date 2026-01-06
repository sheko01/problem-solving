// Last updated: 1/6/2026, 10:50:50 PM
1class Solution {
2public:
3    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
4        vector<bool> temp = {};
5        int max = 0;
6        for (size_t i = 1; i < candies.size(); i++) {
7            if (candies[i] > candies[max]) {
8                max = i;
9            }
10        }
11cout<<max<<endl;
12        for (size_t i = 0; i < candies.size(); i++) {
13            if((candies[i]+extraCandies)>=candies[max]){
14                temp.push_back(true);
15            }
16            else{
17                temp.push_back(false);
18            }
19        }
20        return temp;
21    }
22};