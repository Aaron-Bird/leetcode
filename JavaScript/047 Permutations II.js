// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];
    let len = nums.length;
    nums = nums.sort(function (i, j) {
        return i - j;
    })
    let callback = function (i, group) {
        if (group.length === len) {
            result.push(group.map(function (i) {
                return nums[i];
            }));
            return;
        }
        for (let j = 0; j < len; j++) {
            if (group.indexOf(j) !== -1) continue;
            if (j > 0 && nums[j] === nums[j - 1] && group.indexOf(j - 1) === -1) {
                continue;
            }
            group.push(j);
            callback(j, group);
            group.pop();
        }
    }
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        callback(i, [i])
    }
    return result;
};

// test
console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([3,3,0,3]));