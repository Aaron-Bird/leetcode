// Given a arr of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution arr must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution arr is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution arr is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let solution = [];
    len = candidates.length;
    let callback = function (i, target, arr) {
         if (target === 0) {
            solution.push(arr.slice());
        } else if (target > 0) {
            while (i < len) {
                arr.push(candidates[i]);
                callback(i, target - candidates[i], arr);
                arr.pop();
                i++;
            }
        }
    }
    callback(0, target, []);
    return solution;
};

// test
console.log(combinationSum([1], 2));
console.log(combinationSum([1, 2], 3));
console.log(combinationSum([1, 2, 3], 5));