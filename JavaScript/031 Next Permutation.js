// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


// 从后向前遍历数组,直到找到两个相邻升序排列的元素(nums[i] < nums[i + 1])
// 然后向后查找第一个大于nums[i]的元素nums[j], 交换nums[i]和nums[j]
// 最后翻转[i + 1, len - 1]中的元素
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
    let swap = function (nums, i, j) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let len = nums.length;
    let i = len - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        let j = i + 1;
        while (j <= len) {
            if (j === len || nums[i] >= nums[j]) {
                j--;
                swap(nums, i, j);
                break;
            }
            j++;
        }
    }
    i++;
    j = len - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
};

// test
let arr = [1, 2, 3];
nextPermutation(arr);
console.log(arr);

arr = [3, 2, 1];
nextPermutation(arr);
console.log(arr);

arr = [1, 1, 5];
nextPermutation(arr);
console.log(arr);

arr = [1, 3, 2];
nextPermutation(arr);
console.log(arr);