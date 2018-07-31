# Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

# If the last word does not exist, return 0.

# Note: A word is defined as a character sequence consists of non-space characters only.

# Example:

# Input: "Hello World"
# Output: 5


class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        wordLen = 0
        rIndex = len(s) - 1
        while rIndex >= 0 and s[rIndex] == ' ':
            rIndex -= 1
        while rIndex >= 0 and s[rIndex] != ' ':
            wordLen += 1
            rIndex -= 1
        return wordLen

# test
s = Solution()
print(s.lengthOfLastWord('Hello World'))
print(s.lengthOfLastWord('a '))
print(s.lengthOfLastWord(''))
