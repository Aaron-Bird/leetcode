/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var j = target - nums[i];
        var surplus = nums.slice(i + 1);
        if (surplus.indexOf(j) !== -1) {
            return [i, surplus.indexOf(j) + 1 + i];
        }
    }
};

console.log(twoSum([2, 5, 5, 11], 10));