# Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

# Example:

# Input: n = 4, k = 2
# Output:
# [
#   [2,4],
#   [3,4],
#   [2,3],
#   [1,2],
#   [1,3],
#   [1,4],
# ]


class Solution(object):
    def combine(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[List[int]]
        """
        result = []

        def callback(i, arr):
            if len(arr) == k:
                result.append(arr[:])
                return
            for j in range(i + 1, n + 1):
                arr.append(j)
                callback(j, arr)
                arr.pop()

        for i in range(1, n + 1):
            callback(i, [i])

        return result

# test
s = Solution()
print(s.combine(4, 2))
