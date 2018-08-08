// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
// Follow up:

// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run-time complexity? How and why?

// 和Search in Rotated Sorted Array类似,唯一不同的情况如下
// nums = [1, 2, 1, 1, 1, 1, 1], target = 2
// 如果直接取mid判断 nums[0] <= num[3] || nums[3] < 2, 会误判为左侧有序,然后跑到右边去了
// 解决方法是判断是否符合 nums[i] == nums[mid] == nums[j]
// 如果返回true, 则让i/j向中间移动一格.然后再判断,直到这三个值不相等
// [参考](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/discuss/28218/My-8ms-C++-solution-(o(logn)-on-average-o(n)-worst-case))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let i = 0,
        j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor(i + (j - i) / 2);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[i] === nums[mid] && nums[j] === nums[mid]) {
            i++;
            j--;
        } else if (nums[i] <= nums[mid]) {
            if (mid - 1 >= 0 && nums[i] <= target && target <= nums[mid - 1]) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        } else {
            if (mid + 1 < nums.length && nums[mid + 1] <= target && target <= nums[j]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
    }
    return false;
};

// test
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([1,1,1,1,1,1,1,1,2,1,1,1,1,1],2));
console.log(search([1, 2, 1], 1));