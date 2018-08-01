// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// ![](https://leetcode.com/static/images/problemset/robot_maze.png)

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    xLen = obstacleGrid[0].length;
    yLen = obstacleGrid.length;
    if (obstacleGrid[yLen - 1][xLen - 1] === 1) return 0;

    obstacleGrid[yLen - 1][xLen - 1] = 1;
    for (y = yLen - 1; y >= 0; y--) {
        for (x = xLen - 1; x >= 0; x--) {
            if (y === yLen - 1 && x === xLen - 1) continue;

            if (obstacleGrid[y][x] === 1) {
                obstacleGrid[y][x] = 0;
                continue;
            } else {
                if (obstacleGrid[y + 1]) obstacleGrid[y][x] += obstacleGrid[y + 1][x];
                if (obstacleGrid[y][x + 1]) obstacleGrid[y][x] += obstacleGrid[y][x + 1];
            }
        }
    }
    return obstacleGrid[0][0];
};

// test
console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]))
console.log(uniquePathsWithObstacles([
    [0, 1]
]))