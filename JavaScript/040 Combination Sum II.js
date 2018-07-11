// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    let len = candidates.length;
    let callback = function (i, set, target) {       
        if (target === 0) {
            result.push(set.slice());
        } else if (target > 0) {
            for (let j = i + 1; j < len; j++) {
                if (j > i + 1 && candidates[j] === candidates[j - 1]) continue;
                set.push(candidates[j]);
                callback(j, set, target - candidates[j]);
                set.pop();
            }
        } 
    };
    candidates = candidates.sort(function (x, y) {
        return x - y;
    });

    for (let i = 0; i < len; i++) {
        if (i > 0 && candidates[i] === candidates[i - 1]) continue;
        callback(i, [candidates[i]], target - candidates[i]);
    }
    return result;
};

// test
console.log(combinationSum2([1], 1));
console.log(combinationSum2([1, 2], 3));
console.log(combinationSum2([1, 2, 3], 3));
console.log(combinationSum2([1, 2, 7], 8));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([1, 2, 2, 2, 5], 5));