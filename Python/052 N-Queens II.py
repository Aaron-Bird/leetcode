# The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

# ![](https://leetcode.com/static/images/problemset/8-queens.png)

# Given an integer n, return the number of distinct solutions to the n-queens puzzle.

# Example:

# Input: 4
# Output: 2
# Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
# [
#  [".Q..",  // Solution 1
#   "...Q",
#   "Q...",
#   "..Q."],

#  ["..Q.",  // Solution 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]


class Solution(object):
    def totalNQueens(self, n):
        """
        :type n: int
        :rtype: int
        """
        self.result = 0
        
        def isVaild(j, set):
            for i in range(0, len(set)):
                if set[i] == j or abs(set[i] - j) == abs(i - len(set)):
                    return False
            return True

        def callback(i, set):
            if (len(set) == n):
                self.result += 1
                return
            for j in range(0, n):
                if isVaild(j, set):
                    set.append(j)
                    callback(i + 1, set)
                    set.pop()

        for j in range(0, n):
            callback(0, [j])
        return self.result


# test
s = Solution()
print(s.totalNQueens(4))
