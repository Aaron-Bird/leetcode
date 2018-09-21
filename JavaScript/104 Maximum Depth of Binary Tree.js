// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.


// 对二叉树遍历(广度优先)
// 创建一个栈, 将根节点放入栈中
// 依次弹出栈中的同一层节点,同时将其子节点放入栈中
// 记录循环次数,直到栈被清空
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0;
    let stack = [root];
    while (stack.length) {
        depth++;
        for (let i = stack.length - 1; i >= 0; i--) {
            let node = stack.shift();
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    return depth;
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

console.log(maxDepth(root));