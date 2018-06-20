// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?


// 遍历链表, 将元素指针依次添加到一个列表中, 然后计算列表的长度
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let arr = [],
        h = head;
    while (h) {
        arr.push(h);
        h = h.next;
    }

    let len = arr.length;
    if (len - n === 0) {
        head = head.next;
    } else if (n === 1) {
        arr[len - 2].next = undefined;
    } else {
        left = len - n - 1
        right = len - n + 1
        arr[left].next = arr[right];
    }
    return head;
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
node.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(node, 2));