// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adyacent cell, where "adyacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

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


// 深度优先搜索
// 将走过的路径标记为'#',搜索完毕后再还原回去
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
    let wordLen = word.length;
    let callback = function (i, x, y) {
        if (i === wordLen) return true;
        if (!board[y] || !board[y][x] || word[i] !== board[y][x]) return false;
        board[y][x] = '#';
        let result = callback(i + 1, x - 1, y) ||
            callback(i + 1, x, y - 1) ||
            callback(i + 1, x + 1, y) ||
            callback(i + 1, x, y + 1)
        board[y][x] = word[i];
        return result;
    };

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (callback(0, x, y)) return true;
        }
    }
    return false;
};

// test
board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
console.log(exist(board, 'ABCC'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));