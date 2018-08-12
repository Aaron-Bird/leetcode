// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3


// [参考](http://fisherlei.blogspot.com/2013/03/leetcode-unique-binary-search-trees.html)
// n = 2
//      1       2
//     /       /
//    2       1     
// f(2) = f(0) * f(1) + f(1) * f(2)
//
// n = 3
//      1           2       3
//      \      ->    \     /
//      (2, 3)        3   2 
//
//      1       1       2       3       3
//      \       \      / \     /        \
//       2       3    1   3   1          2
//        \     /              \          \
//         3   2                2          1 
// f(3) = f(0) * f(2) + f(1) * f(1) + f(2) * f(0)
//
// f(n) = f(0) * f(n - 1) + f(1) * f(n - 2) + ... + f(n - 1) * f(0)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dyna = [1, 1];
    for (let i = 2; i <= n; i++) {
        dyna[i] = 0;
        for (let j = 0; j < i; j++) {
            dyna[i] += dyna[j] * dyna[i - 1 - j];
        }
    }
    return dyna[n];
};

// test
console.log(numTrees(3));