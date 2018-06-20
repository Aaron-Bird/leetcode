// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


// 通过递归将n sum问题转换成2 sum问题
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    let nSum = function (nums, target, n, group) {
        // 关键
        // 当nums中的最小值 * n > target || nums中的最大值 * n < target时,
        // nums 中的任何两数相加,都不可能等于 target
        if (nums.length < n || n < 2 || nums[0] * n > target || nums[nums.length - 1] * n < target) return;

        if (n === 2) { // 递归出口, 解 2 sum 问题
            // 创建一前一后两个指针
            // 将指针所指向的两数相加, 根据结果, 不断向中间收敛
            let start = 0,
                end = nums.length - 1;
            while (start < end) {
                let sum = nums[start] + nums[end];
                // 两数和大于目标,将第二个指针向前挪
                if (sum > target) {
                    end--;
                // 两数和小于目标, 将第一个指针向后挪
                } else if (sum < target) {
                    start++;
                } else {
                    // 储存结果
                    result.push(group.concat(nums[start], nums[end]));

                    end--;
                    // 后端去重
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                }
            }
        } else { // 将n sum 问题转换为 n - 1 sum
            for (let i = 0; i < nums.length - n + 1; i++) {
                if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // 前端去重
                    nSum(nums.slice(i + 1), target - nums[i], n - 1, group.concat(nums[i]));
                }
            }
        }
        return;
    }
    nums = nums.sort(function (i, j) {
        return i - j
    });
    nSum(nums, target, 4, []);
    return result;
};

// test
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4));