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


# 从左向右遍历字符串
# 遇到左侧符号时,将对应的右侧符号压入栈中
# 遇到右侧符号时,将栈中最后一个元素弹出.如果二者不等,返回False.
# 遍历结束后,如果栈中还有剩余元素,返回False.反之,返回True.

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        for i in s:
            if i == '(':
                stack.append(')')
            elif i == '[':
                stack.append(']')
            elif i == '{':
                stack.append('}')
            elif (not stack) or (stack.pop() != i):
                return False
        if len(stack) > 0:
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
print(s.isValid('['))