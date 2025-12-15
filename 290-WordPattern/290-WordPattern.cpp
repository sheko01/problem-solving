// Last updated: 12/15/2025, 9:57:11 PM
1class Solution {
2public:
3    bool wordPattern(string pattern, string s) {
4         vector<string> words;
5        string word;
6        for (int i = 0; i <= s.length(); i++) {
7            if (i == s.length() || s[i] == ' ') {
8                words.push_back(word);
9                word.clear();
10            } else {
11                word += s[i];
12            }
13        }
14        if (pattern.length() != words.size()) {
15            return false;
16        }
17        map<char, string> mp;
18
19        for (int i = 0; i < pattern.length(); i++) {
20            if (mp.count(pattern[i]) && mp[pattern[i]] != words[i]) {
21                return false;
22            } else {
23                for (auto m :mp){
24                    if(m.second==words[i]&& m.first!=pattern[i])
25                    return false;
26                }
27                mp[pattern[i]] = words[i];
28            }
29        }
30        return true;
31    }
32};