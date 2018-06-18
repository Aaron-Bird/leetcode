# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# Note:

# The solution set must not contain duplicate triplets.

# Example:

# Given array nums = [-1, 0, 1, 2, -1, -4],

# A solution set is:
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]


class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()

        arr = []
        length = len(nums)
        for i in range(length - 2):
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            start = i + 1
            end = length - 1
            while start < end:
                sum = nums[i] + nums[start] + nums[end]
                if sum > 0:
                    end -= 1
                elif sum < 0:
                    start += 1
                else:
                    arr.append([nums[i], nums[start], nums[end]])
                    end -= 1
                    while start < end and nums[end] == nums[end + 1]:
                        end -= 1
                    while start < end and nums[start] == nums[start + 1]:
                        start += 1

        return arr


# test
s = Solution()
print(s.threeSum([-1, 0, 1, 2, -1, -4]))
print(s.threeSum([0, 0, 0, 0]))
