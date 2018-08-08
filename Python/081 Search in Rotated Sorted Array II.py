# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

# (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

# You are given a target value to search. If found in the array return true, otherwise return false.

# Example 1:

# Input: nums = [2,5,6,0,0,1,2], target = 0
# Output: true
# Example 2:

# Input: nums = [2,5,6,0,0,1,2], target = 3
# Output: false
# Follow up:

# This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
# Would this affect the run-time complexity? How and why?


class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: bool
        """
        length = len(nums)
        i, j = 0, length - 1

        while i <= j:
            mid = i + (j - i) / 2
            if nums[mid] == target:
                return True

            if nums[i] == nums[mid] == nums[j]:
                i += 1
                j -= 1
            elif nums[i] <= nums[mid]:
                if nums[i] <= target < nums[mid]:
                    j = mid - 1
                else:
                    i = mid + 1
            else:
                if nums[mid] < target <= nums[j]:
                    i = mid + 1
                else:
                    j = mid - 1
        return False

# test
s = Solution()
print(s.search([2, 5, 6, 0, 0, 1, 2], 0))
print(s.search([1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2))
print(s.search([1, 2, 1], 1))
