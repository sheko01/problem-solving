// Last updated: 2/5/2026, 7:03:52 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val) {
4 *     this.val = val;
5 *     this.next = null;
6 * }
7 */
8
9/**
10 * @param {ListNode} head
11 * @return {boolean}
12 */
13var hasCycle = function (head) {
14    let list = new Set();
15    let current = head;
16    while (current) {
17        if (list.has(current)) {
18            return true;
19        }
20        list.add(current);
21        current = current.next;
22    }
23    return false;
24};
25