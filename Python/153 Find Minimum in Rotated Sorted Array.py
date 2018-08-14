# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

# (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

# Find the minimum element.

# You may assume no duplicate exists in the array.

# Example 1:

# Input: [3,4,5,1,2]
# Output: 1
# Example 2:

# Input: [4,5,6,7,0,1,2]
# Output: 0


class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i, j = 0, len(nums) - 1
        while i < j:
            mid = i + (j - i) // 2
            if nums[mid] < nums[j]:
                j = mid
            else:
                i = mid + 1
        return nums[i]

# test
s = Solution()
print(s.findMin([3, 4, 5, 1, 2]))
print(s.findMin([2, 3, 4, 5, 1]))
