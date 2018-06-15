// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


var concatTwoArray = function (nums1, nums2) {
    var arr = [];
    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] < nums2[0]) {
            arr.push(nums1.shift());
        } else {
            arr.push(nums2.shift());
        }
    }
    if (nums1.length > 0) {
        for (var i = 0; i < nums1.length; i++) {
            arr.push(nums1[i]);
        }
    }
    if (nums2.length > 0) {
        for (var i = 0; i < nums2.length; i++) {
            arr.push(nums2[i]);
        }
    }
    return arr;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var arr = concatTwoArray(nums1, nums2);
    var middle = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
};

// test
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));