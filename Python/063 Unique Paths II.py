# A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# Now consider if some obstacles are added to the grids. How many unique paths would there be?

# ![](https://leetcode.com/static/images/problemset/robot_maze.png)

# An obstacle and empty space is marked as 1 and 0 respectively in the grid.

# Note: m and n will be at most 100.

# Example 1:

# Input:
# [
#   [0,0,0],
#   [0,1,0],
#   [0,0,0]
# ]
# Output: 2
# Explanation:
# There is one obstacle in the middle of the 3x3 grid above.
# There are two ways to reach the bottom-right corner:
# 1. Right -> Right -> Down -> Down
# 2. Down -> Down -> Right -> Right


class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        :type obstacleGrid: List[List[int]]
        :rtype: int
        """
        xLen, yLen = len(obstacleGrid[0]), len(obstacleGrid)
        if obstacleGrid[yLen - 1][xLen - 1] == 1:
            return 0

        obstacleGrid[yLen - 1][xLen - 1] = 1
        for y in range(yLen - 1, -1, -1):
            for x in range(xLen - 1, -1, -1):
                if y == yLen - 1 and x == xLen - 1:
                    continue

                if obstacleGrid[y][x] == 1:
                    obstacleGrid[y][x] = 0
                    continue
                else:
                    if y + 1 < yLen:
                        obstacleGrid[y][x] += obstacleGrid[y + 1][x]
                    if x + 1 < xLen:
                        obstacleGrid[y][x] += obstacleGrid[y][x + 1]

        return obstacleGrid[0][0]

# test
s = Solution()
print(s.uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]))
print(s.uniquePathsWithObstacles([
    [0, 1]
]))
