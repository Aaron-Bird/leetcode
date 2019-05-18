// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  // 不存在root时,直接返回
  if (!root) {
    return [];
  }
  const result = [];
  // 正常的广度优先
  const callback = function(node, dep) {
    if (!result[dep]) {
      result[dep] = [];
    }
    result[dep].push(node.val);
    dep += 1;
    if (node.left) {
      callback(node.left, dep);
    }
    if (node.right) {
      callback(node.right, dep);
    }
  };
  callback(root, 0);
  // 翻转结果
  return result.reverse();
};

// test
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrderBottom(root));
console.log(levelOrderBottom());
