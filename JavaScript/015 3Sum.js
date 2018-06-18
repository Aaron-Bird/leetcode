// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 排序数组
// 然后从前向后遍历数组,直到元素值大于零时停止(三个正数相加绝对不为零)

// 创建两个指针,指针start指向nums[i + 1], 指针end指向nums[-1]

// 计算nums[i] + nums[start] + nums[end] 
// 如果大于零, 向前移动end指针
// 如果小于零, 向后移动start指针

// 可通过判断 nums[i] === nums[i - 1] or nums[-i] === nums[-i + 1] 去重


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort(function (i, j) {
        return i - j
    });

    let len = nums.length,
        arr = [];
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;

        let start = i + 1;
        let end = len - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > 0) {
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                arr.push([nums[i], nums[start], nums[end]]);
                end--;

                while (start < end && nums[end] === nums[end + 1]) end--;
            }
        }
    }
    return arr;
};

// test
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));