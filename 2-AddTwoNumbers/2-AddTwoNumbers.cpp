// Last updated: 12/1/2025, 9:56:55 PM
1/**
2 * Definition for singly-linked list.
3 * struct ListNode {
4 *     int val;
5 *     ListNode *next;
6 *     ListNode() : val(0), next(nullptr) {}
7 *     ListNode(int x) : val(x), next(nullptr) {}
8 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
9 * };
10 */
11class Solution {
12public:
13    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
14
15        vector<int> v1, v2;
16
17    
18        while (l1) {
19            v1.push_back(l1->val);
20            l1 = l1->next;
21        }
22
23     
24        while (l2) {
25            v2.push_back(l2->val);
26            l2 = l2->next;
27        }
28
29        int total = 0;
30        int i = 0, j = 0;
31
32        ListNode* head = new ListNode();
33        ListNode* ptr = head;
34
35        while (i < v1.size() || j < v2.size() || total) {
36            int d1 = (i < v1.size() ? v1[i] : 0);
37            int d2 = (j < v2.size() ? v2[j] : 0);
38
39            int sum = d1 + d2 + total;
40            total = sum / 10;
41
42            ptr->val = sum % 10;
43
44            if (i < v1.size()) i++;
45            if (j < v2.size()) j++;
46
47            if (i < v1.size() || j < v2.size() || total) {
48                ptr->next = new ListNode();
49                ptr = ptr->next;
50            }
51        }
52
53        return head;
54    }
55};