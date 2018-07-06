# Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You may assume no duplicates in the array.

# Example 1:

# Input: [1,3,5,6], 5
# Output: 2
# Example 2:

# Input: [1,3,5,6], 2
# Output: 1
# Example 3:

# Input: [1,3,5,6], 7
# Output: 4
# Example 4:

# Input: [1,3,5,6], 0
# Output: 0


class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        length = len(nums)
        if target < nums[0]:
            return 0
        elif target > nums[length - 1]:
            return length
        i, j = 0, length
        while i <= j:
            mid = i + (j - i) / 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                if nums[mid + 1] > target:
                    return mid + 1
                i = mid + 1
            else:
                if nums[mid - 1] < target:
                    return mid
                j = mid - 1

# test
s = Solution()
print(s.searchInsert([1, 3, 5, 6], 5))
print(s.searchInsert([1, 3, 5, 6], 2))
print(s.searchInsert([1, 3, 5, 6], 7))
print(s.searchInsert([1, 3, 5, 6], 0))
