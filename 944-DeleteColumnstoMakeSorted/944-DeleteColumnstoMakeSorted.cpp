// Last updated: 12/20/2025, 11:00:45 PM
1class Solution {
2public:
3    int minDeletionSize(vector<string>& strs) {
4        int faults = 0;
5        int col = strs[0].length();
6        for (int i = 0; i < col; i++) {
7            for (int j = 0; j < strs.size()-1; j++) {
8                
9                    if (strs[j][i] > strs[j + 1][i]) {
10                        faults++;
11                        break;
12                    
13                }
14            }
15        }
16        return faults;
17    }
18};