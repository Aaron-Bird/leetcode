// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// ![](https://leetcode.com/static/images/problemset/8-queens.png)

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example:

// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    result = 0;
    let isValid = function (j, set) {
        for (let i = 0; i < set.length; i++) {
            if (set[i] === j || Math.abs(i - set.length) === Math.abs(set[i] - j)) return false;
        }
        return true;
    }

    let callback = function (i, set) {
        if (set.length === n) {
            result++;
            return;
        }
        for (let j = 0; j < n; j++) {
            if (isValid(j, set)) {
                set.push(j);
                callback(i + 1, set);
                set.pop();
            }
        }
    }
    for (let j = 0; j < n; j++) {
        callback(0, [j]);
    }
    return result;
};

// test
console.log(totalNQueens(4));