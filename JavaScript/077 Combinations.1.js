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
    let i = 1,
        set = [],
        result = [];
    while (true) {
        let len = set.length;
        if (len === k) result.push(set.slice());

        if (len === k || i > n) {
            if (len === 0) return result;
            i = set.pop() + 1;
        } else {
            set.push(i);
            i += 1;
        }
    }
};

// test
console.log(combine(4, 3));