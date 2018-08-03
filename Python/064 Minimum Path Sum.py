# Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

# Note: You can only move either down or right at any point in time.

# Example:

# Input:
# [
#   [1,3,1],
#   [1,5,1],
#   [4,2,1]
# ]
# Output: 7
# Explanation: Because the path 1→3→1→1→1 minimizes the sum.


class Solution(object):
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rowLen = len(grid[0])
        columnLen = len(grid)
        for y in range(columnLen - 1, -1, -1):
            for x in range(rowLen - 1, -1, -1):
                if x == rowLen - 1 and y == columnLen - 1:
                    continue
                if y + 1 == columnLen:
                    grid[y][x] += grid[y][x + 1]
                elif x + 1 == rowLen:
                    grid[y][x] += grid[y + 1][x]
                else:
                    grid[y][x] += min(grid[y + 1][x], grid[y][x + 1])
        return grid[0][0]

# test
s = Solution()
grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
print(s.minPathSum(grid))
grid = [
    [0, 0],
    [0, 0]
]
print(s.minPathSum(grid))
grid = [
    [1, 2, 5],
    [3, 2, 1]
]
print(s.minPathSum(grid))
