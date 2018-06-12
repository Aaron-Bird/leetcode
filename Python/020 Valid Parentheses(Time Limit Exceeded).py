# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Note that an empty string is also considered valid.

# Example 1:

# Input: "()"
# Output: true
# Example 2:

# Input: "()[]{}"
# Output: true
# Example 3:

# Input: "(]"
# Output: false
# Example 4:

# Input: "([)]"
# Output: false
# Example 5:

# Input: "{[]}"
# Output: true

# 从后向前遍历字符串,删除成对的符号.
# 如果遍历后字符串长度未改变(没找到成对符号),则返回False.反之继续从后向前遍历字符串,直到字符串长度为0,返回True.

MATE = {
    ')': '(',
    ']': '[',
    '}': '{',
}
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        while len(s) > 0:
            sLen = len(s)
            i = sLen - 1
            while i > 0:
                if (s[i] in MATE) and (MATE[s[i]]  == s[i - 1]):
                    s = s[0: i - 1] + s[i + 1:]
                    i -= 1
                i -= 1
            if len(s) == sLen:
                return False
        return True


# test
s = Solution()
print(s.isValid('()'))
print(s.isValid('{}'))
print(s.isValid('[]'))
print(s.isValid('([])'))
print(s.isValid('({[]})'))
print(s.isValid('{{]'))
print(s.isValid('{{]})'))
