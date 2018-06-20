# Given a linked list, remove the n-th node from the end of list and return its head.

# Example:

# Given linked list: 1->2->3->4->5, and n = 2.

# After removing the second node from the end, the linked list becomes 1->2->3->5.
# Note:

# Given n will always be valid.

# Follow up:

# Could you do this in one pass?


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        arr = []
        h = head
        while h:
            arr.append(h)
            h = h.next

        length = len(arr)
        if length - n == 0:
            head = head.next
        elif n == 1:
            arr[length - 2].next = None
        else:
            left = length - n - 1
            right = length - n + 1
            arr[left].next = arr[right]
        return head
        
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
print(s.removeNthFromEnd(node, 2))