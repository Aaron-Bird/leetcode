# The count-and-say sequence is the sequence of integers with the first five terms as following:

# 1.     1
# 2.     11
# 3.     21
# 4.     1211
# 5.     111221
# 1 is read off as "one 1" or 11.
# 11 is read off as "two 1s" or 21.
# 21 is read off as "one 2, then one 1" or 1211.
# Given an integer n, generate the nth term of the count-and-say sequence.

# Note: Each term of the sequence of integers will be represented as a string.

# Example 1:

# Input: 1
# Output: "1"
# Example 2:

# Input: 4
# Output: "1211"


class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        output = '1'
        while n > 1:
            temp = ''
            count = 1
            num = output[0]
            length = len(output)
            for i in range(1, length):
                if output[i] != num:
                    temp += str(count) + str(output[i - 1])
                    num = output[i]
                    count = 1
                else:
                    count += 1
            temp += str(count) + str(output[length - 1])

            output = temp
            n -= 1
        return output

# test
s = Solution()
print(s.countAndSay(1))
print(s.countAndSay(2))
print(s.countAndSay(3))
print(s.countAndSay(4))
print(s.countAndSay(5))
print(s.countAndSay(6))
print(s.countAndSay(7))
