// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:

// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;

    let i = 0,
        j = 1,
        curr = root,
        stack = [root];
    while (i < j) {
        let temp = j;
        while (i < temp) {
            if (stack[i] !== null) {
                stack.push(stack[i].left);
                stack.push(stack[i].right);
                j += 2
            }
            i++;
        }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i]) {
            [stack[i].left, stack[i].right] = [stack[i].right, stack[i].left];
        }
    }
    return root;
};

// test
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(7);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(9);
console.log(invertTree(node));

node = new TreeNode(1);
node.right = new TreeNode(2);
console.log(invertTree(node));