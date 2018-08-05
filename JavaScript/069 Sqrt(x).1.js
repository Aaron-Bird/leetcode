// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.


// 设 n = x² 求 x, 即函数f(x) = x² - n,当f(x) = 0时,求解 x
// 使用牛顿迭代法
// xᵢ₊₁ = xᵢ - f(xᵢ) / f'(xᵢ)
// 已知 f'(xᵢ) = 2xᵢ, f(xᵢ) = x² - n
// 则 xᵢ - f(xᵢ) / f'(xᵢ) 
//  = xᵢ - (xᵢ² - n) / 2xᵢ
//  = xᵢ - xᵢ / 2 - n / 2xᵢ
//  = xi / 2 - n / 2xᵢ
//  = (xᵢ - n / xᵢ) / 2
// 参考
// [](https://www.cnblogs.com/AnnieKim/archive/2013/04/18/3028607.html)
// [维基百科 平方根#牛頓法](https://zh.wikipedia.org/wiki/%E5%B9%B3%E6%96%B9%E6%A0%B9#%E7%89%9B%E9%A0%93%E6%B3%95)
// [维基百科 牛頓法](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E6%B3%95#%E6%B1%82%E8%A7%A3%E6%9C%80%E5%80%BC%E5%95%8F%E9%A1%8C)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;

    let last = null;
    let cur = 1;
    while (last !== cur) {
        last = cur
        cur = (cur + x / cur) / 2;
    }
    return Math.floor(cur);
};

// test
console.log(mySqrt(8));