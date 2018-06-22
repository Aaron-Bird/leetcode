# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# For example, given n = 3, a solution set is:


# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]
class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []

        def callback(s, left, right):
            if (len(s) == 2 * n):
                return result.append(s)
            if (left < n):
                callback(s + '(', left + 1, right)
            if (right < left):
                callback(s + ')', left, right + 1)
        callback('', 0, 0)
        return result

# test
s = Solution()
print(s.generateParenthesis(3))
