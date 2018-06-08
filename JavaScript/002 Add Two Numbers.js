// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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

var addTwoNumbers = function (l1, l2) {
    var sumListNode = new ListNode(0),
        index = sumListNode,
        temp = 0;
    while (l1 || l2) {
        if (l1) {
            temp += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            temp += l2.val;
            l2 = l2.next;
        }

        if (temp >= 10) {
            index.next = new ListNode(temp % 10);
            temp = 1;
        } else {
            index.next = new ListNode(temp);
            temp = 0;
        }
        index = index.next;
    }
    if (temp > 0) index.next = new ListNode(temp);
    return sumListNode.next;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));