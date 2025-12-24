// Last updated: 12/24/2025, 6:43:29 PM
1class Solution {
2public:
3    int minimumBoxes(vector<int>& apple, vector<int>& capacity) {
4        int sum=0;
5        for(size_t i=0;i<apple.size();i++){
6            sum+=apple[i];
7        }
8        sort(capacity.begin(), capacity.end());
9        int counter=0;
10        while(sum>0){
11            sum-=capacity.back();
12            capacity.pop_back();
13            counter++;
14        }
15        return counter;
16    }
17};