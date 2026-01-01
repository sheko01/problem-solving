// Last updated: 1/1/2026, 10:32:56 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {ListNode}
11 */
12var deleteDuplicates = function (head) {
13    if (!head) {
14        return null;
15    }
16
17    let list = new Set();
18    let current = head;
19    let prev = null;
20
21    while (current) {
22        if (list.has(current.val)) {
23            prev.next = current.next;
24        } else {
25            list.add(current.val);
26            prev = current;
27        }
28        current = current.next;
29    }
30
31    return head;
32
33};