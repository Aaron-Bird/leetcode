# Merge two sorted linked lists and return it as a list. The list should be made by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(None)
        temp = result
        while l1 and l2:
            if l1.val < l2.val:
                temp.next = l1
                l1 = l1.next
            else:
                temp.next = l2
                l2 = l2.next
            temp = temp.next

        if l1:
            temp.next = l1
        elif l2:
            temp.next = l2
        return result.next

# test
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
n1 = ListNode(1)
n1.next = ListNode(2)
n1.next.next = ListNode(4)
n2 = ListNode(1)
n2.next = ListNode(3)
n2.next.next = ListNode(4)
s = Solution()
a= s.mergeTwoLists(n1, n2)
print(s.mergeTwoLists(n1, n2))