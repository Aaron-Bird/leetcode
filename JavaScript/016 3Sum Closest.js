// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort(function (i, j) {
        return i - j
    });

    let len = nums.length,
        closest = null;
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let start = i + 1;
        let end = len - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            let distance = sum - target;
            if (!closest || Math.abs(distance) < Math.abs(closest)) {
                closest = distance;
            }

            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return target;
            }
        }
    }
    return target + closest;
};

// test
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([1, 1, 1, 1], 0));
console.log(threeSumClosest([1, 1, 1, 0], -100));