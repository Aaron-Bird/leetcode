// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// 维护一个指针i,指向最后一个小于x的元素
// 然后遍历链表,遇到小于x的元素时,将其插到i后,然后后移i
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let helper = new ListNode(0);
    helper.next = head;

    let lastSmallerX = helper;
    let current = helper;

    while (current.next) {
        if (current.next.val < x) {
            if (lastSmallerX === current) { // 如果开始时helper.next(即head) < x, 则无需移动helper.next,直接跳过即可.没这步会无限循环
                current = current.next;
            } else {
                let currentNext = current.next;
                let lastSmallerXNext = lastSmallerX.next;

                current.next = current.next.next;
                lastSmallerX.next = currentNext;
                lastSmallerX.next.next = lastSmallerXNext;
            }
            lastSmallerX = lastSmallerX.next;
        } else {
            current = current.next;
        }

    }
    return helper.next;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1);
node.next = new ListNode(4);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(5);
node.next.next.next.next.next = new ListNode(2);
result = partition(node, 3);
while (result.next) {
    console.log(result.val);
    result = result.next;
}