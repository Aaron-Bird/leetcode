# Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

# Example:

# Input: [1,2,2]
# Output:
# [
#   [2],
#   [1],
#   [1,2,2],
#   [2,2],
#   [1,2],
#   []
# ]


class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort(lambda a, b: a - b)
        result = [[]]

        def callback(i, set):
            if i >= len(nums):
                return
            result.append(set[:])
            for j in range(i + 1, len(nums)):
                if (j == i + 1 or nums[j] != nums[j - 1]) and nums[j] >= nums[i]:
                    set.append(nums[j])
                    callback(j, set)
                    set.pop()

        for i in range(0, len(nums)):
            if i == 0 or nums[i] != nums[i - 1]:
                print(nums[i])
                callback(i, [nums[i]])

        return result

# test
s = Solution()
print(s.subsetsWithDup([1, 2, 3]))
