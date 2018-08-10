// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let helper = new ListNode(0);
    helper.next = head;
    let i = 0;
    let curr = helper;
    let prev = null;
    while (i < n) {
        if (i === m - 1) prev = curr;
        if (i >= m) {
            prevNext = prev.next;
            currNext = curr.next;

            curr.next = curr.next.next;
            prev.next = currNext;
            prev.next.next = prevNext;
        }

        if (i <= m - 1) curr = curr.next;
        i++;
    }
    return helper.next;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
node = reverseBetween(node, 2, 4)
while (node) {
    console.log(node.val);
    node = node.next;
}
node = new ListNode(3);
node.next = new ListNode(5);
node = reverseBetween(node, 1, 2);
while (node) {
    console.log(node.val);
    node = node.next;
}