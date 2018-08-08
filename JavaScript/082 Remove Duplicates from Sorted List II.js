// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:

// Input: 1->1->1->2->3
// Output: 2->3


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
    let helper = new ListNode('#');
    helper.next = head;
    let prev = helper;
    let curr = head;
    while (curr) {
        // 如果prev.next指向节点的val值和curr.next指向节点的val值相同,向后移动curr节点
        while (curr.next && prev.next.val === curr.next.val) curr = curr.next;
        if (prev.next === curr) { // 如果pre.next指向curr,向下移动prev到prev指向的下一节点
            prev = prev.next;
        } else { // 否则将prev.next指向curr.next
            prev.next = curr.next;
        }
        curr = curr.next;
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
node.next.next.next.next = new ListNode(4);
node.next.next.next.next.next = new ListNode(5);
node.next.next.next.next.next.next = new ListNode(5);
console.log(deleteDuplicates(node));