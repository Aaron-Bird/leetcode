# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.


class Solution(object):
    def isPrefix(self, strs, middle):
        str1 = strs[0]
        prefix = str1[0: middle]
        for i in strs:
            if not i.startswith(prefix):
                return False
        return True

    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """   
        if len(strs) == 0:
            return ''
        
        front = 0
        end = len(strs[0])
        while(front <= end):
            middle = front + (end - front) / 2
            if self.isPrefix(strs, middle):
                front = middle + 1
            else:
                end = middle - 1
        return strs[0][0: front + (end - front) / 2]

# test
s = Solution()
print(s.longestCommonPrefix(['flower', 'flow', 'flight']))
print(s.longestCommonPrefix(['']))
print(s.longestCommonPrefix(['  ']))
print(s.longestCommonPrefix(['a']))
print(s.longestCommonPrefix(["abca","abc"]))   