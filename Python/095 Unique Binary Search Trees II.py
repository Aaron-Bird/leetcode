// Given an integer n, generate all structurally unique BST's(binary search trees) that store values 1 ... n.

// Example:

// Input: 3
// Output:
// [
    // [1, null, 3, 2],
    // [3, 2, null, 1],
    // [3, 1, null, null, 2],
    // [2, 1, 3],
    // [1, null, 2, null, 3]
    //]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:

// 1         3     3      2      1
// / / / \      \
    // 3     2     1      1   3      2
// / / // 2     1         2                 3


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def generateTrees(self, n):
        """
        :type n: int
        :rtype: List[TreeNode]
        """
        if n == 0:
            return []

        def callback(l, r):
            if l > r:
                return [None]

            result = []
            for i in range(l, r + 1):
                subL = callback(l, i - 1)
                subR = callback(i + 1, r)
                for j in subL:
                    for k in subR:
                        node = TreeNode(i)
                        node.left = j
                        node.right = k
                        result.append(node)
            return result

        return callback(1, n)

# test


class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


s = Solution()
print(s.generateTrees(3))
