# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

# Example 1:

# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: "cbbd"
# Output: "bb"

class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) < 2:
           return s
        oddStr = '^#'
        for i in s:
            oddStr += i + '#'
        oddStr += '$'
        paliLenList = [1] * len(oddStr)
        middle, right = 0, 0
        maxIndex, maxLen = 0, 0
        for i in range(1, len(oddStr) - 1):
            if i < right:
                paliLenList[i] = min(paliLenList[middle * 2 - i], right - i)
            while oddStr[i + paliLenList[i]] == oddStr[i - paliLenList[i]]:
                paliLenList[i] += 1
            if i + paliLenList[i] > right:
                right = i + paliLenList[i]
                middle = i
            if paliLenList[i] > maxLen:
                maxLen = paliLenList[i]
                maxIndex = i
        maxStart = (maxIndex - maxLen + 1) / 2
        return s[maxStart: maxStart + maxLen - 1]
        
# test
s = Solution()
print(s.longestPalindrome('babad'))
print(s.longestPalindrome('cbbd'))
print(s.longestPalindrome('a'))
print(s.longestPalindrome('bananas'))
print(s.longestPalindrome('aaabaaaa'))