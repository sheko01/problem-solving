// Last updated: 12/26/2025, 6:19:04 PM
1class Solution {
2public:
3    int bestClosingTime(string customers) {
4        int n = customers.size();
5        int current_penalty = 0;
6        //calc penalty if we close at 0
7        for (char c : customers) {
8            if (c == 'Y')
9                current_penalty++;
10        }
11
12        int min_penalty = current_penalty;
13        int best_hour = 0;
14        //Move the closing hour from 0 to n
15        for (int i = 0; i < n; i++) {
16            if (customers[i] == 'Y') {
17                current_penalty--;
18            } else {
19                current_penalty++;
20            }
21
22            if (current_penalty < min_penalty) {
23                min_penalty = current_penalty;
24                best_hour = i + 1;
25            }
26        }
27
28        return best_hour;
29    }
30    };