// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let columnLen = matrix.length;
    if (columnLen === 0) return result;
    let rowLen = matrix[0].length;
    for (let s = 0; s <= Math.floor((Math.min(columnLen, rowLen) - 1) / 2); s++) {
        let i = s,
            j = s;
        while (i < rowLen - s) {
            result.push(matrix[j][i]);
            i++;
        }
        i--;
        j++;
        while (j < columnLen - s) {
            result.push(matrix[j][i])
            j++;
        }
        j--;
        i--;
        while (i >= s && j > s) {
            result.push(matrix[j][i]);
            i--;
        }
        i++;
        j--;
        while (j >= s + 1 && i < rowLen - s - 1) {
            result.push(matrix[j][i]);
            j--;
        }
    }
    return result;
};

// test
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
console.log(spiralOrder(matrix));
matrix = [
    [7],
    [9],
    [6]
]
console.log(spiralOrder(matrix));