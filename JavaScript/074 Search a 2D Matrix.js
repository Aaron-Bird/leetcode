// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let columnLen = matrix.length;
    if (columnLen === 0) return false;
    let rowLen = matrix[0].length;
    if (rowLen === 0) return false;
    if (target < matrix[0][0] || target > matrix[columnLen - 1][rowLen - 1]) return false;

    let i = 0,
        j = columnLen - 1;
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (matrix[mid][0] === target) {
            return true;
        } else if (matrix[mid][0] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    if (matrix[j][rowLen - 1] === target) {
        return true;
    } else if (matrix[j][rowLen - 1] < target) {
        return false;
    }

    l = 0;
    r = rowLen - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (matrix[j][mid] === target) {
            return true;
        } else if (matrix[j][mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};

// test
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
console.log(searchMatrix(matrix, 3));