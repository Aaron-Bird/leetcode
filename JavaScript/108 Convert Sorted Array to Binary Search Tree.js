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
  // 获取中间的下标,如果是偶数,则取(中间两个中的)右侧.
  const getCenterIndex = function(start, end) {
    return Math.ceil((end - start) / 2) + start;
  };
  const callback = function(start, end, node) {
    // 防止回调(+1 -1的时候)越界
    if (start > end) {
      return;
    }
    const centerIndex = getCenterIndex(start, end);
    // 如果左侧还有元素
    if (start < centerIndex) {
      //左子树
      leftIndex = getCenterIndex(start, centerIndex - 1);
      node.left = new TreeNode(nums[leftIndex]);
      callback(start, centerIndex - 1, node.left);
    }
    // 如果右侧还有元素
    if (centerIndex < end) {
      // 右子树
      rightIndex = getCenterIndex(centerIndex + 1, end);
      node.right = new TreeNode(nums[rightIndex]);
      callback(centerIndex + 1, end, node.right);
    }
  };
  const len = nums.length;
  // 边界条件,传入空数组时([])返回null
  if (!len) {
    return null;
  }
  const centerIndex = getCenterIndex(0, len - 1);
  // 根节点
  const root = new TreeNode(nums[centerIndex]);
  callback(0, len - 1, root);
  return root;
};

// test
const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(root.val);
console.log(root.left.val);
console.log(root.left.left.val);
console.log(root.right.val);
console.log(root.right.left.val);

console.log(sortedArrayToBST([]));
