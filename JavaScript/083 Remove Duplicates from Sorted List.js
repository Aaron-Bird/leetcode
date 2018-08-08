// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let curr = head;
    while (curr) {
        while (curr.next && curr.val === curr.next.val) curr.next = curr.next.next;
        curr = curr.next;
    }
    return head;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
console.log(deleteDuplicates(node));