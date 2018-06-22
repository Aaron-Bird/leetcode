// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


// 使用递归创建一个树形结构,遍历所有可行的组合
// 当字符长度为2 * n 时,结束递归
// 递归过程
// (​​​​​
// ​​​​​((​​​​​
// ​​​​​(((​​​​​
// ​​​​​((()​​​​​
// ​​​​​((())​​​​​
// ​​​​​((()))​​​​​
// ​​​​​(()​​​​​
// ​​​​​(()(​​​​​
// ​​​​​(()()​​​​​
// ​​​​​(()())​​​​​
// ​​​​​(())​​​​​
// ​​​​​(())(​​​​​
// ​​​​​(())()​​​​​
// ​​​​​()​​​​​
// ​​​​​()(​​​​​
// ​​​​​()((​​​​​
// ​​​​​()(()​​​​​
// ​​​​​()(())​​​​​
// ​​​​​()()​​​​​
// ​​​​​()()(​​​​​
// ​​​​​()()()​​​​​
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    let callback = function (s, left, right) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (left < n) callback(s + '(', left + 1, right);
        if (right < left) callback(s + ')', left, right + 1);
    }
    callback('', 0, 0);
    return result;
};

// test
console.log(generateParenthesis(3));