// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


// 单独维护两个变量表示第0行和0列时候需要填充0
// 然后用0行/0列表示该列/行是否需要被填充0
// 注意避开matrix[0, 0], 因为无法判断该坐标表示的是0行还是0列

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rowLen = matrix[0].length;
    let columnLen = matrix.length;

    let row0 = false;
    let column0 = false;
    for (let i = 0; i < rowLen; i++) {
        if (matrix[0][i] === 0) {
            row0 = true;
            break;
        }
    }
    for (let i = 0; i < columnLen; i++) {
        if (matrix[i][0] === 0) {
            column0 = true;
            break;
        }
    }

    for (let j = 0; j < columnLen; j++) {
        for (let i = 0; i < rowLen; i++) {
            if (matrix[j][i] === 0) {
                matrix[j][0] = true;
                matrix[0][i] = true;
            }
        }
    }

    // 避开第0行, 避免覆盖掉第0列数组
    for (let i = 1; i < rowLen; i++) {
        if (matrix[0][i] === true) {
            for (let j = 0; j < columnLen; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    // 避开第0列,避免覆盖掉第0行数组
    for (let j = 1; j < columnLen; j++) {
        if (matrix[j][0] === true) {
            for (let i = 0; i < rowLen; i++) {
                matrix[j][i] = 0;
            }
        }
    }

    if (row0 === true) {
        for (let i = 0; i < rowLen; i++) {
            matrix[0][i] = 0;
        }
    }
    if (column0 === true) {
        for (let j = 0; j < columnLen; j++) {
            matrix[j][0] = 0;
        }
    }
};

// test
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix)
console.log(matrix);
matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(matrix)
console.log(matrix);
matrix = [
    [0, 0, 0, 5],
    [4, 3, 1, 4],
    [0, 1, 1, 4],
    [1, 2, 1, 3],
    [0, 0, 1, 1]
];
setZeroes(matrix)
console.log(matrix);
matrix = [
    [1, 1, 1],
    [0, 1, 2]
];
setZeroes(matrix)
console.log(matrix);