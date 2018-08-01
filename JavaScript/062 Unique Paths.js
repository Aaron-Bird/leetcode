// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// ![Above is a 7 x 3 grid. How many possible unique paths are there?](https://leetcode.com/static/images/problemset/robot_maze.png)

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28

// 格子路径数等于下方格子和右侧格子路径数的和
// 只能向右/下移动,因此最下/最右格子可走路径数为1
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(Array(m).fill(1));
    }
    for (y = n - 2; y >= 0; y--) {
        for (x = m - 2; x >= 0; x--) {
            matrix[y][x] = matrix[y + 1][x] + matrix[y][x + 1];
        }
    }
    return matrix[0][0];
};

// test
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));