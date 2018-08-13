# Invert a binary tree.

# Example:

# Input:

#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
# Output:

#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1
# Trivia:
# This problem was inspired by this original tweet by Max Howell:

# Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if not root:
            return root
        root.left, root.right = root.right, root.left
        if root.left:
            self.invertTree(root.left)
        if root.right:
            self.invertTree(root.right)
        return root

# test
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

node = TreeNode(4)
node.left = TreeNode(2)
node.right = TreeNode(7)
node.left.left = TreeNode(1)
node.left.right = TreeNode(3)
node.right.left = TreeNode(6)
node.right.right = TreeNode(9)

s = Solution()
print(s.invertTree(node))
