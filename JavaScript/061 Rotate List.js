// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL


// 1->2->3->4->5->NULL
// 获取链表结尾,将其头尾相连,此时结构如下
// 5->1->2->3->4->5->...
// \
// (当前位置)

// 当k = 2时(移动两步)
// 若想到达4->5->1->2->3->4->..., 应移动4步(5 - (2 - 1))
// 但实际应移动到3->4->...处,储存4并断开3->4的链接

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;
    let node = head;
    let len = 1;
    while (node.next !== null) {
        node = node.next;
        len++;
    }

    node.next = head;
    for (let i = 0; i < len - (k % len - 1) - 1; i++) {
        node = node.next;
    }

    result = node.next;
    node.next = null;
    return result;
};

// test
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
console.log(rotateRight(l, 2));
l = new ListNode(0);
l.next = new ListNode(1);
l.next.next = new ListNode(2);
console.log(rotateRight(l, 4));