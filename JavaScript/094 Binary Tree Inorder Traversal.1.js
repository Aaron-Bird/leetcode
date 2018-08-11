// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [];
    curr = root;
    while (curr || stack.length !== 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
};

// test
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let node = new TreeNode(1);
node.right = new TreeNode(2);
node.right.left = new TreeNode(3);
console.log(inorderTraversal(node));