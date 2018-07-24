// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (map[n] === undefined) {
            map[n] = i;
        } else {
            if (n * 2 === target) {
                return [i, map[n]];
            }
        }

    }
    nums = nums.sort(function (i, j) {
        return i - j
    })
    while (i < nums.length) {
        while (nums[i] + nums[i] > target) {
            i++;
        };
        let j = nums.length - 1;
        if (i !== 0 && nums[i] === nums[i - 1]) {
            i++;
        }
        while (i < j) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [map[nums[i]], map[nums[j]]];
            } else {
                if (sum > target) {
                    j--;
                    while (i < j && nums[j] === nums[j + 1]) {
                        j--;
                    }
                } else {
                    break;
                }
            }
        }
        i++;
    }
    return [];
};

// test
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([150, 24, 79, 50, 88, 345, 3], 200));
console.log(twoSum([3, 3], 6));