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
    while (i <= j) {
        var mid = Math.floor(i + (j - i) / 2);
        // 如果mid值小于左侧,则mid为最小值
        if (mid > 0 && nums[mid] < nums[mid - 1]) break;
        // 如果mid值大于右侧,则mid右侧元素为最小值
        if (mid < len - 1 && nums[mid] > nums[mid + 1]) {
            mid++;
            break;
        }

        if (nums[i] < nums[mid]) { // 如果左侧有序,则最小值一定在右侧
            i = mid + 1;
        } else { // 如果右侧有序,则最小值一定在左侧
            j = mid - 1;
        }
    }
    return nums[mid];
};

// test
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([2, 3, 4, 5, 1]));