# Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

# Example:

# Given array nums = [-1, 2, 1, -4], and target = 1.

# The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        length = len(nums)
        if length == 3:
            return nums[0] + nums[1] + nums[2]
        closet = None
        for i in range(length - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            start = i + 1
            end = length - 1
            while start < end:
                sum = nums[i] + nums[start] + nums[end]
                distance = sum - target
                if (not closet) or (abs(distance) < abs(closet)):
                    closet = distance

                if sum > target:
                    end -= 1
                elif sum < target:
                    start += 1
                else:
                    return target

        return target + closet


# test
s = Solution()
print(s.threeSumClosest([-1, 2, 1, -4], 1))
print(s.threeSumClosest([0, 0, 0], 1))
print(s.threeSumClosest([1, 1, 1, 1], 0))
print(s.threeSumClosest([1, 1, 1, 0], -100))
