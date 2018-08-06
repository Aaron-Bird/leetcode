// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?


// 类似快排.维护左右两个指针l和r,然后从左向右遍历数组
// 当nums[i]===0时, 交换l和i指向的值,然后向右移动l
// 当nums[i]===2时, 交换r和i指向的值,然后向左移动r
// 注意 
// 1 i<=r,否则把1和2颠倒了
// 2 交换r和i指向的值后,i指向的新值未被检测,记得i--

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var l = 0,
        r = nums.length - 1;
    for (let i = 0; i <= r; i++) {
        if (nums[i] === 0) {
            [nums[l], nums[i]] = [nums[i], nums[l]]
            l++;
        }
        if (nums[i] === 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]]
            r--;
            i--;
        }
    }
};

// test
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
nums = [1,2,0];
sortColors(nums);
console.log(nums);
nums = [2,0,1];
sortColors(nums);
console.log(nums);