// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// ![](https://leetcode.com/static/images/problemset/8-queens.png)

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    let isVaild = function (j, set) {
        for (let k = 0; k < set.length; k++) {
            if (set[k] === j || Math.abs(k - set.length) === Math.abs(set[k] - j)) return false;
        }
        return true;
    };
    let callback = function (i, set) {
        if (set.length === n) {
            let temp = [];
            for (let k = 0; k < n; k++) {
                let row = Array(n).fill('.');
                row[set[k]] = 'Q';
                temp.push(row.join(''));
            }
            result.push(temp);
            return;
        }
        for (let j = 0; j < n; j++) {
            if (isVaild(j, set)) {
                set.push(j);
                callback(i + 1, set);
                set.pop();
            }
        }
    };
    for (let i = 0; i < n; i++) {
        callback(0, [i]);
    }
    return result;
};

// test
console.log(solveNQueens(4));