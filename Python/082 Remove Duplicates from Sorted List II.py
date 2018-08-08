# Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

# Example 1:

# Input: 1->2->3->3->4->4->5
# Output: 1->2->5
# Example 2:

# Input: 1->1->1->2->3
# Output: 2->3


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        helper = ListNode(0)
        helper.next = head
        prev = helper
        curr = prev.next
        while curr:
            while curr.next and prev.next.val == curr.next.val:
                curr = curr.next
            if prev.next == curr:
                prev = prev.next
            else:
                prev.next = curr.next
            curr = curr.next
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
node.next.next.next.next = ListNode(4)
node.next.next.next.next.next = ListNode(5)
node.next.next.next.next.next.next = ListNode(5)
s = Solution()
print(s.deleteDuplicates(node))
