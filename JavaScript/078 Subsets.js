// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [[]],
        len = nums.length;
    let callback = function (i, arr) {
        result.push(arr.slice());
        for (let j = i + 1; j < len; j++) {
            arr.push(nums[j]);
            callback(j, arr);
            arr.pop();
        }
    }
    for (let i = 0; i < len; i++) {
        callback(i, [nums[i]]);
    }
    return result;
};

// test
console.log(subsets([1, 2, 3]));