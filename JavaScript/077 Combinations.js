// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    let callback = function (i, arr) {
        if (arr.length === k) {
            result.push(arr.slice());
            return;
        }
        for (let j = i + 1; j <= n; j++) {
            arr.push(j);
            callback(j, arr);
            arr.pop();
        }
    }

    for (let i = 1; i <= n; i++) {
        callback(i, [i]);
    }
    return result;
};

// test
console.log(combine(4, 2));