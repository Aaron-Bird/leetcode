# Reverse a linked list from position m to n. Do it in one-pass.

# Note: 1 ≤ m ≤ n ≤ length of list.

# Example:

# Input: 1->2->3->4->5->NULL, m = 2, n = 4
# Output: 1->4->3->2->5->NULL


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        helper = ListNode(0)
        helper.next = head
        i = 0
        curr = helper
        prev = None
        while i < n:
            if i == m - 1:
                prev = curr
            if i >= m:
                prevNext = prev.next
                currNext = curr.next

                curr.next = curr.next.next
                prev.next = currNext
                prev.next.next = prevNext
            if i <= m - 1:
                curr = curr.next
            i += 1
        return helper.next

# test
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

node = ListNode(1)
node.next = ListNode(2)
node.next.next = ListNode(3)
node.next.next.next = ListNode(4)
node.next.next.next.next = ListNode(5)

s = Solution()
node = s.reverseBetween(node, 2, 4)
while node:
    print(node.val)
    node = node.next
