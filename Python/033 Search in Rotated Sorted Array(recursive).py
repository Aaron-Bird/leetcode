# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

# (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

# You are given a target value to search. If found in the array return its index, otherwise return -1.

# You may assume no duplicate exists in the array.

# Your algorithm's runtime complexity must be in the order of O(log n).

# Example 1:

# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4
# Example 2:

# Input: nums = [4,5,6,7,0,1,2], target = 3
# Output: -1


class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        def callback(start, end):
            if start > end:
                return - 1
            middle = start + (end - start) / 2
            if nums[middle] == target:
                return middle
            elif nums[start] == target:
                return start
            elif nums[end] == target:
                return end
            if nums[middle] < nums[end]:
                if nums[middle] < target < nums[end]:
                    return callback(middle + 1, end - 1)
                else:
                    return callback(start + 1, middle - 1)
            else:
                if nums[start] < target < nums[middle]:
                    return callback(start + 1, middle - 1)
                else:
                    return callback(middle + 1, end - 1)
        return callback(0, len(nums) - 1)

# test
s = Solution()
print(s.search([4, 5, 6, 7, 0, 1, 2], 0))
print(s.search([4, 5, 6, 7, 0, 1, 2], 3))
print(s.search([2, 3, 4, 5, 6, 7, 0, 1], 0))
print(s.search([2, 3, 4, 5, 6, 7, 0, 1], 2))
print(s.search([2, 3, 4, 5, 6, 7, 0, 1], 1))
print(s.search([0, 1, 2, 3, 4, 5, 6, 7], 6))
print(s.search([1, 2, 3, 4, 5, 6, 7, 1], 6))
print(s.search([1], 1))
