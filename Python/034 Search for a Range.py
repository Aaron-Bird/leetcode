# Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

# Your algorithm's runtime complexity must be in the order of O(log n).

# If the target is not found in the array, return [-1, -1].

# Example 1:

# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]
# Example 2:

# Input: nums = [5,7,7,8,8,10], target = 6
# Output: [-1,-1]


class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        length = len(nums)
        i, j = 0, length - 1
        left = None
        while i <= j:
            mid = i + (j - i) // 2
            if nums[mid] < target:
                i = mid + 1
            elif target < nums[mid]:
                j = mid - 1
            else:
                if mid == 0 or nums[mid - 1] != target:
                    left = mid
                    break
                else:
                    j = mid - 1
        if left == None:
            return [-1, -1]

        i, j = left, length - 1
        right = None
        while i <= j:
            mid = i + (j - i) // 2
            if target < nums[mid]:
                j = mid - 1
            else:
                if mid == length - 1 or nums[mid + 1] != target:
                    right = mid
                    break
                else:
                    i = mid + 1
        return [left, right]

# test
s = Solution()
print(s.searchRange([1, 1, 1, 8, 8, 8, 9, 9], 8))
print(s.searchRange([2, 2], 2))
