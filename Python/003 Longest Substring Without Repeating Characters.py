# Given a string, find the length of the longest substring without repeating characters.

# Examples:

# Given "abcabcbb", the answer is "abc", which the length is 3.

# Given "bbbbb", the answer is "b", with the length of 1.

# Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        hashmap = {}
        lenList = []
        j = 0
        for i in range(len(s)):
            letter = s[i]
            if (letter in hashmap) and (hashmap[letter] >= j):
                lenList.append(i - j)
                j = hashmap[letter] + 1
            hashmap[letter] = i
        lenList.append(len(s) - j)
        return max(lenList)

# test
s = Solution()
print(s.lengthOfLongestSubstring("abc"))
print(s.lengthOfLongestSubstring("bbbbb"))
print(s.lengthOfLongestSubstring("pwwkew"))
print(s.lengthOfLongestSubstring("abcabcbb"))
print(s.lengthOfLongestSubstring("dvdf"))
print(s.lengthOfLongestSubstring("dvd"))
print(s.lengthOfLongestSubstring(""))