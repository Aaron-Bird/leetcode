// Given a linked list, swap every two adjacent nodes and return its head.

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Note:

// Your algorithm should use only constant extra space.
// You may not modify the values in the list's nodes, only nodes itself may be changed.


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
var swapPairs = function (head) {
    let result = new ListNode(0);
    result.next = head;
    let c = result;
    while (c.next && c.next.next) {
        let first = c.next;
        let second = c.next.next;
        c.next = second;
        first.next = second.next;
        second.next = first;
        c = first;
    }
    return result.next;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}
node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
console.log(swapPairs(node));