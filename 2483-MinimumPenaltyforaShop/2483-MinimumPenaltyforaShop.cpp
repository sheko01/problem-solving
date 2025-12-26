// Last updated: 12/26/2025, 5:00:54 PM
1class Solution {
2public:
3    int bestClosingTime(string customers) {
4        int max_score = 0;
5        int current_score = 0;
6        int best_hour = 0;
7
8        for (int i = 0; i < customers.size(); i++) {
9            if (customers[i] == 'Y') {
10                current_score++;
11            } else {
12                current_score--;
13            }
14
15            if (current_score > max_score) {
16                max_score = current_score;
17                best_hour = i + 1;
18            }
19        }
20
21        return best_hour;
22    }
23};