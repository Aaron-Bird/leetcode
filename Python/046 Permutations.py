# Given a collection of distinct integers, return all possible permutations.

# Example:

# Input: [1,2,3]
# Output:
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]


class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        length = len(nums)
        result = []

        def callback(arr):
            if len(arr) == length:
                result.append(arr[:])
            for j in nums:
                if j in arr:
                    continue
                arr.append(j)
                callback(arr)
                arr.pop()
        callback([])
        return result

# test
s = Solution()
print(s.permute([1, 2, 3]))
