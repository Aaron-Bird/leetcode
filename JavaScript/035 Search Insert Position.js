// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length;
    if (target < nums[0]) {
        return 0;
    } else if (target > nums[len - 1]) {
        return len;
    }
    let i = 0,
        j = len - 1;
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            if (nums[mid + 1] > target) return mid + 1;
            i = mid + 1;
        } else if (nums[mid] > target) {
            if (nums[mid - 1] < target) return mid;
            j = mid - 1;
        }
    }
};

// test
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))