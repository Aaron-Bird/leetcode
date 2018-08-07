# Given a set of distinct integers, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

# Example:

# Input: nums = [1,2,3]
# Output:
# [
#   [3],
#   [1],
#   [2],
#   [1,2,3],
#   [1,3],
#   [2,3],
#   [1,2],
#   []
# ]


class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        for i in range(0, len(nums)):
            for j in range(0, len(result)):
                arr = result[j][:]
                arr.append(nums[i])
                result.append(arr)
            result.append([nums[i]])
        result.append([])
        return result


# test
s = Solution()
print(s.subsets([1, 2, 3]))
