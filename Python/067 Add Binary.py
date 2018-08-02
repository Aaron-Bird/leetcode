# Given two binary strings, return their sum (also a binary string).

# The input strings are both non-empty and contains only characters 1 or 0.

# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"


class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        result = ''
        aI = len(a) - 1
        bI = len(b) - 1
        carry = 0
        while aI >= 0 or bI >= 0:
            aNum = 0
            bNum = 0
            if aI >= 0:
                aNum = int(a[aI])
            if bI >= 0:
                bNum = int(b[bI])

            num = aNum ^ bNum ^ carry
            # carry = aNum ^ bNum ? carry : aNum
            if not aNum ^ bNum:
                carry = aNum

            result = str(num) + result
            aI -= 1
            bI -= 1

        if carry > 0:
            result = str(carry) + result

        return result

# test
s = Solution()
print(s.addBinary('1', '111'))
