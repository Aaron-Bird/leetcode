// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1
// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let len = nums.length;
    // 如果数组头部值小于尾部,则数组有序,直接返回头部元素
    if (nums[0] < nums[len - 1]) return nums[0];

    let i = 0,
        j = len - 1;
    while (i < j) {
        var mid = Math.floor(i + (j - i) / 2);
        if (nums[mid] < nums[j]) { //左侧无序,最小值一定在[i, mid]范围内(有可能mid恰好是最小值)
            j = mid;
        } else { // 右侧无序,最小值在(mid,j]范围内(nums[mid] > nums[j], nums[mid]肯定不是最小值)
            i = mid + 1;
        }
    }
    return nums[i];
};

// test
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([2, 3, 4, 5, 1]));