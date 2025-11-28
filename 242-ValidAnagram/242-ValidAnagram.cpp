// Last updated: 11/28/2025, 3:01:02 PM
1class Solution {
2public:
3    bool isAnagram(string s, string t) {
4        sort(s.begin(), s.end());
5        sort(t.begin(), t.end());
6        return s == t;
7    };
8};