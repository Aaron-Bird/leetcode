# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# Example 1:

# Input: haystack = "hello", needle = "ll"
# Output: 2
# Example 2:

# Input: haystack = "aaaaa", needle = "bba"
# Output: -1
# Clarification:

# What should we return when needle is an empty string? This is a great question to ask during an interview.

# For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        hLen, nLen = len(haystack), len(needle)
        if needle == '':
            return 0
        if hLen < nLen:
            return -1
        p = self.partialMatch(needle)
        left, i = 0, 0
        while i < hLen and left < nLen:
            if needle[left] == haystack[i]:
                left += 1
                i += 1
            else:
                if left != 0:
                    left = p[left - 1]
                else:
                    i += 1
        if left == len(needle):
            return i - left
        return -1

    def partialMatch(self, string):
        p = [0]
        i, j = 0, 1
        length = len(string)
        while j < length:
            if string[i] == string[j]:
                p.append(i + 1)
                i += 1
                j += 1
            else:
                if i != 0:
                    i = p[i - 1]
                else:
                    p.append(0)
                    j += 1
        return p

# test
s = Solution()
print(s.strStr('a', 'a'))
print(s.strStr('hello', 'll'))
print(s.strStr('aaaaa', 'bba'))
print(s.strStr('abcdacd', 'acd'))
print(s.strStr('mississippi', 'issip'))
print(s.strStr('aaa', 'aaaa'))
