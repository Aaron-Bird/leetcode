// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Note:

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^231,  2^231 − 1]. For the purpose of this problem, assume that your function returns 2^231 − 1 when the division result overflows.


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0 || Math.abs(dividend) < Math.abs(divisor)) return 0;
    let sign = (dividend < 0) ^ (divisor < 0);
    dividend = -(Math.abs(dividend));
    divisor = -(Math.abs(divisor));

    let temp = divisor,
        i = 0;
    while (temp >= dividend) {
        i += 1;
        temp += temp;
    }
    i--;

    let quotient = 0;
    while (i >= 0) {
        if ((dividend - (divisor << i)) <= 0) {
            dividend = dividend - (divisor << i);
            quotient += i === 31 ? 2147483648 : 1 << i;
        }
        i--;
    }
    if (sign) quotient = -quotient;
    return Math.max(-2147483648, Math.min(2147483647, quotient));
};

// test
console.log(divide(16, 3));
console.log(divide(10, 3));
console.log(divide(-12, -4));
console.log(divide(-12, 4));
console.log(divide(-12, -4));
console.log(divide(100, 99));
console.log(divide(100, 11));
console.log(divide(-2147483648, -1));
console.log(divide(-1100540749, -1090366779));
console.log(divide(1, 1));