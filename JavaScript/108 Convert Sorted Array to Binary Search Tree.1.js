// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// 思路
// 取数组中间元素作为根节点(如果碰到偶数长度则取中间的右侧)
// 将左侧元素的中间作为左子树, 右侧的中间元素作为右子树
// 按如上做法,依次递归处理左右两侧的元素

/**
 * Definition for a binary tree node.
 */
var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const callback = function(start, end) {
    // 防止回调(+1 -1的时候)越界
    // 注意不要把等于也算进去
    if (start > end) {
      return null;
    }
    // 获取中间的下标,如果是偶数,则取(中间两个中的)右侧.
    const centerIndex = Math.ceil((end - start) / 2) + start;
    const node = new TreeNode(nums[centerIndex]);
    // 如果左侧还有元素
    if (start < centerIndex) {
      // 左子树
      node.left = callback(start, centerIndex - 1);
    }
    // 如果右侧还有元素
    if (centerIndex < end) {
      // 右子树
      node.right = callback(centerIndex + 1, end);
    }
    return node;
  };
  const len = nums.length;
  // 边界条件,传入空数组时([])返回null
  if (!len) {
    return null;
  }
  return callback(0, len - 1);
};

// test
const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(root.val);
console.log(root.left.val);
console.log(root.left.left.val);
console.log(root.right.val);
console.log(root.right.left.val);
console.log(sortedArrayToBST([]));
