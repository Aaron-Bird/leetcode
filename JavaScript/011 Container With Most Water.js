// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.


// 以h[0]作为左侧桶壁为例
// 如果用h[0]和h[-1]装水, 那么装水量由h[0], h[-1]中最小值决定(短的桶壁)
// 假设 h[0] < h[-1]
// 因为装水量由最小值决定, 无论右侧桶壁高度如何变化, (h[0], h[1]) (h[0], h[2]) ... (h[0], h[-1])中装水最多的一定是 (h[0], h[-1])
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0,
        j = height.length - 1,
        maxArea = 0,
        area;
    while (i < j) {
        area = Math.min(height[i], height[j]) * (j - i);
        if (area > maxArea) maxArea = area;
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};

// test
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 3]));
console.log(maxArea([1, 2, 1]));