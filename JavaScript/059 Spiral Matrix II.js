// Given a positive integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }

    let num = 0;
    for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
        let x = i;
        let y = i;
        for (; x < n - i; x++) {
            matrix[y][x] = ++num;
        }
        x--;
        y++;
        for (; y < n - i; y++) {
            matrix[y][x] = ++num;
        }
        y--;
        x--;
        for (; x >= i; x--) {
            matrix[y][x] = ++num;
        }
        x++;
        y--;
        for (; y > i; y--) {
            matrix[y][x] = ++num;
        }
    }
    return matrix;
};

// test
console.log(generateMatrix(3));