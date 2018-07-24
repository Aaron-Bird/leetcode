// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let rowLen = matrix[0].length;
    let columnLen = matrix.length;

    let originX = (rowLen - 1) / 2;
    let originY = (columnLen - 1) / 2;

    if (originX % 1 !== 0) {
        var fillX = true;
        originX = Math.ceil(originX);
        for (let y = 0; y < columnLen; y++) {
            matrix[y].splice(originX, 0, undefined);
        }
        rowLen++;
    }
    if (originY % 1 !== 0) {
        var fillY = true;
        originY = Math.ceil(originY);
        matrix.splice(originY, 0, Array(rowLen));
        columnLen++;
    }

    for (let columnIndex = 0; columnIndex < (columnLen - 1) / 2; columnIndex++) {
        for (let rowIndex = columnIndex; rowIndex < rowLen - 1 - columnIndex; rowIndex++) {
            if (matrix[columnIndex][rowIndex] === undefined) continue;

            let counter = 0;
            let beforeI = rowIndex - originX;
            let beforeJ = originY - columnIndex;
            beforeValue = matrix[columnIndex][rowIndex];
            while (counter < 4) {
                afterI = beforeI * 0 + beforeJ * 1;
                afterJ = beforeI * -1 + beforeJ * 0;
                temp = matrix[originY - afterJ][afterI + originX];
                matrix[originY - afterJ][afterI + originX] = beforeValue;

                beforeValue = temp;
                beforeI = afterI;
                beforeJ = afterJ;

                counter++;
            }
        }
    }
    if (fillY) {
        matrix.splice(originY, 1);
        columnLen--;
    }

    if (fillX) {
        for (let y = 0; y < columnLen; y++) {
            matrix[y].splice(originX, 1);
        }
    }
};

// test
let matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]
rotate(matrix);
console.log(matrix);

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotate(matrix);
console.log(matrix);