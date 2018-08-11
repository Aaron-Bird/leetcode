# Given a string containing only digits, restore it by returning all possible valid IP address combinations.

# Example:

# Input: "25525511135"
# Output: ["255.255.11.135", "255.255.111.35"]


class Solution(object):
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        result = []
        sLen = len(s)
        if sLen < 4 or sLen > 12:
            return result

        def callback(i, arr):
            arrLen = len(arr)
            if arrLen == 4 and i == sLen:
                result.append('.'.join(arr))

            if arrLen < 4:
                for j in range(i + 1, i + 3 + 1):
                    if j > sLen:
                        return

                    string = s[i: j]
                    if j == i + 2 and string[0] == '0':
                        continue
                    if j == i + 3 and (int(string) > 255 or string[0] == '0'):
                        continue

                    arr.append(string)
                    callback(j, arr)
                    arr.pop()

        for j in range(1, 4):
            string = s[0: j]
            if j == 2 and string[0] == '0':
                continue
            if j == 3 and (int(string) > 255 or string[0] == '0'):
                continue

            callback(j, [string])
        return result

# test
s = Solution()
print(s.restoreIpAddresses('25525511135'))
