# Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3
# But the following [1,2,2,null,3,null,3] is not:
#     1
#    / \
#   2   2
#    \   \
#    3    3
# Note:
# Bonus points if you could solve it both recursively and iteratively.


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        def callback(l, r):
            if l == r == None:
                return True
            elif l == None or r == None:
                return False
            elif l.val != r.val:
                return False
            else:
                return callback(l.left, r.right) and callback(l.right, r.left)

        return callback(root.left, root.right)

# test
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

node = TreeNode(1)
node.left = TreeNode(2)
node.right = TreeNode(2)
node.left.left = TreeNode(3)
node.left.right = TreeNode(4)
node.right.left = TreeNode(4)
node.right.right = TreeNode(3)

s = Solution()
print(s.isSymmetric(node))
