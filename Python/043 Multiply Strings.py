# Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

# Example 1:

# Input: num1 = "2", num2 = "3"
# Output: "6"
# Example 2:

# Input: num1 = "123", num2 = "456"
# Output: "56088"
# Note:

# The length of both num1 and num2 is < 110.
# Both num1 and num2 contain only digits 0-9.
# Both num1 and num2 do not contain any leading zero, except the number 0 itself.
# You must not use any built-in BigInteger library or convert the inputs to integer directly.


class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        l1, l2 = len(num1), len(num2)
        arr = [0] * (l1 + l2)
        for i in range(l1 - 1, -1, -1):
            for j in range(l2 - 1, -1, -1):
                num = int(num1[i]) * int(num2[j])

                pos1 = i + j
                pos2 = i + j + 1

                num += arr[pos2]
                arr[pos1] += num // 10
                arr[pos2] = num % 10

        while arr[0] == 0 and len(arr) > 1:
            del arr[0]
        return ''.join(map(str, arr))

# test
s = Solution()
print(s.multiply('1', '2'))
print(s.multiply('1', '9'))
print(s.multiply('1', '11'))
print(s.multiply('9', '9'))
print(s.multiply('13', '4'))
print(s.multiply('123', '5'))
print(s.multiply('123', '456'))
print(s.multiply('123', '0'))
