// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let columnLen = board.length;
    let rowLen = board[0].length;
    let wordLen = word.length;
    let result = false;

    let ANotInB = function (a, b) {
        for (let i = 0; i < b.length; i++) {
            if (a.toString() === b[i].toString()) {
                return false;
            }
        }
        return true;
    };

    let callback = function (i, set) {
        if (result === true) return;
        if (i === wordLen) {
            result = true;
            return;
        };

        let pI = set[set.length - 1][0];
        let pJ = set[set.length - 1][1];
        if (pI - 1 >= 0 && board[pJ][pI - 1] === word[i] && ANotInB([pI - 1, pJ], set)) {
            set.push([pI - 1, pJ]);
            callback(i + 1, set);
            set.pop();
        }

        if (pJ - 1 >= 0 && board[pJ - 1][pI] === word[i] && ANotInB([pI, pJ - 1], set)) {
            set.push([pI, pJ - 1]);
            callback(i + 1, set);
            set.pop();
        }
        if (pI + 1 < rowLen && board[pJ][pI + 1] === word[i] && ANotInB([pI + 1, pJ], set)) {
            set.push([pI + 1, pJ]);
            callback(i + 1, set);
            set.pop();
        }
        if (pJ + 1 < columnLen && board[pJ + 1][pI] === word[i] && ANotInB([pI, pJ + 1], set)) {
            set.push([pI, pJ + 1]);
            callback(i + 1, set);
            set.pop();
        }
    };

    breakTarget:
        for (let j = 0; j < columnLen; j++) {
            for (let i = 0; i < rowLen; i++) {
                if (result === true) break breakTarget;
                if (board[j][i] === word[0]) callback(1, [
                    [i, j]
                ]);
            }
        }
    return result;
};

// test
board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));