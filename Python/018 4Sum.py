# Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

# Note:

# The solution set must not contain duplicate quadruplets.

# Example:

# Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

# A solution set is:
# [
#   [-1,  0, 0, 1],
#   [-2, -1, 1, 2],
#   [-2,  0, 0, 2]
# ]


class Solution(object):
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        result = []
        length = len(nums)
        nums.sort()
        for i in range(0, length - 3):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            if nums[i + 1] * 3 > target - nums[i] or nums[-1] * 3 < target - nums[i]:
                continue
            for j in range(i + 1, length - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                if nums[j + 1] * 2 > target - nums[i] - nums[j] or nums[-1] * 2 < target - nums[i] - nums[j]:
                    continue

                start = j + 1
                end = length - 1
                while start < end:
                    sum = nums[i] + nums[j] + nums[start] + nums[end]
                    if sum > target:
                        end -= 1
                    elif sum < target:
                        start += 1
                    else:
                        result.append([nums[i], nums[j], nums[start], nums[end]])
                        end -= 1
                        while start < end and nums[end] == nums[end + 1]:
                            end -= 1
        return result

# test
s = Solution()
print(s.fourSum([1, 0, -1, 0, -2, 2], 0))
print(s.fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))
print(s.fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4))
print(s.fourSum([0, 0, 0, 0], 0))
