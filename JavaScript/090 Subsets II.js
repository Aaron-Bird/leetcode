// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums = nums.sort(function (a, b) {
        return a - b;
    });
    let result = [
        []
    ];
    let callback = function (i, set) {
        if (i >= nums.length) return;

        result.push(set.slice());
        for (let j = i + 1; j < nums.length; j++) {
            if ((j == i + 1 || nums[j] !== nums[j - 1]) && nums[j] >= nums[i]) {
                set.push(nums[j]);
                callback(j, set);
                set.pop();
            }
        }
    };
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            callback(i, [nums[i]]);
        }
    }
    return result;
};

// test
console.log(subsetsWithDup([1, 2, 3]));