# A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# How many possible unique paths are there?

# ![Above is a 7 x 3 grid. How many possible unique paths are there?](https://leetcode.com/static/images/problemset/robot_maze.png)

# Note: m and n will be at most 100.

# Example 1:

# Input: m = 3, n = 2
# Output: 3
# Explanation:
# From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
# 1. Right -> Right -> Down
# 2. Right -> Down -> Right
# 3. Down -> Right -> Right
# Example 2:

# Input: m = 7, n = 3
# Output: 28


class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        matrix = [[1] * m for i in range(0, n)]
        for y in range(n - 2, -1, -1):
            for x in range(m - 2, -1, -1):
                matrix[y][x] = matrix[y + 1][x] + matrix[y][x + 1]
        return matrix[0][0]

# test
s = Solution()
print(s.uniquePaths(3, 2))
print(s.uniquePaths(7, 3))
