// Last updated: 2/5/2026, 7:04:34 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val) {
4 *     this.val = val;
5 *     this.next = null;
6 * }
7 */
8
9/**
10 * @param {ListNode} headA
11 * @param {ListNode} headB
12 * @return {ListNode}
13 */
14var getIntersectionNode = function (headA, headB) {
15    let len1 = 0;
16    let currentA = headA;
17    let currentB = headB;
18    while (currentA) {
19        len1 += 1;
20        currentA = currentA.next;
21    }
22    let len2 = 0
23    while (currentB) {
24        len2 += 1;
25        currentB = currentB.next;
26    }
27    let diff = Math.abs(len2 - len1);
28    const loop = (node, i) => {
29        while (i !== 0) {
30            node = node.next;
31            i--;
32        }
33        return node;
34    }
35    currentA = headA;
36    currentB = headB;
37    if (len1 > len2) {
38        currentA = loop(currentA, diff);
39
40    }
41    else if (len2 > len1) {
42        currentB = loop(currentB, diff);
43    }
44    while (currentA) {
45        if (currentA === currentB) {
46            return currentA;
47        }
48        currentA = currentA.next;
49        currentB = currentB.next;
50    }
51    return;
52};