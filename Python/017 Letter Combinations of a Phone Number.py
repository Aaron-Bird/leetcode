# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

# A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

# ![image](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

# Example:

# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
# Note:

# Although the above answer is in lexicographical order, your answer could be in any order you want.


class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        map = ['', '', 'abc', 'def', 'ghi',
               'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

        length = len(digits)
        if length == 0:
            return []
        first = int(digits[0])
        arr = [i for i in map[first]]
        i = 1
        while i < length:
            temp = []
            num = int(digits[i])
            for j in arr:
                for k in map[num]:
                    temp.append(j + k)
            arr = temp

            i += 1
        return arr


# test
s = Solution()
print(s.letterCombinations('23'))
print(s.letterCombinations('234'))
