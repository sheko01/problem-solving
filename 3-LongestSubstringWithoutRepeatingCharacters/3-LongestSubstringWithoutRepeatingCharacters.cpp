// Last updated: 12/3/2025, 8:30:06 PM
1class Solution {
2public:
3    int lengthOfLongestSubstring(string s) {
4        int counter = 0;
5        int max = 0;
6        int start=0;
7        set<char> str;
8        for (int i = 0; i < s.length(); i++) {
9            while (str.count(s[i])) {
10                str.erase(s[start]);
11                start++;
12                counter--;
13            }
14            str.insert(s[i]);
15            counter++;
16            if (counter > max) {
17                max = counter;
18            }
19        }
20        return max;
21    }
22};