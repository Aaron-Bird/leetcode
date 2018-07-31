# The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

# ![](https://leetcode.com/static/images/problemset/8-queens.png)

# Given an integer n, return all distinct solutions to the n-queens puzzle.

# Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

# Example:

# Input: 4
# Output: [
#  [".Q..",  // Solution 1
#   "...Q",
#   "Q...",
#   "..Q."],

#  ["..Q.",  // Solution 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]
# Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.


class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        result = []

        def isVaild(j, set):
            for i in range(0, len(set)):
                if set[i] == j or abs(i - len(set)) == abs(set[i] - j):
                    return False
            return True

        def callback(i, set):
            if len(set) == n:
                temp = []
                for k in range(0, n):
                    row = '.' * set[k] + 'Q' + '.' * (n - set[k] - 1)
                    temp.append(row)
                result.append(temp)
                return
                
            for j in range(0, n):
                if isVaild(j, set):
                    set.append(j)
                    callback(i + 1, set)
                    set.pop()

        for i in range(0, n):
            callback(0, [i])

        return result

# test
s = Solution()
print(s.solveNQueens(4))
