// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length;
    let i = 0,
        j = len - 1,
        left;
    while (i <= j) {
        mid = i + Math.floor((j - i) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        } else if (target < nums[mid]) {
            j = mid - 1;
        } else {
            if (mid === 0 || nums[mid - 1] !== target) {
                left = mid;
                break;
            } else {
                j = mid - 1;
            }
        }
    }
    if (left === undefined) return [-1, -1];

    i = left;
    j = len - 1;
    let right;
    while (i <= j) {
        mid = i + Math.floor((j - i) / 2);
        if (target < nums[mid]) {
            j = mid - 1;
        } else {
            if (mid === len - 1 || nums[mid + 1] !== target) {
                right = mid;
                break;
            } else {
                i = mid + 1;
            }
        }
    }
    return [left, right]
};

// test
console.log(searchRange([1, 1, 1, 8, 8, 8, 9, 9], 8));
console.log(searchRange([2, 2], 2));