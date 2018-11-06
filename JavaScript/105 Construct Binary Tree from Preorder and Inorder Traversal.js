// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function genNode(preL, inL, inR) {
        if (preL > preorder.length - 1 || inL > inR) return null;
        let val = preorder[preL];
        let node = new TreeNode(val);

        let i = inL;
        while (inorder[i] !== val) {
            i++;
        }
        node.left = genNode(preL + 1, inL, i - 1);
        node.right = genNode(preL + i - inL + 1, i + 1, inR);
        return node;
    }
    return genNode(0, 0, inorder.length - 1);
};

// test
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));