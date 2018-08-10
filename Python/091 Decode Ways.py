# A message containing letters from A-Z is being encoded to numbers using the following mapping:

# 'A' -> 1
# 'B' -> 2
# ...
# 'Z' -> 26
# Given a non-empty string containing only digits, determine the total number of ways to decode it.

# Example 1:

# Input: "12"
# Output: 2
# Explanation: It could be decoded as "AB" (1 2) or "L" (12).
# Example 2:

# Input: "226"
# Output: 3
# Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


class Solution(object):
    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
        if s[0] == '0':
            return 0

        i = 1
        length = len(s)
        dyna = [1]
        while i <= length:
            amount = 0
            if s[i - 1] != '0':
                amount += dyna[i - 1]
            if i > 1 and 10 <= int(s[i - 2] + s[i - 1]) <= 26:
                amount += dyna[i - 2]
            dyna.append(amount)

            i += 1
        return dyna[i - 1]

# test
s = Solution()
print(s.numDecodings('12'))
print(s.numDecodings('100'))
print(s.numDecodings('01'))
print(s.numDecodings('100'))
print(s.numDecodings('101'))
print(s.numDecodings('110'))
