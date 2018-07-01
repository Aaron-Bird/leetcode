# Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

# Return the quotient after dividing dividend by divisor.

# The integer division should truncate toward zero.

# Example 1:

# Input: dividend = 10, divisor = 3
# Output: 3
# Example 2:

# Input: dividend = 7, divisor = -3
# Output: -2
# Note:

# Both dividend and divisor will be 32-bit signed integers.
# The divisor will never be 0.
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^231,  2^231 − 1]. For the purpose of this problem, assume that your function returns 2^231 − 1 when the division result overflows.


class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        sign = (dividend < 0) ^ (divisor < 0)
        dividend, divisor = abs(dividend), abs(divisor)
        if dividend == 0 or dividend < divisor:
            return 0
        temp = divisor
        i = 0
        while temp <= dividend:
            i += 1
            temp += temp
        i -= 1

        quotient = 0
        while i >= 0:
            if dividend - (divisor << i) >= 0:
                dividend -= divisor << i
                quotient += 1 << i
            i -= 1

        if (sign):
            quotient = -quotient
        return max(-2147483648, min(2147483647, quotient))

# test
s = Solution()
print(s.divide(0, 3))
print(s.divide(2, 3))
print(s.divide(16, 3))
print(s.divide(10, 3))
print(s.divide(-12, -4))
print(s.divide(-12, 4))
print(s.divide(-12, -4))
print(s.divide(100, 99))
print(s.divide(100, 11))
print(s.divide(-2147483648, -1))
print(s.divide(-1100540749, -1090366779))
print(s.divide(1, 1))
