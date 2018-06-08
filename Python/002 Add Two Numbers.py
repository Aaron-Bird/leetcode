# -*- utf-8 -*-

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.
# 
# Definition for singly-linked list.

class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        sumListNode = ListNode(0)
        index = sumListNode
        temp = 0
        while l1 or l2:
            if l1:
                temp += l1.val
                l1 = l1.next

            if l2:
                temp += l2.val
                l2 = l2.next

            if temp >= 10:
                index.next = ListNode(temp - 10)
                temp = 1
            else:
                index.next = ListNode(temp)
                temp = 0
            index = index.next

        if temp == 1:
            index.next = ListNode(1)

        return sumListNode.next


if True:
    # test
    a = ListNode(2)
    a.next = ListNode(4)
    a.next.next = ListNode(3)
    b = ListNode(5)
    b.next = ListNode(6)
    b.next.next = ListNode(4)
    sumListNode = Solution().addTwoNumbers(a, b)

    while sumListNode:
        print sumListNode.val
        sumListNode = sumListNode.next
