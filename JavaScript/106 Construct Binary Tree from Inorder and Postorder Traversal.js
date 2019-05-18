// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const callback = function(startIn, endIn, startPost, endPost) {
    if (startIn > endIn || startPost > endPost) {
      return null;
    }
    const nodeVal = postorder[endPost];
    const node = new TreeNode(nodeVal);

    const indexInInorder = inorder.indexOf(nodeVal);
    // 相对于中序移动了几位
    const p = indexInInorder - startIn;
    node.left = callback(
      startIn,
      startIn + p - 1,
      startPost,
      startPost + p - 1
    );
    node.right = callback(startIn + p + 1, endIn, startPost + p, endPost - 1);
    return node;
  };
  const end = inorder.length - 1;
  return callback(0, end, 0, end);
};

// test
let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
