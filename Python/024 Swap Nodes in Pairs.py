# Given a linked list, swap every two adjacent nodes and return its head.

# Example:

# Given 1->2->3->4, you should return the list as 2->1->4->3.
# Note:

# Your algorithm should use only constant extra space.
# You may not modify the values in the list's nodes, only nodes itself may be changed.


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        result = ListNode(0)
        result.next = head
        c = result
        while c.next and c.next.next:
            first = c.next
            second = c.next.next
            first.next = second.next
            c.next = second
            c.next.next = first
            c = first
        return result.next

# test
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


node = ListNode(1)
node.next = ListNode(2)
node.next.next = ListNode(3)
node.next.next.next = ListNode(4)
s = Solution()
print(s.swapPairs(node))
