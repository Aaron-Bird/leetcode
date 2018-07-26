// Implement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]


// a^n = a^(n/2 + n/2) = a^(n/2) * a^(n/2) = (a * a)^(n/2)
// 递归出口 x * 1(n = 1时)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        n *= -1;
        x = 1 / x;
    }

    if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    } else {
        return x * myPow(x * x, Math.floor(n / 2));
    };
};

// test
console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));