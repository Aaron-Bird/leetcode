// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
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
var levelOrder = function (root) {
    if (!root) return [];

    var result = [];
    var queue = [root];
    while (true) {
        var temp = [];
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (temp.length === 0) return result;
        result.push(temp);
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);

console.log(levelOrder(node));