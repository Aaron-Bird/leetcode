// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// 斐波那契数列通向公式
// F_n = 1 / √5 * {[(1 + √5) / 2)]^{n + 1} - [(1 - √5) / 2)]^{n + 1}}
// 没看懂是怎么推导出来的

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let sqrt5 = Math.sqrt(5);
    let result = (Math.pow(((1 + sqrt5) / 2), n + 1) - Math.pow(((1 - sqrt5) / 2), n + 1)) / sqrt5;
    return Number(result.toFixed());
};

// test
console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(9));