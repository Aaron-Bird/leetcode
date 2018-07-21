// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let swap = function (arr, i, j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    let len = nums.length;
    let getNext = function (nums) {
        let i = len - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) i--;
        if (i !== -1) {
            let j = i + 1;
            while (j <= len && nums[i] <= nums[j]) j++;
            swap(nums, i, --j);
        }
        i++;
        let j = len - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
        return nums;
    }

    let amount = 1;
    for (let i = 2; i <= len; i++) {
        amount *= i;
    }

    let result = [];
    for (let i = 0; i < amount; i++) {
        getNext(nums);
        result.push(nums.slice());
    }
    return result;
};

// test
console.log(permute([1,2,3]));
console.log(permute([0, 1]));