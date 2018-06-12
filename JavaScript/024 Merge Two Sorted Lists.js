// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let n1 = new ListNode(1);
n1.next = new ListNode(2);
n1.next.next = new ListNode(4);
let n2 = new ListNode(1);
n2.next = new ListNode(3);
n2.next.next = new ListNode(4);
console.log(mergeTwoLists(n1, n2));