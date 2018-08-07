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
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        resultLen = result.length;
        for (let j = 0; j < resultLen; j++) {
            let arr = result[j].slice();
            arr.push(nums[i]);
            result.push(arr);
        }
        result.push([nums[i]]);
    }
    result.push([]);
    return result;
};

// test
console.log(subsets([1, 2, 3]));