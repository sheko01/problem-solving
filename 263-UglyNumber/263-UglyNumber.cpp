// Last updated: 12/2/2025, 11:07:08 PM
1class Solution {
2public:
3    bool isPrime(int n) {
4        if (n <= 1)
5            return false;
6
7        for (int i = 2; i * i <= n; i++) {
8            if (n % i == 0)
9                return false; 
10        }
11        return true;
12    }
13    bool isUgly(int n) {
14        if (n <= 0)
15            return false;
16        while (true) {
17
18            if (n % 2 == 0) {
19                int x = n / 2;
20                if (isPrime(x) && x > 5)
21                    return false;
22
23                n = x; 
24                continue;
25            }
26
27            if (n % 3 == 0) {
28                int x = n / 3;
29                if (isPrime(x) && x > 5)
30                    return false;
31
32                n = x;
33                continue;
34            }
35            if (n % 5 == 0) {
36                int x = n / 5;
37                if (isPrime(x) && x > 5)
38                    return false;
39                n = x;
40                continue;
41            }
42            break;
43        }
44        return n == 1;
45    }
46};