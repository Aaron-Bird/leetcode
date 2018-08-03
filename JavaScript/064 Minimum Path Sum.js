// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let rowLen = grid[0].length;
    let columnLen = grid.length;
    for (let y = columnLen - 1; y >= 0; y--) {
        for (let x = rowLen - 1; x >= 0; x--) {
            if (x === rowLen - 1 && y === columnLen - 1) continue;
            let down = grid[y + 1] !== undefined ? grid[y + 1][x] : Infinity;
            let right = grid[y][x + 1] !== undefined ? grid[y][x + 1] : Infinity;
            grid[y][x] += down < right ? down : right;
        }
    }
    return grid[0][0];
};

// test
let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
console.log(minPathSum(grid));
grid = [
    [0, 0],
    [0, 0]
];
console.log(minPathSum(grid));
grid = [
    [1, 2, 5],
    [3, 2, 1]
];
console.log(minPathSum(grid));