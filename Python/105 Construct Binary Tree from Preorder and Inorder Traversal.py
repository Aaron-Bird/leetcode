# Given preorder and inorder traversal of a tree, construct the binary tree.

# Note:
# You may assume that duplicates do not exist in the tree.

# For example, given

# preorder = [3,9,20,15,7]
# inorder = [9,3,15,20,7]
# Return the following binary tree:

#     3
#    / \
#   9  20
#     /  \
#    15   7


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def genNode(self, preL, inL, inR, preorder, inorder):
        if inL > inR:
            return None
        val = preorder[preL]
        node = TreeNode(val)

        i = inL
        while inorder[i] != val:
            i += 1

        node.left = self.genNode(preL + 1, inL, i - 1, preorder, inorder)
        node.right = self.genNode(
            preL + (i - inL) + 1, i + 1, inR, preorder, inorder)

        return node

    def buildTree(self, preorder, inorder):
        """
        :type preorder: List[int]
        :type inorder: List[int]
        :rtype: TreeNode
        """
        return self.genNode(0, 0, len(inorder) - 1, preorder, inorder)

# test
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

s = Solution()
print(s.buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
