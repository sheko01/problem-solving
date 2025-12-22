// Last updated: 12/22/2025, 10:59:15 PM
1class Solution {
2public:
3    string reverseWords(string s) {
4        int n = s.length();
5        int i = 0;
6        int j = 0;
7
8        while (i < n) {
9            // 1. Skip all spaces to find the start of a word
10            while (i < n && s[i] == ' ')
11                i++;
12
13            // 2.check if we reached the end of the string
14            if (i < n) {
15                // check if j is not at the start to add a space before the next
16                // word
17                if (j != 0)
18                    s[j++] = ' ';
19
20                // 3. Write the characters of the word
21                while (i < n && s[i] != ' ') {
22                    s[j++] = s[i++];
23                }
24            }
25        }
26        // Resize the string to remove extra spaces
27        s.resize(j);
28        // 4. Reverse the entire string
29        reverse(s.begin(), s.end());
30        i = 0;
31        // 5. Reverse each word in the reversed string
32        for (int k = 0; k <= s.size(); k++) {
33            if (s[k] == ' ' || k == s.size()) {
34                reverse(s.begin() + i, s.begin() + k);
35                i = k + 1;
36            }
37        }
38
39        return s;
40    };
41};