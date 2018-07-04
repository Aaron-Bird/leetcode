// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1


// 用二分法递归查找
// 如果nums[start] < nums[middle], 可以确定左侧数组是有序的(未被颠倒)
// 当nums[start] < target < nums[middle],可以确定target只能在左侧
// 如果target < nums[start] || nums[middle] < target, 可以确定target只能在右侧
// nums[middle] < nums[end] 同理
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let callback = function (start, end) {
        if (start > end) return -1;
        let middle = start + Math.floor((end - start) / 2);
        switch (target) {
            case nums[middle]:
                return middle;
            case nums[end]:
                return end;
            case nums[start]:
                return start
        }
        if (nums[middle] < nums[end]) {
            if (nums[middle] < target && target < nums[end]) {
                return callback(middle + 1, end - 1);
            } else {
                return callback(start + 1, middle - 1);
            }
        } else {
            if (nums[start] < target && target < nums[middle]) {
                return callback(start + 1, middle - 1);
            } else {
                return callback(middle + 1, end - 1);
            }
        }
    }
    return callback(0, nums.length - 1);
};

// test
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([2, 3, 4, 5, 6, 7, 0, 1], 0));
console.log(search([2, 3, 4, 5, 6, 7, 0, 1], 2));
console.log(search([2, 3, 4, 5, 6, 7, 0, 1], 1));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7], 6));
console.log(search([1, 2, 3, 4, 5, 6, 7, 1], 6));
console.log(search([1], 1));