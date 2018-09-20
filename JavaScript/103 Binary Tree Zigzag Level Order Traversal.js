// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
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
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let nodes = [root];
    nodes.push(root.val);
    let invOrd = false;
    while (nodes.length) {
        result.push([]);
        if (invOrd) {
            for (let i = nodes.length - 1; i >= 0; i--) {
                let node = nodes.pop();
                if (node.val !== undefined) result[result.length - 1].push(node.val);
                if (node.right) nodes.unshift(node.right);
                if (node.left) nodes.unshift(node.left);
            }
        } else {
            let length = nodes.length;
            for (let i = 0; i < length; i++) {
                let node = nodes.shift();
                if (node.val !== undefined) result[result.length - 1].push(node.val);
                if (node.left) nodes.push(node.left);
                if (node.right) nodes.push(node.right);
            }
        }
        invOrd = invOrd ? false : true;
    }
    return result;
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

console.log(zigzagLevelOrder(root));