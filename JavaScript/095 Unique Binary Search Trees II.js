// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

// Example:

// Input: 3
// Output:
// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3


// 根节点值i有n个(1 ~ n)
// 则根节点左侧由1 ~ i - 1组成,右侧有i + 1 ~ n组成
// 分别递归搜索左右两侧,然后添加到根节点两侧
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function(n) {
    if (n === 0) return [];
    let callback = function(l, r) {
        if (l > r) return [null];

        let result = [];
        for (let i = l; i <= r; i++) {
            let subL = callback(l, i - 1);
            let subR = callback(i + 1, r);
            for (let j = 0; j < subL.length; j++) {
                for (let k = 0; k < subR.length; k++) {
                    let node = new TreeNode(i);
                    node.left = subL[j];
                    node.right = subR[k];
                    result.push(node);
                }
            }
        }
        return result;
    }

    return callback(1, n);
};

// test
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(generateTrees(3));
