# Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

# You should preserve the original relative order of the nodes in each of the two partitions.

# Example:

# Input: head = 1->4->3->2->5->2, x = 3
# Output: 1->2->2->4->3->5


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        helper = ListNode(0)
        helper.next = head

        lastSmallerX, current = helper, helper
        while current.next:
            if current.next.val < x:
                if lastSmallerX == current:
                    current = current.next
                else:
                    currentNext = current.next
                    lastSmallerXNext = lastSmallerX.next

                    current.next = current.next.next
                    lastSmallerX.next = currentNext
                    lastSmallerX.next.next = lastSmallerXNext

                lastSmallerX = lastSmallerX.next
            else:
                current = current.next

        return helper.next

# test
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

node = ListNode(1)
node.next = ListNode(4)
node.next.next = ListNode(3)
node.next.next.next = ListNode(2)
node.next.next.next.next = ListNode(5)
node.next.next.next.next.next = ListNode(2)

s = Solution()
result = s.partition(node, 3)
while result.next:
    print(result.val)
    result = result.next
